// Link to the router
import { Link } from "react-router-dom";

// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Components
import Contactform from "../components/contactForm";

//Animations
import animations from "../animation-functions";

function NotFound() {
  //animations functions
  animations();

  return (
    <main>
      <section className="big-section 404-page move-section">
        <div className="flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            Volgens mij ben je de weg kwijt geraakt
          </h1>
          <p>Ik zal je helpen hieronder vind je een par links:</p>
          <ul className="ul-links">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/front-end-projecten">Front-end projecten</Link>
            </li>
            <li>
              <Link to="/multimedia-projecten">Multimedia projecten</Link>
            </li>
            <li>
              <Link to="/meer-over-mij">Meer over mij</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section
        id="contact"
        className="contact-section flex flex-space-between move-section"
      >
        <div className="width-45-pro">
          <h2 className="gradient-heading-yb show-element">Netwerken?</h2>
          <p className="big-text show-element">
            Wij kunnen altijd elkaar digitaal ontmoeten door mij te volgen in de
            onderstaande social media. Voor direct contact kunt u het volgende
            fomulier invullen.
          </p>
          <div className="width-50-pro flex flex-space-between sm-buttons">
            <a
              target="_blank"
              className="circle-btn show-element"
              href="https://nl.linkedin.com/in/deiver-zamora-cortez-378405110?original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
            >
              <img src={linkedInIcon} alt="LinkedIn icon" />
              <span className="disapear">LinkedIn</span>
            </a>
            <a
              target="_blank"
              className="circle-btn show-element"
              href="https://github.com/deinca"
            >
              <img src={githubIcon} alt="" />
              <span className="disapear">Github</span>
            </a>
            <a
              target="_blank"
              className="circle-btn show-element"
              href="https://www.instagram.com/dzmedia.nl/"
            >
              <img src={insIcon} alt="Instragram icon" />
              <span className="disapear">Instagram</span>
            </a>
          </div>
        </div>
        <div className="width-45-pro">
          <article className="card-block show-element">
            <Contactform />
          </article>
        </div>
      </section>
    </main>
  );
}
export default NotFound;
