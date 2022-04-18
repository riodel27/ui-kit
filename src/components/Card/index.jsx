import React from "react";

import { CardBody, ContentImg, CardText } from "./styled";

// todo: prop types, data?

function Card() {
  return (
    <CardBody>
      <ContentImg>
        <img
          src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
      </ContentImg>
      <CardText>
        <p class="tag">travel</p>
        <h2>Mountains</h2>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          facere numquam tempora eveniet repellat.
        </p>
        <a class="read-more" href="#">
          Read more
        </a>
      </CardText>
    </CardBody>
  );
}

export default Card;
