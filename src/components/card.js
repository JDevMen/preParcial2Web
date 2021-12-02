import React from "react";
import Image from "react-bootstrap/Image";

const CardComponent = (props) => {
  console.log("Props-card", props);

  return (
    <div className="card">
      <Image
        className="card-img-top"
        src={props.selectedMovie.poster}
        alt="Card image cap"
        fluid
      />
      <div className="card-body">
        <h5 className="card-title">{props.selectedMovie.name}</h5>
        <p className="card-text">{props.selectedMovie.description}</p>

        <b className="card-text">Cast: {props.selectedMovie.cast}</b>
      </div>
    </div>
  );
};

export default CardComponent;
