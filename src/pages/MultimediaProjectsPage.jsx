// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Components
import Contactform from "../components/contactForm";
import ProjectBlock from "../components/ProjectBlock";

//Images
import closeMinded from "../assets/images/close-minded.png";
import obaOpdrachten from "../assets/images/oba-opdracht.png";
import productIclicks from "../assets/images/producten-iclicks.png";
import seinVideo from "../assets/images/sein-video.png";
import cookingWithLove from "../assets/images/cooking-with-love.png";
import arduino from "../assets/images/arduino.png";
import tgcImg from "../assets/images/tgc-kip.jpg";
import seinImg from "../assets/images/sein-app.jpg";
import anwbMuImg from "../assets/images/anwb-mockup.png";

//Animations
import animations from "../animation-functions";

function MultiMediaProjectsPage() {
  //animations functions
  animations();

  return (
    <main>
      <section id="firstSection" className="intro-content-block ">
        <div className="padding-4rem-tb flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            Multimedia projecten
          </h1>
          <p className="big-text width-50-pro text-center to-top">
            Hieronder vind je een selectie van multimedia-projecten die ik
            tijdens mijn MBO- en HBO-opleiding heb uitgewerkt.
          </p>
        </div>

        <div className="flex flex-center to-top">
          <div className="wrap flex flex-wrap flex-space-between">
            <ProjectBlock
              name={"The Game Changer"}
              tags={
                "HBO propedeuse | UX/UI - Product development & management - 3D print"
              }
              description={
                "Binnen dit project was ik verantwoordelijk voor een deel van het concept, het presenteren van het product en het coördineren van de samenwerking binnen het team. Samen met mijn klasgenoten hebben we een concept ontwikkeld dat kinderen op een speelse manier stimuleert om hun speeltijd beter te reguleren en zo slaapproblemen te helpen voorkomen. Daarnaast heb ik gewerkt aan het genereren van ideeën en de video-editing van het project. Met dit concept werden we genomineerd voor de Golden Dot Award voor beste product van 2018."
              }
              url={"https://cmd-amsterdam.nl/portfolio/the-game-changer/"}
              imgSrc={tgcImg}
            />

            <ProjectBlock
              name={"SEIN Proptotype"}
              tags={
                "HBO afstudeerproject | Figma - Prototyping - UX/UI - Miro - Adobe After Effects"
              }
              description={
                "Voor mijn afstudeerproject heb ik een applicatieconcept ontwikkeld voor SEIN, actief binnen de zorgsector. De oplossing was bedoeld voor medewerkers en richtte zich op het op een laagdrempelige manier leren van werkgerelateerde theorieën. Binnen het platform stond gebruiksvriendelijkheid centraal en konden gebruikers via drag-and-drop interacties de theorie stap voor stap doorlopen. Daarnaast bood het concept ruimte voor tips en handvatten over hoe medewerkers beter konden omgaan met verwanten van zorgcliënten."
              }
              url={"https://cloud.protopie.io/p/3b84826d5e"}
              imgSrc={seinImg}
            />

            <ProjectBlock
              name={"Close Minded"}
              tags={"HBO minor | Unity - C# - Illustrator - Photoshop"}
              description={
                "Tijdens mijn minor Game Applied Design heb ik een game ontwikkeld in Unity en C#. Het doel van dit project was om spelers te laten ervaren hoe het is om te leven met depressieve gevoelens en hoe moeilijk het kan zijn om de wereld weer kleur te geven. Binnen de game moest de speler een grijze wereld stap voor stap weer kleurrijk maken. Met dit project lag de focus op beleving, interactie en het vertalen van een emotioneel thema naar een speelse maar betekenisvolle ervaring."
              }
              url={"https://loquino.itch.io/close-minded-v4"}
              imgSrc={closeMinded}
            />

            <ProjectBlock
              name={"Keep my key box"}
              tags={"HBO | Arduino IDE - UX - Prototyping"}
              description={
                "Voor dit project heb ik een multifunctionele box ontwikkeld die kan detecteren of er iets in de doos aanwezig is of niet. Het concept was gericht op het bewaren van sleutels en bedacht als mogelijke ondersteuning voor mensen met ADHD of vergeetachtigheid. Met behulp van verschillende Arduino-componenten, zoals een sensor, speaker, kleine motor en ledverlichting, kon de box de status van de inhoud aangeven, geluidssignalen geven en in bepaalde situaties automatisch openen wanneer de gebruiker dichtbij was."
              }
              url={
                "https://drive.google.com/file/d/1aHpJ1EXpQJT9fXcSjY6CfeDsxaPNxwmT/view?usp=sharing"
              }
              imgSrc={arduino}
            />

            <ProjectBlock
              name={"iClicks Branding"}
              tags={"MBO | Adobe inDesgin, illustrator, Photoshop"}
              description={
                "Tijdens mijn MBO-periode heb ik voor iClicks verschillende grafische uitingen ontwikkeld binnen de huisstijl van het bedrijf. Het ging hierbij om een huisstijlhandboek, roll-up banner, offertemap, spandoek en posters. Binnen dit project lag de focus op branding, visuele consistentie en het vertalen van de identiteit van het bedrijf naar verschillende communicatiemiddelen."
              }
              url={"http://stage.dzmedia.nl/eindproducten/"}
              imgSrc={productIclicks}
            />

            <ProjectBlock
              name={"ANWB UX/UI Analyse"}
              tags={"HBO | Adobe inDesgin, illustrator, Photoshop"}
              description={
                "Tijdens mijn HBO-opleiding heb ik de ANWB Onderweg-app geanalyseerd op het gebied van gebruiksvriendelijkheid, user interface en informatiearchitectuur. Binnen dit project heb ik onderzocht waar verbeterkansen lagen en welke oplossingen de gebruikerservaring konden versterken. Voor het uitwerken van de analyse en presentatie heb ik gebruikgemaakt van verschillende Adobe-programma’s, waaronder InDesign, Illustrator en Photoshop."
              }
              url={"/files/anwb-deiver.pdf"}
              imgSrc={anwbMuImg}
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
            Op dit moment ben ik op zoek naar een bedrijf waar creativiteit en
            development samenkomen. Denk je dat wij goed zouden kunnen
            samenwerken? Dan kun je mij <a href="tel:0611838539">bellen</a> of
            een <a href="mailto:deiverzc@gmail.com">e-mail</a> sturen.
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
            <h2 className="gradient-heading-yb show-element">
              In contact blijven?
            </h2>
            <p className="big-text show-element">
              Wil je in contact blijven? Via onderstaande social media kun je
              mij volgen. Voor direct contact kun je ook het formulier invullen.
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
export default MultiMediaProjectsPage;
