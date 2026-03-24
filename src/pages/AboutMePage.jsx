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
      "Blood In, Blood Out",
      "Gladiator",
      "Truman",
      "Bruce almighty",
      "Black mirror",
      "Alice in Borderland",
      "Eternal Sunshine of the Spotless Mind",
      "The Great Flood",
      "Green Book",
      "Forrest Gump",
      "Avengers: Endgame",
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
          `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyD2IsyW7RWy3QaKL4DgU1zP3NxpxqchCrU`,
        );

        if (!response.ok) {
          throw new Error(
            `Fout bij het ophalen van boekgegevens voor ${title}`,
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
      "How the Tech Titans and Their Thinking Machines Could Warp Humanity",
      "Design and Build Websites",
      "JavaScript and jQuery: Interactive Front-End Web Development",
      "Eloquent JavaScript",
      "Rich dad poor dad",
      "Omringd door idioten",
      "The 7 Habits of Highly Effective People",
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
      <section
        className="big-section about-me flex move-section flex-center"
        id="firstSection"
      >
        <div className="flex flex-center wrap inner-section">
          <div className="layer-2 width-50-pro">
            <h1 className="gradient-heading-yb to-top">Wie ben ik</h1>
            <p className="width-90-pro to-top">
              Ik ben een creatief en gestructureerd persoon die energie haalt
              uit het vertalen van ideeën naar duidelijke en
              gebruiksvriendelijke digitale oplossingen. Als front-end developer
              en multimedia designer combineer ik techniek en vormgeving om
              websites en interfaces te maken die niet alleen goed werken, maar
              er ook verzorgd uitzien.
            </p>
            <p className="width-90-pro to-top">
              Een goede samenwerking geeft mij energie om ideeën te vertalen
              naar sterke digitale oplossingen. Binnen mijn werk vind ik het
              belangrijk om te blijven leren, feedback op een constructieve
              manier te gebruiken en mezelf verder te ontwikkelen.
              Betrouwbaarheid, doorzettingsvermogen, oprechtheid en oog voor
              detail spelen daarin een grote rol.
            </p>
            <p className="width-90-pro to-top">
              Buiten mijn werk heb ik ook veel interesse in muziek, filosoferen,
              sporten, reizen en digitale creaties.
            </p>
          </div>

          <div className="layer-2 flex flex-row-reverse width-50-pro">
            <div className="width-70-pro about-img-container">
              <div className="about-me-img">
                <img src={aboutMe} alt="About me image" />
              </div>
            </div>

            <ul className="width-30-pro about-me-list">
              <li className="to-top">Betrouwbaar</li>
              <li className="to-top">Empathisch</li>
              <li className="to-top">Kritisch</li>
              <li className="to-top">Doelgericht</li>
              <li className="to-top">Ambitieus</li>
              <li className="to-top">Doorzetter</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="section-separetor"></div>

      <section className="big-section move-section">
        <div className="flex flex-col-center text-center">
          <h2 className="gradient-heading-yb width-50-pro show-element">
            Waardevolle boeken
          </h2>
          <p className="big-text width-50-pro show-element">
            Hieronder vind je een selectie van boeken die ik heb gelezen en die
            ik kan aanraden.
          </p>

          {isLoading ? (
            <p className="show-element">Loading...</p>
          ) : books.length > 0 ? (
            <div className="flex flex-center width-100-pro">
              <div className="flex wrap inner-section flex-space-between flex-wrap">
                {books.map((book) => (
                  <BookCard
                    book={book}
                    key={
                      book?.industryIdentifiers?.[0]?.identifier ||
                      book?.canonicalVolumeLink ||
                      book?.title
                    }
                  />
                ))}
              </div>
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
            Hieronder vind je een aantal films die ik heb gezien en die ik zeker
            de moeite waard vind.
          </p>
          <div className="flex flex-center show-element">
            <div className="flex wrap inner-section flex-space-between flex-wrap">
              {movies.map((movie) => (
                <MovieBookCard movie={movie} key={movie.imdbID} />
              ))}
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
export default AboutMe;
