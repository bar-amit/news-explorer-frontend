import notFoundIcon from "../../images/not-found.svg";
import "./NotFound.css";

function NotFound(){
    return (
      <section className="not-found">
        <img src={notFoundIcon} alt="not found" />
        <h2 className="not-found__title">Nothing found</h2>
        <p className="not-found__text">
          Sorry, but nothing matched your search terms.
        </p>
      </section>
    );
}

export default NotFound;