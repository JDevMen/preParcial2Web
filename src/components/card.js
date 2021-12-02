import React, { useRef } from "react";
import Image from "react-bootstrap/Image";

const CardComponent = () => {
  const cardTitle = useRef("cardTitle");
  const cardImage = useRef("cardImage");
  const cardDescription = useRef("cardDescription");
  const cardFooter = useRef("cardFooter");

  return (
    <div className="card">
      <Image
        className="card-img-top"
        ref={cardImage}
        src="https://seocom.agency/wp-content/uploads/2019/02/bootstrap-stack.png"
        alt="Card image cap"
        fluid
      />
      <div className="card-body">
        <h5 className="card-title" ref={cardTitle}>
          Card title
        </h5>
        <p className="card-text" ref={cardDescription}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <b className="card-text" ref={cardFooter}>
          bold text
        </b>
      </div>
    </div>
  );
};

export default CardComponent;
