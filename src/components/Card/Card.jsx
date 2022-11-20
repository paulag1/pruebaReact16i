import React from "react";

import "./card.css";

const Card = (props) => {

    const {img, name} = props
    console.log(img)

  return (
    <div className="card">
      <img
        src={img}
        alt="Messi"
      />
      <div className="card__text">

      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, error!
      </p>
      </div>
    </div>
  );
};

export default Card;
