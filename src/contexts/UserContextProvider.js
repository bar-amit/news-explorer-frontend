import { useState, useEffect } from "react";
import useAuth from "../utils/useAuth";

import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const auth = useAuth({storageToken: localStorage.getItem("jwt") || null});

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  const Api = {
    signIn({ email, password }) {
      return auth.signIn({ email, password }).then((userData) => {
        if (userData) setUser(userData);
      });
    },
    signOut() {
      auth.signOut();
      setUser(null);
    },
    getArticles() {
      return auth.apiCall({ path: "/articles" }).then((data) => {
        if (data) setArticles(data);
        return;
      });
    },
    saveArticle({ keyword, title, text, date, source, link, image }) {
      return auth.apiCall({
        path: "/articles",
        method: "POST",
        data: {
          keyword,
          title,
          text,
          date,
          source,
          link,
          image,
        },
      })
      .then(article => setArticles([article, ...articles]));
    },
    deleteArticle(id) {
      return auth
        .apiCall({ path: `/articles/${id}`, method: "DELETE" })
        .then(() => {
          setArticles(articles.filter(({ _id }) => _id !== id));
          return;
        });
    },
  };

  useEffect(() => {
    if (!localStorage.getItem("jwt"))
      auth.signIn({ email: "bar@mail.com", password: "123456" });
    else if (!user)
      auth.checkToken().then((userData) => {
        if (userData) setUser(userData);
      });
  }, [auth, user]);

  const value = { user, articles, Api };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;