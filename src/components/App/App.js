import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import { Routes, Route } from "react-router-dom";
import useSearch from "../../utils/useSearch";
import ProtectedRoute from "../ProtectedRout/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupMessage from "../PopupMessage/PopupMessage";
import "./App.css";

function App() {
  const { Api, user } = useContext(UserContext);

  /* Message Popup */
  const [isSuccesful, setIsSuccesful] = useState(false);
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState(false);
  function closeMessagePopup() {
    setIsMessagePopupOpen(false);
  }
  function openMessagePopup(status = false) {
    setIsSuccesful(status);
    setIsMessagePopupOpen(true);
  }

  /* User Popup */
  const [isRegistered, setIsRegistered] = useState(true);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  function closeUserPopup() {
    setIsUserPopupOpen(false);
  }
  function openUserPopup(registered = false) {
    setIsRegistered(registered);
    setIsUserPopupOpen(true);
  }
  const switchForm = () => setIsRegistered(!isRegistered);
  const openLoginForm = () => openUserPopup(true);

  /* Search */
  const search = useSearch();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMessagePopup();
        closeUserPopup();
      }
    };
    if (isUserPopupOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isUserPopupOpen]);

  useEffect(() => {
    Api.getArticles().catch((e) => {});
  }, [user]);

  return (
    <div className="App">
      <Header signUser={openUserPopup} />
      <Routes>
        <Route
          path="/"
          element={<Main search={search} register={openUserPopup} />}
        />
        <Route
          path="saved-news"
          element={<ProtectedRoute element={<SavedNews />} />}
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
      <PopupWithForm
        isOpen={isUserPopupOpen}
        close={closeUserPopup}
        openMessage={openMessagePopup}
        isRegistered={isRegistered}
        switchForm={switchForm}
      />
      <PopupMessage
        isOpen={isMessagePopupOpen}
        close={closeMessagePopup}
        isSuccesful={isSuccesful}
        openLogin={openLoginForm}
      />
    </div>
  );
}

export default App;
