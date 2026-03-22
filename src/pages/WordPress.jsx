// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Components
import Contactform from "../components/contactForm";
import ProjectBlock from "../components/ProjectBlock";

//Images
import lumiImg from "../assets/images/luminext.jpg";
import seImg from "../assets/images/sovjet-ereveld.jpg";
import khsImg from "../assets/images/khs.jpg";
import ghsImg from "../assets/images/ghs.jpg";
import mvImg from "../assets/images/mvdv.jpg";
import smImg from "../assets/images/spijkerman.jpg";
import uniImg from "../assets/images/uninu.jpg";
import nomadImg from "../assets/images/nomad.jpg";
import mrxImg from "../assets/images/marnix.jpg";
import hdiImg from "../assets/images/hdi.jpg";
import lbsImg from "../assets/images/lbshop.jpg";


//Animations
import animations from "../animation-functions";

function WordPressPage() {
  //animations functions
  animations();

  return (
    <main>
      <section id="firstSection" className="intro-content-block ">
        <div className="padding-4rem-tb flex flex-col-center">
          <h1 className="gradient-heading-yb width-50-pro text-center to-top">
            WordPress Development
          </h1>
          <p className="big-text width-70-pro text-center to-top">
            Hieronder vind je de projecten die gemaakt zijn binnen wordpress
            voornamelijk met de builder Elementor Pro. In alle projecten ben ik verantwoordelijk geweest van het bouwen en online plaatsen van de de websites.
          </p>
        </div>

        <div className="flex flex-center to-top">
          <div className="wrap flex flex-wrap flex-space-between">
            <ProjectBlock
              name={"Luminext"}
              tags={
                "Elementor - Adobe XD - WPML integratie 3 talen - Dynamic CPT - Illustrator"
              }
              description={
                "Binnen mijn HBO opleiding heb ik de minor Applied Game Development gevolgd waarvoor ik een game moest maken. Het spel is gebouwd met de programmeertaal C# en ontworpen met de Unity Engine."
              }
              url={"https://www.luminext.com/"}
              imgSrc={lumiImg}
            />

            <ProjectBlock
              name={"Sovjet Ereveld"}
              tags={
                "Elementor - Figma - ACF - Dynamic CPT"
              }
              description={
                "Tijdens mijn HBO-periode heb ik binnen het vak UBICOMP gewerkt aan een opdracht waarbij ik een product moest maken dat gekoppeld moest zijn aan het internet (IoT). Ik heb dit product ontwikkeld door gebruik te maken van een Arduino-bord. Hierin heb ik de Arduino-software gebruikt om de hardware, zoals sensoren, actuators en ledlampen, met elkaar te laten werken. De oplossing van mijn product was om de gebruiker te helpen zijn/haar sleutels van huis op een vaste plek te houden, zodat ze niet kwijt kunnen raken of vergeten worden."
              }
              url={"https://sovjet-ereveld.nl/"}
              imgSrc={seImg}
            />

            <ProjectBlock
              name={"Kinderhospice"}
              tags={"Elementor - Ultimate Member - Dynamic CPT"}
              description={
                "Gedurende mijn stage in het MBO voor mijn twee certificaten als Interactieve en Graphic Designer heb ik als eindopdracht gekregen om de Brand iClicks toe te passen in printproducten zoals: posters briefpapier, CMS-handleiding, offerte-papier en visitekaartjes. Daarnaast had ik een website ontworpen in Photoshop."
              }
              url={"https://www.kinderhospicebinnenveld.nl/"}
              imgSrc={khsImg}
            />

            <ProjectBlock
              name={"Gezinshuis swappen"}
              tags={"Elementor - Ultimate member - Dynamic CPT - Swiper JS - Adobe XD "}
              description={
                "Voor het vak Visual Interactief Design heb ik een prototype-app gemaakt voor de OBA-bibliotheek in Amsterdam. De doelgroep van deze opdracht waren kinderen van 10 jaar tot en met 14 jaar. De gebruiker moest door middel van deze app zijn boek kunnen reserveren, zien of het boek geleend kon worden en of die beschadigd was. Deze prototype wordt voorzien van geïnnoveerde en interactieve schermen."
              }
              url={"https://gezinshuisswappen.nl/"}
              imgSrc={ghsImg}
            />

            <ProjectBlock
              name={"Spijkerman BV"}
              tags={"Elementor - Dynamic CPT - WPML - Adobe XD"}
              description={
                "Voor mijn MBO opleiding heb ik regelmatig de opdracht gekregen om een huisstijl pakket te ontwerpen voor een bepaald bedrijf. Deze folder is een handleiding waarin je kan lezen over hoe je met de huisstijl moet omgaan binnen en buiten het bedrijf."
              }
              url={"https://nomadnavigator.nl/"}
              imgSrc={smImg}
            />

            <ProjectBlock
              name={"Remixes shop"}
              tags={"Elementor - Dynamic CPT - Woocomerce - Figma"}
              description={
                "Voor mijn MBO opleiding heb ik regelmatig de opdracht gekregen om een huisstijl pakket te ontwerpen voor een bepaald bedrijf. Deze folder is een handleiding waarin je kan lezen over hoe je met de huisstijl moet omgaan binnen en buiten het bedrijf."
              }
              url={"https://remixes.latingoboy.com/"}
              imgSrc={lbsImg}
            />

            <ProjectBlock
              name={"Marion v.d. Voort"}
              tags={"Elementor - Adobe XD - Dynamic CPT"}
              description={
                "Tijdens mijn HBO afstudeerperiode ben ik bezig geweest met het maken van instructievideo's voor mijn eindproduct. Deze video's heb ik gemaakt met het Adobe-programma After Effects. Door op de link te klikken krijg je een voorbeeld te zien."
              }
              url={"https://marionvandervoort.nl/"}
              imgSrc={mvImg}
            />

            <ProjectBlock
              name={"UninU"}
              tags={"Elementor - Dynamic CPT"}
              description={
                "Tijdens mijn HBO afstudeerperiode ben ik bezig geweest met het maken van instructievideo's voor mijn eindproduct. Deze video's heb ik gemaakt met het Adobe-programma After Effects. Door op de link te klikken krijg je een voorbeeld te zien."
              }
              url={"https://uninu.nl/"}
              imgSrc={uniImg}
            />

            <ProjectBlock
              name={"Nomad Navigator"}
              tags={"Elementor - Dynamic CPT and architecture - Figma"}
              description={
                "Voor mijn MBO opleiding heb ik regelmatig de opdracht gekregen om een huisstijl pakket te ontwerpen voor een bepaald bedrijf. Deze folder is een handleiding waarin je kan lezen over hoe je met de huisstijl moet omgaan binnen en buiten het bedrijf."
              }
              url={"https://spijkermanbv.nl/"}
              imgSrc={nomadImg}
            />

            <ProjectBlock
              name={"Marnix"}
              tags={"Elementor - Dynamic CPT"}
              description={
                "Tijdens mijn HBO afstudeerperiode ben ik bezig geweest met het maken van instructievideo's voor mijn eindproduct. Deze video's heb ik gemaakt met het Adobe-programma After Effects. Door op de link te klikken krijg je een voorbeeld te zien."
              }
              url={"https://uninu.nl/"}
              imgSrc={mrxImg}
            />

            <ProjectBlock
              name={"Holland Diving"}
              tags={"Elementor - Adobe XD - Dynamic CPT"}
              description={
                "Tijdens mijn HBO afstudeerperiode ben ik bezig geweest met het maken van instructievideo's voor mijn eindproduct. Deze video's heb ik gemaakt met het Adobe-programma After Effects. Door op de link te klikken krijg je een voorbeeld te zien."
              }
              url={"https://marionvandervoort.nl/"}
              imgSrc={hdiImg}
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
            Dit komt goed uit. Op dit moment ben ik op zoek naar een bedrijf met
            creatieve designers en geweldige developers. Als u denkt dat we
            kunnen samenwerken, kunt u mij <a href="tel:0611838539">bellen</a>{" "}
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
            <h2 className="gradient-heading-yb show-element">Netwerken?</h2>
            <p className="big-text show-element">
              Wij kunnen altijd elkaar digitaal ontmoeten door mij te volgen in
              de onderstaande social media. Voor direct contact kunt u het
              volgende fomulier invullen.
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
        </div>
      </section>
    </main>
  );
}
export default WordPressPage;
