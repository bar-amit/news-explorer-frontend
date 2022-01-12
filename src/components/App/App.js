import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./App.css";

function App() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  function closeUserPopup(){
    setIsUserPopupOpen(false);
  }
  function openUserPopup() {
    setIsUserPopupOpen(true);
  }
  useEffect(() => {
    const handleEsc = (e) => {
      if(e.key === 'Escape') closeUserPopup();
    };
    if(isUserPopupOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isUserPopupOpen]);

  return <div className="App">
    <Header signUser={openUserPopup} />
    <Main />
    <Footer />
    <PopupWithForm isOpen={isUserPopupOpen} close={closeUserPopup} />
  </div>;
}

export default App;
