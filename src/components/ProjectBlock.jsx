function ProjectBlock({ name, tags, description, imgSrc, url }) {
  return (
    <>
      <article className="project-card-block">
        <h2 className="gradient-heading-yb">{name}</h2>
        <p>{tags}</p>
        <div className="section-separetor"></div>
        <div className="project-details">
          <p>{description}</p>
          <a href={url} target="_blank" className="pr-button">
            Bekijken
          </a>
        </div>
        <img
          className="width-100-pro"
          src={imgSrc}
          alt="Project image"
        />
      </article>
    </>
  );
}
export default ProjectBlock;
