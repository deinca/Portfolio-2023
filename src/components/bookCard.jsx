import React from "react";

function BookCard({ book }) {

  const isbn = book?.industryIdentifiers?.[0]?.identifier ||
  book?.canonicalVolumeLink ||
  book?.title ||
  "unknow-book";

  const authors = Array.isArray(book?.authors)
  ? book.authors.join(", ")
  : book?.authors || "Onbekende auteur";

  const thumbnail = book?.imageLinks?.thumbnail.replace("http://", "https://");

  return (
    <article className="card-block book" id={isbn}>
      <h3 className="gradient-heading-yb">{book?.title ?? "Onbekende titel"}</h3>
      <div className="section-separetor"></div>
      <p>{authors}</p>

      {thumbnail ? 
      (<img src={thumbnail} alt={book?.Title} loading="lazy" /> )
      : ( <p>Geen cover beschikbaar</p>)
      }

      { book?.canonicalVolumeLink && (
        <a className="pr-button" href={book.canonicalVolumeLink} target="_blank" rel="noreferrer">Meer info</a>
      )}
      
    </article>
  );
}

export default BookCard;
