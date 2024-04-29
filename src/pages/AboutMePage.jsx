// Component
import Contactform from "../components/contactForm";
import MovieBookCard from "../components/movieCard";
import BookCard from "../components/bookCard";

// SVG icons
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import insIcon from "../assets/icons/instagram-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// Images
import aboutMe from "../assets/images/about-me.jpg";

// React hooks
import { useEffect, useState } from "react";

//Animations
import animations from "../animation-functions";

// Films API URL
const API_URL = "https://www.omdbapi.com?apikey=6cfc284";

function AboutMe() {
  //animations functions
  animations();

  // State movies
  const [movies, setMovies] = useState([]);

  // Api movies searcher
  const searchMovies = async (titles) => {
    const fetchedMovies = [];
    for (const title of titles) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Search && data.Search.length > 0) {
        fetchedMovies.push(data.Search[0]);
      }
    }
    setMovies(fetchedMovies);
  };
  // React hook
  useEffect(() => {
    const movieTitles = [
      "Mr nobody",
      "interstellar",
      "inception",
      "the pursuit of happyness",
      "Avatar",
      "stand and deliver",
      "No way home",
      "i origins",
      "Bound by Honor",
      "Gladiator",
      "Truman",
      "Bruce almighty",
    ];
    setTimeout(() => {
      searchMovies(movieTitles);
    }, 500);
  }, []);

  //
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Api movies searcher
  const searchBooks = async (titles) => {
    const fetchedBooks = [];
    for (const title of titles) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyD2IsyW7RWy3QaKL4DgU1zP3NxpxqchCrU`
        );

        if (!response.ok) {
          throw new Error(
            `Fout bij het ophalen van boekgegevens voor ${title}`
          );
        }

        const data = await response.json();

        if (data && data.items && data.items.length > 0) {
          fetchedBooks.push(data.items[0].volumeInfo);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    setBooks(fetchedBooks);
    setIsLoading(false);
  };

  // React hook
  useEffect(() => {
    const bookTitles = [
      "how to win friends",
      "Big Nine",
      "Design and Build Websites",
      "JavaScript and jQuery: Interactive Front-End Web Development",
      "Eloquent JavaScript",
      "Rich dad poor dad",
      "Ik werk voor mezelf",
      "7 Habits of Leadership",
      "Data Visualisation A Handbook for Data Driven Design",
    ];

    const fetchData = async () => {
      try {
        setIsLoading(true);
        await searchBooks(bookTitles);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);
  console.log(books);

  return (
    <main>
      <section className="big-section about-me flex move-section flex-space-between flex-center">
        <div className="layer-2 width-50-pro">
          <h1 className="gradient-heading-yb to-top">Wie ben ik</h1>
          <p className="width-90-pro to-top">
            Ik ben zeer creatief en vind het een leuke uitdaging om problemen op
            te lossen. Mijn professionalisme stelt me in staat om feedback
            constructief te gebruiken en daardoor te streven naar het beste
            resultaat.
          </p>
          <p className="width-90-pro to-top">
            Mijn betrouwbaarheid en doorzettingsvermogen zijn zichbaar in mijn
            motivatie om altijd mezelf verder te ontwikkelen binnen mijn
            werkveld zodat ik up to date blijf met de nieuwe trends.
          </p>
          <p className="width-90-pro to-top">
            Daarnaast heb ik een passie voor allerlei soorten muziek en geniet
            ik van het ontwerpen en creëren van diverse projecten.
          </p>
        </div>

        <div className="layer-2 flex flex-row-reverse width-50-pro">
          <div className="width-70-pro about-img-container">
            <div className="about-me-img">
              <img src={aboutMe} alt="About me image" />
            </div>
          </div>

          <ul className="width-30-pro about-me-list">
            <li className="stager-move-to-left">Betrouwbaar</li>
            <li className="stager-move-to-left">Empatisch</li>
            <li className="stager-move-to-left">Kritisch</li>
            <li className="stager-move-to-left">Doelgericht</li>
            <li className="stager-move-to-left">Ambitieus</li>
            <li className="stager-move-to-left">Doorzetter</li>
          </ul>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="big-section move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Waardevolle boeken
          </h2>
          <p className="big-text width-50-pro show-element">
            Hieronder vind je een lijst van de boeken die ik heb gelezen en die
            ik als beschouw aanrader.
          </p>

          {isLoading ? (
            <p className="show-element">Loading...</p>
          ) : books.length > 0 ? (
            <div className="flex flex-space-between flex-wrap width-100-pro">
              {books.map((book) => (
                <BookCard
                  book={book}
                  key={book.industryIdentifiers[0].identifier}
                />
              ))}
            </div>
          ) : (
            <p>Geen boeken gevonden.</p>
          )}
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="big-section move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Favoriete films
          </h2>
          <p className="big-text width-50-pro show-element">
            Hieronder vind je ook een lijst van de films die ik heb gezien en
            die ik als beschouw aanrader.
          </p>
          <div className="flex flex-space-between flex-wrap show-element">
            {movies.map((movie) => (
              <MovieBookCard movie={movie} key={movie.imdbID} />
            ))}
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
export default AboutMe;
