// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Components
import Contactform from "../components/contactForm";
import ProjectBlock from "../components/ProjectBlock";

// Images
import animalDisco from "../assets/images/animal-disco.png";
import dzmedia from "../assets/images/dzmedia.png";
import deltad from "../assets/images/deltad.png";
import latingoboy from "../assets/images/latingoboy.png";
import icuApp from "../assets/images/icu-app.png";
import vanLeyen from "../assets/images/vanleyenpallets.png";
import audioPlayer from "../assets/images/audio-player.png";
import wowAir from "../assets/images/wow-air.png";
import showCase from "../assets/images/showcase-internship.png";
import vueGames from "../assets/images/vue-games.png";
import portfolio from "../assets/images/portfolio-2023.png";

//Animations
import animations from "../animation-functions";

function FrontEndProjectsPage() {
    //animations functions 
    animations();

  return (
    <main>
      <section id="section-one" className="intro-content-block">
        <div className="padding-4rem-tb flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            Front-end projecten
          </h1>
          <p className="big-text width-50-pro text-center to-top">
            Hieronder kun je mijn front-end projecten bekijken.
          </p>
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"DZMEDIA"}
            tags={"Wordpres - UX/UI - HTML - CSS - JS(GSAP)"}
            description={
              "In 2023 heb ik een website vernieuwd door een nieuw ontwerp te maken in Figma om vervolgens deze website te bouwen in het CMS WordPress. Binnen dit project heb ik ook JavaScript gebruikt om animaties te maken."
            }
            url={"https://dzmedia.nl/"}
            imgSrc={dzmedia}
          />

          <ProjectBlock
            name={"iCu matching App"}
            tags={"NODE.js - HTML - CSS - PUG - MongoDB"}
            description={
              "Binnen mijn opleiding ben ik bezig geweest met het maken van een NODE.js web applicatie. Deze applicatie is gebouwd met de framework Express en wordt ondersteund met EJS 6. Binnen dit project heb ik gewerkt aan een feature waar je een account kan aanmaken, verwijderen en aanpassen. Tot slot is de website gecompileerd met PUG, dit is een template engine waar je HTML en JS samen in een document kan gebruiken waardoor de code via de back-end vertaald wordt naar de client-side als normaal HTML-5."
            }
            url={"https://icu-app.onrender.com/"}
            imgSrc={icuApp}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"DJ LatingoBoy"}
            tags={"Wordpres - HTML - CSS - PHP"}
            description={
              "In 2022 heb ik een website vernieuwd door een nieuw ontwerp te maken in Figma om vervolgens deze website te bouwen in het CMS WordPress. "
            }
            url={"https://www.latingoboy.com/"}
            imgSrc={latingoboy}
          />

          <ProjectBlock
            name={"Delta D"}
            tags={"WordPress - UX/UI - HTML - CSS"}
            description={
              "In 2022 heb ik een website vernieuwd door een nieuw ontwerp te maken in Figma om vervolgens deze website te bouwen in het CMS WordPress."
            }
            url={"https://deltad.nl/"}
            imgSrc={deltad}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"Music Player"}
            tags={"HTML - CSS - JavaScript"}
            description={
              "Naast het bouwen van een website in HTML en CSS heb ik ook de basis van JavaScript kunnen leren. In het vak “inleiding programmeren” kon ik zelf bedenken wat ik wilde maken. Mijn programma/ feature moest voldoen aan het volgen: function(s), array(s), variabelen, een loop, conditions zoals if - else of switch en events. Hiervoor heb ik een music player gemaakt met JavaScript en een beetje van JSon."
            }
            url={"https://myplayer.dzmedia.nl/"}
            imgSrc={audioPlayer}
          />

          <ProjectBlock
            name={"WOW Air | Verhalen"}
            tags={"HTML - CSS - JavaScript"}
            description={
              "In het tweede jaar moest ik een volledige website bouwen. Hierbij werd kritisch gekeken naar de vormgeving, front-end (HTML5 Syntax en CSS3 met slimme selectoren), responsieve design en het gebruik van Design Patterns."
            }
            url={"http://wowair.dzmedia.nl/"}
            imgSrc={wowAir}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"Van Leyen pallets"}
            tags={"WordPress - UX/UI - HTML - CSS - Jquery"}
            description={
              "Tijdens mijn eerste stage op het HBO heb ik de opdracht gekregen om een website te bouwen voor een klant in Almere. Deze website is met library ACF WordPress plugin gebouwd. Met Advanced Custom Fields moest ik ook met PHP werken. Dit is te vergelijken met een template engine waar je bepaalde functionaliteiten en layouts zelf kan programmeren binnen een WordPress website."
            }
            url={"https://www.vanleyenpallets.nl/"}
            imgSrc={vanLeyen}
          />

          <ProjectBlock
            name={"Animal Disco"}
            tags={"CSS"}
            description={
              "Tijdens mijn HBO ben ik 1 week bezig geweest om een sprint te maken met de nieuwste CSS tricks. Hiervoor moest ik een JPG/PNG afbeelding nabouwen in CSS-3. Dit project bevatte zelf gemaakte animaties en waarmee ik met JavaScript bepaalde functies mogelijk heb gemaakt zoals: het activeren en deactiveren van de animatie, muziek en verschillende lichten."
            }
            url={"https://deinca.github.io/disco-animal/"}
            imgSrc={animalDisco}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"Game gallery"}
            tags={"Vue - HTML - CSS - JavaScript - API"}
            description={
              "Voor dit (klein) project heb ik gebruik gemaakt van de Vue JavaScript-library om data van de RAWG API voor games weer te geven."
            }
            url={"https://github.com/deinca/vue-gpg-app/blob/main/src/App.vue"}
            imgSrc={vueGames}
          />

          <ProjectBlock
            name={"Showcase"}
            tags={"Vue - NUXT - Bootstrap - CSS - JavaScript"}
            description={
              "Tijdens mijn HBO-opleiding heb ik een showcase kunnen maken in Vue JavaScript. Hierin kon ik mijn opdrachten presenteren die ik tijdens mijn stageperiode heb uitgevoerd."
            }
            url={"https://github.com/deinca/Internship-22-showcase"}
            imgSrc={showCase}
          />
        </div>
        <div className="flex flex-space-between to-top">

          <ProjectBlock
            name={"Portfolio 2023"}
            tags={"React - HTML - CSS - JavaScript - Vite - API's - GSAP"}
            description={
              "Voor dit (klein) project heb ik gebruik gemaakt van de React JavaScript-library en twee databases API voor om de cover van boeken (google API) en films (OMDb API) weer te geven in mijn portfolio."
            }
            url={"https://github.com/deinca/vue-gpg-app/blob/main/src/App.vue"}
            imgSrc={portfolio}
          />
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
export default FrontEndProjectsPage;
