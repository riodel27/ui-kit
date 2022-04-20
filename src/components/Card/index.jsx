import React from "react";
import PropTypes from "prop-types";

import { CardBody, ContentImg, CardText } from "./styled";

function Card({ borderRadius, ...props }) {
  return (
    <CardBody borderRadius={borderRadius}>
      <ContentImg>
        <img
          src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
      </ContentImg>
      <CardText>
        <p className="tag">travel</p>
        <h2>Mountains</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          facere numquam tempora eveniet repellat.
        </p>
        <a className="read-more" href="#">
          Read more
        </a>
      </CardText>
    </CardBody>
  );
}

Card.propTypes = {
  borderRadius: PropTypes.number,
};

Card.defaultProps = {
  borderRadius: 10,
};

export default Card;
