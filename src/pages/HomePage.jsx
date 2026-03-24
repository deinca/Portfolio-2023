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
import portfolio from "../assets/images/portfolio-2023.png";
import merImg from "../assets/images/mercury.jpg";
import lumiImg from "../assets/images/luminext.jpg";
import seImg from "../assets/images/sovjet-ereveld.jpg";

//Routes
import { Link } from "react-router-dom";

//Animations
import animations from "../animation-functions";

import { HashLink } from "react-router-hash-link";

function Homepage() {
  //animations functions
  animations();

  return (
    <main>
      <section className="intro-home flex flex-center" id="firstSection">
        <div className="flex flex-center wrap">
          <div className="width-50-pro">
            <h1 className="gradient-heading-yb to-top">
              FRONT-END & Multimedia DESIGN
            </h1>
            <p className="mid-text to-top">
              Mijn naam is Deiver Zamora Cortez. Als front-end developer en
              multimedia designer ontwikkel ik moderne websites met oog voor
              design, functionaliteit en gebruiksvriendelijkheid.{" "}
            </p>
            <div className="two-buttons width-100-pro to-top">
              <a href="#section-2" className="sc-button">
                Ontdek meer
              </a>
              <a
                href="#section-4"
                className="pr-button"
              >
                Uitgelichte projecten
              </a>
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
        </div>
      </section>
      <div className="section-separetor"></div>

      <section
        id="section-2"
        className="big-section flex flex-center move-section"
      >
        <div className="flex  wrap inner-section">
          <div className="width-50-pro auto-m-ud flex flex-col">
            <h2 className="gradient-heading-yb show-element">
              Meer dan 3 jaar ervaring
            </h2>
            <p className="mid-text show-element">
              Als front-end developer heb ik de afgelopen jaren ervaring
              opgebouwd met HTML, CSS en JavaScript. Met deze technieken
              ontwikkel ik moderne en responsive interfaces, waarbij ik let op
              structuur, gebruiksvriendelijkheid en een verzorgde uitwerking van
              design naar een werkende website.
            </p>
            <div className="two-buttons width-100-pro">
              <a href="#section-3" className="sc-button">
                Workflow & Tools
              </a>
              <a
                href="#section-4"
                className="pr-button"
              >
                Uitgelichte projecten
              </a>
            </div>
          </div>
          <div className="width-50-pro flex flex-wrap flex-space-evenly flex-center">
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
                Met mijn kennis van CSS kan ik responsieve interfaces en
                animaties ontwikkelen.
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
                <li>SCSS</li>
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
                <li>Figma</li>
                <li>Adobe</li>
                <li>Terminal Bash</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section id="section-3"className="big-section flex flex-center flex-row-reverse move-section">
        <div className="flex wrap inner-section">
          <div className="width-50-pro auto-m-ud flex flex-col">
            <h2 className="gradient-heading-yb show-element">
              Workflow & Tools
            </h2>
            <p className="mid-text show-element">
              Binnen mijn workflow ben ik bekend met agile werkwijzen,
              versiebeheer en development tools. Ik werk graag gestructureerd en
              heb ervaring binnen een multidisciplinaire omgevingen. Daarnaast
              gebruik ik AI (ChatGPT) als ondersteunende tool om sneller te
              itereren, teksten te verfijnen en efficiënter tot oplossingen te
              komen.
            </p>
            <div className="two-buttons width-100-pro">
              <a href="#contact" className="sc-button">
                Contact
              </a>
              <a
                href="#section-4"
                className="pr-button"
              >
                Uitgelichte projecten
              </a>
            </div>
          </div>
          <div className="width-50-pro flex flex-wrap flex-space-evenly flex-center">
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
        </div>
      </section>
      <div className="section-separetor"></div>

      <section id="section-4" className="big-section move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Uitgelichte projecten
          </h2>
          <p className="big-text width-70-pro show-element">
            Hieronder vind je vier projecten waar ik met trots aan heb gewerkt.
          </p>
        </div>

        <div className="flex flex-center  move-section">
          <div className="flex wrap flex-space-between flex-wrap">
            <article className="project-card-block show-element">
              <h3 className="gradient-heading-yb">Portfolio</h3>
              <p>
                React framework - HTML - CSS - JavaScript - Vite - API's - GSAP-
                NPM
              </p>
              <div className="section-separetor"></div>
              <div className="project-details">
                <p>
                  Voor dit portfolio heb ik gewerkt met React en Vite. Daarnaast
                  heb ik GSAP gebruikt voor animaties en npm voor het beheren
                  van packages. Ook heb ik externe API’s ingezet om boekcovers
                  via de Google Books API en filmgegevens via de OMDb API
                  dynamisch weer te geven.
                </p>
                <a href="https://dzmedia.nl/" className="pr-button">
                  Bekijken
                </a>
              </div>
              <img
                className="width-100-pro"
                src={portfolio}
                alt="project-demo-picture"
              />
            </article>

            <article className="project-card-block show-element">
              <h3 className="gradient-heading-yb">Mercury</h3>
              <p>WordPress - ACF - PHP - HTML - SCSS - Bootstrap - GSAP.js</p>
              <div className="section-separetor"></div>
              <div className="project-details">
                <p>
                  Voor Mercury Yacht Construction was ik verantwoordelijk voor
                  de front-end van een werken-bij website in WordPress. Binnen
                  dit project heb ik gewerkt met een custom template, ACF en PHP
                  om dynamische content eenvoudig bewerkbaar te maken. Met SCSS
                  en Bootstrap heb ik het ontwerp technisch doorgevoerd. En voor
                  de animatie heb ik GSAP gerbuikt.
                </p>
                <a href="https://www.mercuryyachtconstruction.nl/" className="pr-button">
                  Bekijken
                </a>
              </div>
              <img
                className="width-100-pro"
                src={merImg}
                alt="project-demo-picture"
              />
            </article>

            <article className="project-card-block show-element">
              <h3 className="gradient-heading-yb">iCu matching App</h3>
              <p>NODE.js - PUG(HTML) - CSS - JavaScript - MongoDB - NPM</p>
              <div className="section-separetor"></div>
              <div className="project-details">
                <p>
                  Tijdens mijn HBO opleiding heb ik een Node.js webapplicatie
                  ontwikkeld waarin gebruikers een account kunnen aanmaken,
                  aanpassen en verwijderen. Binnen dit project werkte ik met
                  Express, Pug en MongoDB, waarbij de focus lag op
                  gebruikersbeheer en het opbouwen van dynamische pagina’s.
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

            <article className="project-card-block show-element">
              <h3 className="gradient-heading-yb">Luminext</h3>
              <p>
                Elementor - Adobe XD - WPML integratie 3 talen - Dynamic CPT -
                Illustrator
              </p>
              <div className="section-separetor"></div>
              <div className="project-details">
                <p>
                  Voor Luminext ben ik van begin tot lancering betrokken geweest
                  bij het project. Met Adobe XD heb ik wireframes en de
                  vormgeving uitgewerkt, waarna ik de website in WordPress met
                  Elementor heb gebouwd. Daarnaast heb ik custom post types
                  ingezet om pagina’s dynamisch op te bouwen en WPML gebruikt om
                  de website meertalig te maken.
                </p>
                <a href="https://www.luminext.com/" className="pr-button">
                  Bekijken
                </a>
              </div>
              <img
                className="width-100-pro"
                src={lumiImg}
                alt="project-demo-picture"
              />
            </article>
          </div>
        </div>

        <div className="flex flex-col-center text-center padding-2rem">
          <div className="wrap flex flex-center">
            <div className="two-buttons width-100-pro flex-space-evenly">
              <HashLink
                smooth
                to="/front-end-projecten#firstSection"
                className="pr-button m-bottom"
              >
                Alle front-end projecten bekijken (10)
              </HashLink>
              <HashLink
                smooth
                to="/wordpress#firstSection"
                className="pr-button"
              >
                Alle WordPress projecten bekijken (11)
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="padding-4rem-tb move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Samenwerken?
          </h2>
          <p className="big-text width-50-pro show-element">
Op dit moment ben ik op zoek naar een bedrijf waar creativiteit en development samenkomen. Denk je dat wij goed zouden kunnen samenwerken? Dan kun je mij <a href="tel:0611838539">bellen</a>{" "}
            of een <a href="mailto:deiverzc@gmail.com">e-mail</a> sturen.
          </p>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section
        id="contact"
        className="contact-section flex flex-center  move-section"
      >
        <div className="flex wrap flex-space-between">
          <div className="width-45-pro">
            <h2 className="gradient-heading-yb show-element">In contact blijven?</h2>
            <p className="big-text show-element">
Wil je in contact blijven? Via onderstaande social media kun je mij volgen. Voor direct contact kun je ook het formulier invullen.
            </p>
            <div className="width-25-pro flex flex-space-between sm-buttons">
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
            </div>
          </div>
          <div className="width-45-pro">
            <article className="card-block show-element">
              <Contactform />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Homepage;
