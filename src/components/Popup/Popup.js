function Popup({children, isOpen, close}) {
    function overlayClick(e){
        e.stopPropogation();
        if(e.target.classList.indludes('popup')) close();
    }

    return (
        <div className={`popup ${isOpen ? 'popup_visible' : ''}`} onClick={overlayClick}>
            <div className="popup__container">
                <button type="button" onClick={close}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Popup;