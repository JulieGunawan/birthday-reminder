const Tour = (props) => {
  const { id, name, image, price, info, removeTour } = props;
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div>
        <h4>{name}</h4>
        <p>{info}</p>
      </div>
      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => removeTour(id)}
      >
        Remove
      </button>
    </article>
  );
};

export default Tour;
