import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__message">Searching for news...</p>
    </div>
  );
}

export default Preloader;
