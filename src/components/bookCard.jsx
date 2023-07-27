import React from "react";

function BookCard({ book }) {
  return (
    <article className="card-block book" id={book.industryIdentifiers[0].identifier}>
      <h3 className="gradient-heading-yb">{book.title}</h3>
      <div className="section-separetor"></div>
      <p>{book.authors}</p>
      <img src={book.imageLinks.thumbnail} alt={book.Title} />
      <a className="pr-button" href={book.canonicalVolumeLink} target="_blank">Meer info</a>
    </article>
  );
}

export default BookCard;
