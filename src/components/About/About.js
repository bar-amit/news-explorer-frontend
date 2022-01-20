import "./About.css";
import aboutImage from "../../images/main__image.png";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={aboutImage} />
      <article className="about__column">
        <h3 className="about__title">About the author</h3>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </article>
    </section>
  );
}

export default About;
