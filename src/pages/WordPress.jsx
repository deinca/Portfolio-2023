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
            Op deze pagina vindt u een selectie van WordPress-projecten die ik
            heb gebouwd met WordPress en Elementor Pro. Daarbij heb ik gelet op
            responsive design, gebruiksvriendelijkheid, UX/UI en
            toegankelijkheid (WCAG).
          </p>
        </div>

        <div className="flex flex-center to-top">
          <div className="wrap flex flex-wrap flex-space-between">
            <ProjectBlock
              name={"Luminext"}
              tags={
                "Elementor - Adobe XD - WPML integratie 3 talen - Dynamic CPT - Illustrator - UX/UI"
              }
              description={
                "Voor Luminext ben ik van begin tot lancering betrokken geweest bij het project. Met Adobe XD heb ik wireframes en de vormgeving uitgewerkt, waarna ik de website in WordPress met Elementor heb gebouwd. Daarnaast heb ik custom post types ingezet om pagina’s dynamisch op te bouwen en WPML gebruikt om de website meertalig te maken."
              }
              url={"https://www.luminext.com/"}
              imgSrc={lumiImg}
            />

            <ProjectBlock
              name={"Sovjet Ereveld"}
              tags={"Elementor - Figma - ACF - Dynamic CPT"}
              description={
                "Voor Sovjet Ereveld was ik verantwoordelijk voor de bouw van de website en de technische uitwerking van het ontwerp in Figma. Binnen dit project heb ik gewerkt met ACF, custom post types en WPML om dynamische en vertaalbare pagina’s op te zetten. Daarnaast heb ik de website zo toegankelijk mogelijk gemaakt en aangevuld met animaties voor een speelsere gebruikerservaring."
              }
              url={"https://sovjet-ereveld.nl/"}
              imgSrc={seImg}
            />

            <ProjectBlock
              name={"Kinderhospice"}
              tags={"Elementor - Ultimate Member - Dynamic CPT"}
              description={
                "Voor Kinderhospice ben ik van begin tot lancering betrokken geweest bij het project. Ik heb Adobe XD gebruikt voor het designproces en de website vervolgens opgebouwd met dynamische custom post types. De website fungeert als informatief platform voor een stichting, aangevuld met een afgeschermd ledengedeelte voor specifieke gebruikers. Na livegang heb ik hiervoor Ultimate Member geïntegreerd en verschillende headers opgezet per hoofdonderdeel van de website."
              }
              url={"https://www.kinderhospicebinnenveld.nl/"}
              imgSrc={khsImg}
            />

            <ProjectBlock
              name={"Gezinshuis swappen"}
              tags={
                "Elementor - Ultimate member - Dynamic CPT - Swiper JS - Adobe XD - SCSS"
              }
              description={
                "Binnen dit project heb ik voornamelijk front-end werkzaamheden uitgevoerd. De website is opgebouwd met Elementor als basisstructuur, waarna ik met SCSS de technische uitwerking van het design heb verzorgd. Daarnaast heb ik Swiper.js gebruikt voor een carousel-animatie en Ultimate Member geïntegreerd voor de ledenfunctionaliteit."
              }
              url={"https://gezinshuisswappen.nl/"}
              imgSrc={ghsImg}
            />

            <ProjectBlock
              name={"Spijkerman BV"}
              tags={"Elementor - Dynamic CPT - WPML - Adobe XD"}
              description={
                "Voor Spijkerman BV was ik verantwoordelijk voor de bouw van de website. Binnen dit project heb ik dynamische custom post types opgezet en WPML ingezet om de website meertalig te maken. Daarnaast heb ik in Adobe XD een kleine styleguide uitgewerkt voor het kleurgebruik en de typografie."
              }
              url={"https://spijkermanbv.nl/"}
              imgSrc={smImg}
            />

            <ProjectBlock
              name={"Remixes shop"}
              tags={"Elementor - Dynamic CPT - JetEngine - Woocomerce - Figma"}
              description={
                "Voor Remixes Shop ben ik van begin tot lancering betrokken geweest bij het project. Ik heb Figma gebruikt voor de vormgeving en de webshop opgebouwd in WordPress met WooCommerce. Daarnaast heb ik dynamische content en koppelingen toegepast, en met JetEngine functionaliteiten toegevoegd zoals filteren, sorteren en zoeken binnen de shop."
              }
              url={"https://remixes.latingoboy.com/"}
              imgSrc={lbsImg}
            />

            <ProjectBlock
              name={"Marion v.d. Voort"}
              tags={"Elementor - Adobe XD - Dynamic CPT"}
              description={
                "Voor Marion v.d. Voort was ik verantwoordelijk voor de vormgeving van een onepage website, uitgewerkt in Adobe XD. Daarnaast heb ik dynamische custom post types opgezet, zodat de klant eenvoudig blogs kon beheren en publiceren."
              }
              url={"https://marionvandervoort.nl/"}
              imgSrc={mvImg}
            />

            <ProjectBlock
              name={"UninU"}
              tags={"Elementor - Dynamic CPT"}
              description={
                "Voor UninU heb ik de bestaande website vernieuwd en geüpdatet op basis van de huisstijlkleuren van het merk. Het betreft een informatieve website waarin ik de nieuwsberichten dynamisch heb opgebouwd via een custom post type. Daarnaast heb ik verschillende formulieren aangemaakt om de functionaliteit van de website verder uit te breiden."
              }
              url={"https://uninu.nl/"}
              imgSrc={uniImg}
            />

            <ProjectBlock
              name={"Nomad Navigator"}
              tags={"Elementor - Dynamic CPT and architecture - Figma"}
              description={
                "Voor Nomad Navigator was ik verantwoordelijk voor het vertalen van een Figma-ontwerp naar een dynamische website. Daarnaast heb ik de contentarchitectuur opgezet voor verschillende blogpagina’s, waarbij ik twee custom post types en bijbehorende taxonomieën heb ingericht om de content overzichtelijk te beheren."
              }
              url={"http://nomadnavigator.nl/"}
              imgSrc={nomadImg}
            />

            <ProjectBlock
              name={"Marnix"}
              tags={"Elementor - Dynamic CPT - Adobe XD"}
              description={
                "Voor Marnix heb ik een thema van een derde partij nagebouwd en vertaald naar een werkende website. Ter voorbereiding heb ik Adobe XD gebruikt voor de vormgeving en schetsen. De website is opgezet als informatieve website met portfoliofunctie, aangevuld met custom post types zodat content zoals blogs eenvoudig beheerd en gepubliceerd kon worden."
              }
              url={"https://www.marnixscholmanurbanism.nl/"}
              imgSrc={mrxImg}
            />

            <ProjectBlock
              name={"Holland Diving"}
              tags={"Elementor - Adobe XD - Dynamic CPT"}
              description={
                "Voor Holland Diving was ik verantwoordelijk voor het vernieuwen van een informatieve B2B-website. Ik heb Adobe XD gebruikt om de indeling, layout en vormgeving op basis van de gewenste kleuren uit te werken. Daarnaast heb ik de website gebouwd en een Google Site Kit-integratie toegevoegd om bezoekersstatistieken inzichtelijk te maken."
              }
              url={"https://www.hollanddivingint.com/"}
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
export default WordPressPage;
