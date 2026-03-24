// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Components
import Contactform from "../components/contactForm";
import ProjectBlock from "../components/ProjectBlock";

// Images
import animalDisco from "../assets/images/animal-disco.png";
import icuApp from "../assets/images/icu-app.png";
import vanLeyen from "../assets/images/vanleyenpallets.png";
import audioPlayer from "../assets/images/audio-player.png";
import wowAir from "../assets/images/wow-air.png";
import showCase from "../assets/images/showcase-internship.png";
import vueGames from "../assets/images/vue-games.png";
import portfolio from "../assets/images/portfolio-2023.png";
import lyImg from "../assets/images/ly.jpg";
import merImg from "../assets/images/mercury.jpg";

//Animations
import animations from "../animation-functions";

function FrontEndProjectsPage() {
  //animations functions
  animations();

  return (
    <main>
      <section id="firstSection" className="intro-content-block">
        <div className="padding-4rem-tb flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            Front-end projecten
          </h1>
          <p className="big-text width-70-pro text-center to-top">
Hieronder kun je mijn front-end projecten bekijken. Binnen deze projecten lag de focus meer op de technische uitwerking, zoals het bouwen van websites met custom code en het ontwikkelen van applicaties met JavaScript frameworks.          </p>
        </div>

        <div className="flex flex-center to-top">
          <div className="wrap flex flex-wrap flex-space-between">

            <ProjectBlock
              name={"Portfolio"}
              tags={"React framework - HTML - CSS - JavaScript - Vite - API's - GSAP- NPM"}
              description={
                "Voor dit portfolio heb ik gewerkt met React en Vite. Daarnaast heb ik GSAP gebruikt voor animaties en npm voor het beheren van packages. Ook heb ik externe API’s ingezet om boekcovers via de Google Books API en filmgegevens via de OMDb API dynamisch weer te geven."
              }
              url={"https://github.com/deinca/Portfolio-2023"}
              imgSrc={portfolio}
            />

            <ProjectBlock
              name={"iCu matching App"}
              tags={"NODE.js - PUG(HTML) - CSS - JavaScript - MongoDB"}
              description={
                "Tijdens mijn HBO heb ik in een sprint van één week een illustratie nagebouwd met CSS3. Binnen dit project heb ik gewerkt met animaties en JavaScript-functionaliteiten, zoals het activeren en deactiveren van animaties, muziek en verschillende flashing lights."
              }
              url={"https://icu-app.onrender.com/"}
              imgSrc={icuApp}
            />

            <ProjectBlock
              name={"Animal Disco"}
              tags={"CSS 3 (HTML & JavaScript)"}
              description={
                "Tijdens mijn HBO ben ik 1 week bezig geweest om een sprint te maken met de nieuwste CSS tricks. Hiervoor moest ik een JPG/PNG afbeelding nabouwen in CSS-3. Dit project heeft zelf gemaakte animaties en met JavaScript heb ik bepaalde functies mogelijk gemaakt zoals: het activeren en deactiveren van de animatie, muziek en verschillende lichten."
              }
              url={"https://deinca.github.io/disco-animal/"}
              imgSrc={animalDisco}
            />

            <ProjectBlock
              name={"Lengers Yachts"}
              tags={"WordPress - ACF - PHP - HTML - SCSS - Bootstrap"}
              description={
                "Voor Lengers Yachts was ik verantwoordelijk voor de front-end van een werken-bij platform in WordPress. Binnen dit project heb ik gewerkt met PHP en ACF om dynamische content op te bouwen zodat de klant de website eenvoudig kan bewerken. Voor de technische uitwerking van het design heb ik SCSS gebruikt, in combinatie met Bootstrap als grid framework."
              }
              url={"https://careers.lengersyachts.com/"}
              imgSrc={lyImg}
            />

            <ProjectBlock
              name={"Mercury"}
              tags={"WordPress - ACF - PHP - HTML - SCSS - Bootstrap - GSAP.js"}
              description={
                "Voor Mercury Yacht Construction was ik verantwoordelijk voor de front-end van een werken-bij website in WordPress. Binnen dit project heb ik gewerkt met een custom template, ACF en PHP om dynamische content eenvoudig bewerkbaar te maken. Met SCSS en Bootstrap heb ik het ontwerp technisch doorgevoerd. En voor de animatie heb ik GSAP gerbuikt."
              }
              url={"https://www.mercuryyachtconstruction.nl/"}
              imgSrc={merImg}
            />

            <ProjectBlock
              name={"Van Leyen pallets"}
              tags={"WordPress - ACF - HTML - CSS - Jquery"}
              description={
                "Tijdens mijn eerste stage op het HBO heb ik een website ontwikkeld voor een klant in Almere. Binnen dit project heb ik gewerkt met WordPress, ACF en PHP om content en lay-outs flexibel en dynamisch op te bouwen."
              }
              url={"https://www.vanleyenpallets.nl/"}
              imgSrc={vanLeyen}
            />

            <ProjectBlock
              name={"Showcase"}
              tags={"Vue - NUXT - Bootstrap - HTML - CSS - JavaScript"}
              description={
                "Tijdens mijn lange stage bij Valtech heb ik als front-end developer meegewerkt aan een groot internationaal project. Hierbij heb ik gewerkt met CSS, JavaScript, Vue.js, Bootstrap en Nuxt. Op basis van de vormgeving van het Wavin-project heb ik daarnaast een eigen mini showcase ontwikkeld."
              }
              url={"https://github.com/deinca/Internship-22-showcase"}
              imgSrc={showCase}
            />

            <ProjectBlock
              name={"Music Player"}
              tags={"HTML - CSS - JavaScript"}
              description={
                "Binnen het vak Inleiding Programmeren heb ik een music player ontwikkeld met JavaScript (HTML en CSS).  In dit project heb ik gewerkt met functies, arrays, variabelen, loops, condities en events. Daarnaast heb ik een klein deel van JSON toegepast binnen de functionaliteit van de speler."
              }
              url={"https://myplayer.dzmedia.nl/"}
              imgSrc={audioPlayer}
            />

            <ProjectBlock
              name={"WOW Air | Verhalen"}
              tags={"HTML - CSS - JavaScript"}
              description={
                "In het tweede jaar van mijn opleiding heb ik een volledige website ontwikkeld voor WOW Air | Verhalen. Binnen dit project lag de focus op vormgeving, HTML5-structuur, CSS3, responsive design en het toepassen van verschillende design patterns."
              }
              url={"http://wowair.dzmedia.nl/"}
              imgSrc={wowAir}
            />

            <ProjectBlock
              name={"Game gallery"}
              tags={"Vue - HTML - CSS - JavaScript - API"}
              description={
                "Binnen dit project heb ik gewerkt met Vue.js om een game API te koppelen en data dynamisch binnen het platform weer te geven. De website toont een overzicht van populaire games."
              }
              url={
                "https://github.com/deinca/vue-gpg-app/blob/main/src/App.vue"
              }
              imgSrc={vueGames}
            />

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
export default FrontEndProjectsPage;