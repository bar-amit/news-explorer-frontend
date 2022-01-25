import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserContextProvider from "../../contexts/UserContextProvider";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupMessage from "../PopupMessage/PopupMessage";
import "./App.css";

function App() {
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
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  function closeUserPopup() {
    setIsUserPopupOpen(false);
  }
  function openUserPopup() {
    setIsUserPopupOpen(true);
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMessagePopup();
        closeUserPopup();
      }
    };
    if (isUserPopupOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isUserPopupOpen]);

  return (
    <div className="App">
      <UserContextProvider>
        <Header signUser={openUserPopup} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="saved-news" element={<SavedNews />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        <Footer />
        <PopupWithForm
          isOpen={isUserPopupOpen}
          close={closeUserPopup}
          openMessage={openMessagePopup}
        />
        <PopupMessage
          isOpen={isMessagePopupOpen}
          close={closeMessagePopup}
          isSuccesful={isSuccesful}
          openLogin={openUserPopup}
        />
      </UserContextProvider>
    </div>
  );
}

export default App;
