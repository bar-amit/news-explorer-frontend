import { useState, useEffect } from "react";
import useAuth from "../../utils/useAuth";

import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const auth = useAuth({storageToken: localStorage.getItem("jwt") || null});

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  const Api = {
    signIn({ email, password }) {
      return auth.signIn({ email, password }).then((userData) => {
        if (userData) setUser(userData);
        return Promise.resolve(true);
      });
    },
    signOut() {
      auth.signOut();
      setUser(null);
      setArticles([]);
    },
    signUp({email, password, name}){
      return auth.apiCall({
        path: "/signup",
        method: "POST",
        data: { email, password, name },
      });
    },
    getArticles() {
      return auth.apiCall({ path: "/articles" }).then((data) => {
        if (data) setArticles(data);
        return Promise.resolve();
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
          return Promise.resolve();
        });
    },
  };

  useEffect(() => {
    if (!user)
    auth.checkToken({token: localStorage.getItem("jwt")}).then((userData) => {
      if (userData) setUser(userData);
    });
  }, [auth, user]);

  const value = { user, articles, Api };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;