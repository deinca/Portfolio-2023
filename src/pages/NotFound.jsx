// Link to the router
import { Link } from "react-router-dom";

//Animations
import animations from "../animation-functions";

function NotFound() {
  //animations functions
  animations();

  return (
    <main className="intro-content-block">
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
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
export default NotFound;
