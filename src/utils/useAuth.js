import { useState, useEffect } from "react";

const apiURL = "https://api.bar-news-explorer.students.nomoreparties.sbs";

function useAuth() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const newToken = localStorage.getItem("jwt");
    if (newToken) setToken(newToken);
  });

  function handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`error: ${res.status}, ${res.statusText}`);
  }


  return {
    checkToken() {
      return this.apiCall({ path: "/users/me" });
    },
    signIn({ email, password }) {
      return this.apiCall({
        method: "POST",
        data: {
          email,
          password,
        },
      }).then(({ token: newToken }) => {
        localStorage.setItem("jwt", newToken);
        setToken(newToken);
        return this.checkToken();
      });
    },
    signOut() {
      localStorage.removeItem("jwt");
    },
    apiCall({ path = "", method = "GET", data }) {
      if (!token) return Promise.reject({ message: "User not signed in" });
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