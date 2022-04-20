import React from "react";
import PropTypes from "prop-types";

import { CardBody, ContentImg, CardText } from "./styled";

function Card({ borderRadius, primary, secondary, flexDirection, ...props }) {
  return (
    <CardBody borderRadius={borderRadius} flexDirection={flexDirection}>
      <ContentImg>
        <img
          src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
      </ContentImg>
      <CardText primary={primary} secondary={secondary}>
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
  primary: PropTypes.string,
  secondary: PropTypes.string,
  flexDirection: PropTypes.oneOf(["column", "row"]),
};

Card.defaultProps = {
  borderRadius: 10,
  primary: "#636364",
  secondary: "#898989",
  flexDirection: "column",
};

export default Card;
