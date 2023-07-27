
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

//Animations
import animations from "../animation-functions";


function MultiMediaProjectsPage() {
  //animations functions 
  animations();

  return (
    <main>
      <section id="section-one" className="intro-content-block ">
        <div className="padding-4rem-tb flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            Multimedia projecten
          </h1>
          <p className="big-text width-50-pro text-center to-top">
            Hieronder kun je mijn multimedia-projecten bekijken die ik tijdens
            mijn MBO- en HBO-opleiding heb uitgewerkt.
          </p>
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"Close Minded"}
            tags={"Unity - C#"}
            description={
              "Binnen mijn HBO opleiding heb ik de minor Applied Game Development gevolgd waarvoor ik een game moest maken. Het spel is gebouwd met de programmeertaal C# en ontworpen met de Unity Engine."
            }
            url={"https://loquino.itch.io/close-minded-v4"}
            imgSrc={closeMinded}
          />

          <ProjectBlock
            name={"Keep my key box"}
            tags={"Arduino IDE"}
            description={"Tijdens mijn HBO-periode heb ik binnen het vak UBICOMP gewerkt aan een opdracht waarbij ik een product moest maken dat gekoppeld moest zijn aan het internet (IoT). Ik heb dit product ontwikkeld door gebruik te maken van een Arduino-bord. Hierin heb ik de Arduino-software gebruikt om de hardware, zoals sensoren, actuators en ledlampen, met elkaar te laten werken. De oplossing van mijn product was om de gebruiker te helpen zijn/haar sleutels van huis op een vaste plek te houden, zodat ze niet kwijt kunnen raken of vergeten worden."}
            url={
              "https://drive.google.com/file/d/1aHpJ1EXpQJT9fXcSjY6CfeDsxaPNxwmT/view?usp=sharing"
            }
            imgSrc={arduino}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"iClicks Branding"}
            tags={"Adobe inDesgin, illustrator, Photoshop"}
            description={
              "Gedurende mijn stage in het MBO voor mijn twee certificaten als Interactieve en Graphic Designer heb ik als eindopdracht gekregen om de Brand iClicks toe te passen in printproducten zoals: posters briefpapier, CMS-handleiding, offerte-papier en visitekaartjes. Daarnaast had ik een website ontworpen in Photoshop."
            }
            url={"http://stage.dzmedia.nl/eindproducten/"}
            imgSrc={productIclicks}
          />

          <ProjectBlock
            name={"OBA Bibliotheek App"}
            tags={"UX/UI - Marvel app"}
            description={
              "Voor het vak Visual Interactief Design heb ik een prototype-app gemaakt voor de OBA-bibliotheek in Amsterdam. De doelgroep van deze opdracht waren kinderen van 10 jaar tot en met 14 jaar. De gebruiker moest door middel van deze app zijn boek kunnen reserveren, zien of het boek geleend kon worden en of die beschadigd was. Deze prototype wordt voorzien van geïnnoveerde en interactieve schermen."
            }
            url={"https://marvelapp.com/prototype/4362840/screen/40247537"}
            imgSrc={obaOpdrachten}
          />
        </div>

        <div className="flex flex-space-between to-top">
          <ProjectBlock
            name={"Cooking with love "}
            tags={"Adobe inDesgin, illustrator, Photoshop"}
            description={
              "Voor mijn MBO opleiding heb ik regelmatig de opdracht gekregen om een huisstijl pakket te ontwerpen voor een bepaald bedrijf. Deze folder is een handleiding waarin je kan lezen over hoe je met de huisstijl moet omgaan binnen en buiten het bedrijf."
            }
            url={"https://issuu.com/deiverzamora/docs/cooking_with_love"}
            imgSrc={cookingWithLove}
          />

          <ProjectBlock
            name={"SEIN"}
            tags={"Adobe after effects"}
            description={
              "Tijdens mijn HBO afstudeerperiode ben ik bezig geweest met het maken van instructievideo's voor mijn eindproduct. Deze video's heb ik gemaakt met het Adobe-programma After Effects. Door op de link te klikken krijg je een voorbeeld te zien."
            }
            url={
              "https://drive.google.com/file/d/13V3MGhL9ObonwM_-V_7xmRcTiHNqCUmk/view?usp=sharing"
            }
            imgSrc={seinVideo}
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
export default MultiMediaProjectsPage;
