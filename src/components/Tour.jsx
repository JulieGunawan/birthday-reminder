import { useState } from "react";
const Tour = (props) => {
  const { id, name, image, price, info, removeTour } = props;

  const [readMore, setReadMore] = useState(false);

  const clickReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div>
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button type="button" className="btn" onClick={clickReadMore}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
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
