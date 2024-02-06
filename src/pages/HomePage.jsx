// Component
import Contactform from "../components/contactForm";

// Icons
import cssIcon from "../assets/icons/css-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import htmlIcon from "../assets/icons/html-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import toolIcon from "../assets/icons/tools-icon.svg";
import igileFlow from "../assets/agile-logo.svg";
import versionControl from "../assets/versiebeheer.svg";

// Images
import dzmedia from "../assets/images/dzmedia.png";
import icuApp from "../assets/images/icu-app.png";
import Avatar from "../assets/Avatar-2023.png";
import CircleBlue from "../assets/circle-blue.png";
import CircleYellow from "../assets/circle-yellow.png";

//Routes
import { Link } from "react-router-dom";

//Animations
import animations from "../animation-functions";

function Homepage() {
  //animations functions
  animations();

  return (
    <main>
      <section className="intro-home flex flex-center">
        <div className="width-50-pro">
          <h1 className="gradient-heading-yb to-top">Welkom bij mijn portfolio</h1>
          <p className="big-text to-top">
            Mijn naam is Deiver Zamora Cortez, en ik ben een front-end developer
            en multimedia designer.
          </p>
          <div className="two-buttons width-100-pro">
            <a href="#section-2" className="sc-button">
              Meer info
            </a>
            <Link to="/front-end-projecten" className="pr-button">
              Projecten
            </Link>
          </div>
        </div>
        <div className="width-50-pro home-images">
          <div className="circle-blue-img intro show">
            <img src={CircleBlue} alt="Circle blur" />
          </div>
          <div className="circle-yellow-img intro show">
            <img src={CircleYellow} alt="Circle blur" />
          </div>
          <div className="img-person-container show">
            <img className="price-img" src={Avatar} />
          </div>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section id="section-2" className="big-section flex move-section">
        <div className="width-50-pro">
          <h2 className="gradient-heading-yb show-element">Meer dan 3 jaar ervaring</h2>
          <p className="big-text show-element">
            Als front-end developer heb ik ervaring opgedaan in HTML, CSS en
            JavaScript. Met deze talen kan ik verschillende projecten maken.
          </p>
          <div className="two-buttons width-100-pro">
            <a href="#contact" className="sc-button">
              Contact
            </a>
            <Link to="/front-end-projecten" className="pr-button">
              Projecten
            </Link>
          </div>
        </div>
        <div className="width-50-pro flex flex-wrap flex-space-evenly">
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={htmlIcon} alt="" />
            </div>
            <h3 className="text-lc">Html</h3>
            <p>
              Bij het ontwikkelen van code let ik erop dat de HTML semantisch
              correct is.
            </p>
          </article>
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={cssIcon} alt="" />
            </div>
            <h3 className="text-lc">CSS</h3>
            <p>
              Met mijn kennis van CSS kan ik responsieve interfaces en animaties
              ontwikkelen.
            </p>
          </article>
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={jsIcon} alt="" />
            </div>
            <h3 className="text-lc">JavaScript</h3>
            <ul className="checked-list two-col-list">
              <li>React</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>GSAP</li>
              <li>SASS</li>
              <li>NPM</li>
            </ul>
          </article>
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={toolIcon} alt="" />
            </div>
            <h3 className="text-lc">Tools</h3>
            <ul className="checked-list flex flex-col">
              <li>VS Code</li>
              <li>Dreamweaver</li>
              <li>Brackets</li>
              <li>Terminal Bash</li>
            </ul>
          </article>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="big-section flex flex-row-reverse move-section">
        <div className="width-50-pro">
          <h2 className="gradient-heading-yb show-element">Werkflow ervaring</h2>
          <p className="big-text show-element">
            Ik heb de mogelijkheid gehad om te werken in een multidisciplinaire
            omgeving. Hierdoor ben ik bekend met de agile werkwijze en met
            versiebeheersystemen.
          </p>
          <div className="two-buttons width-100-pro">
            <a href="#contact" className="sc-button">
              Contact
            </a>
            <Link to="/front-end-projecten" className="pr-button">
              Projecten
            </Link>
          </div>
        </div>
        <div className="width-50-pro flex flex-wrap flex-space-evenly">
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={gitIcon} alt="" />
            </div>
            <h3 className="text-lc">Git tools</h3>
            <ul className="checked-list flex flex-col">
              <li>Github</li>
              <li>Gitkraker</li>
              <li>Sourcetree</li>
            </ul>
          </article>
          <article className="card-block width-33-pro show-element">
            <div className="circle-btn">
              <img src={toolIcon} alt="" />
            </div>
            <h3 className="text-lc">Agile tools</h3>
            <ul className="checked-list flex flex-col">
              <li>Azure</li>
              <li>Miror</li>
              <li>Trello</li>
            </ul>
          </article>
          <article className="card-block width-33-pro show-element">
            <h3 className="text-lc">Agile flow</h3>
            <div className="flex flex-center">
              <img className="width-70-pro" src={igileFlow} alt="" />
            </div>
          </article>
          <article className="card-block width-33-pro show-element">
            <h3 className="text-lc">Versiebeheer</h3>
            <div className="flex flex-center">
              <img src={versionControl} alt="" />
            </div>
          </article>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="big-section move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Mijn Front-end projecten
          </h2>
          <p className="big-text width-50-pro show-element">
            Hieronder vind u twee projecten waar ik het trotst op ben.
          </p>
        </div>

        <div className="flex flex-space-between move-section">
          <article className="project-card-block show-element">
            <h3 className="gradient-heading-yb">DZMEDIA</h3>
            <p>WordPress - UX/UI - HTML - CSS - JS(GSAP) - Lottie</p>
            <div className="section-separetor"></div>
            <div className="project-details">
              <p>
                In 2023 heb ik een website vernieuwd door een nieuw ontwerp te
                maken in Figma om vervolgens deze website te bouwen in het CMS
                WordPress. Binnen dit project heb ik ook JavaScript gebruikt om
                animaties te maken.
              </p>
              <a href="https://dzmedia.nl/" className="pr-button">
                Bekijken
              </a>
            </div>
            <img
              className="width-100-pro"
              src={dzmedia}
              alt="project-demo-picture"
            />
          </article>

          <article className="project-card-block show-element">
            <h3 className="gradient-heading-yb">iCu Dating App</h3>
            <p>NODE.js - HTML - CSS - PUG - MongoDB</p>
            <div className="section-separetor"></div>
            <div className="project-details">
              <p>
                Binnen mijn opleiding ben ik bezig geweest met het maken van een
                NODE.js web applicatie. Deze applicatie is gebouwd met de
                framework Express en wordt ondersteund met EJS 6. Binnen dit
                project heb ik gewerkt aan een feature waar je een account kan
                aanmaken, verwijderen en aanpassen. Tot slot is de website
                gecompileerd met PUG, dit is een template engine waar je HTML en
                JS samen in een document kan gebruiken waardoor de code via de
                back-end vertaald wordt naar de client-side als normaal HTML-5.
              </p>
              <a href="https://icu-app.onrender.com/" className="pr-button">
                Bekijken
              </a>
            </div>
            <img
              className="width-100-pro"
              src={icuApp}
              alt="project-demo-picture"
            />
          </article>
        </div>

        <div className="flex flex-col-center text-center padding-2rem">
          <Link to="/front-end-projecten" className="pr-button">
            Meer projecten bekijken
          </Link>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="padding-4rem-tb move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">Samenwerken?</h2>
          <p className="big-text width-50-pro show-element">
            Dit komt goed uit. Op dit moment ben ik op zoek naar een bedrijf met
            creatieve designers en geweldige developers. Als u denkt dat we
            kunnen samenwerken, kunt u mij <a href="tel:0611838539">bellen</a>{" "}
            of een <a href="mailto:deiverzc@gmail.com">e-mail</a> sturen.
          </p>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section id="contact" className="contact-section flex flex-space-between move-section">
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
export default Homepage;
