import { useState } from "react";

const apiURL = "https://api.bar-news-explorer.students.nomoreparties.sbs";

function useAuth({storageToken}) {
  const [token, setToken] = useState(storageToken);

  function handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }


  return {
    checkToken({token}) {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      return fetch(`${apiURL}/users/me`, {
        method: "GET",
        headers,
      }).then(handleResponse);
    },
    signIn({ email, password }) {
      return this.apiCall({
        path: '/signin',
        method: "POST",
        data: {
          email,
          password,
        },
      }).then(({ token: newToken }) => {
        localStorage.setItem("jwt", newToken);
        setToken(newToken);
        return this.checkToken({ token: newToken });
      });
    },
    signOut() {
      setToken("");
      localStorage.removeItem("jwt");
    },
    apiCall({ path = "", method = "GET", data }) {
      if (!token && path !== "/signin" && path !== "/signup")
        return Promise.reject({ message: "User not signed in" });
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      if (data)
        return fetch(`${apiURL}${path}`, {
          method,
          headers,
          body: JSON.stringify(data),
        }).then(handleResponse);
      return fetch(`${apiURL}${path}`, {
        method,
        headers,
      }).then(handleResponse);
    },
  };
}

export default useAuth;