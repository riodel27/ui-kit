import styled from "styled-components";

//todo: Responsive

export const CardBody = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
  font-family: "Lora", serif;
  margin: 25px 0;
  min-height: 515px;
  overflow: hidden;

  /* change width percentage based on device? */
  width: 40%;

  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};

  /* border-radius: 5%; */

  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "%" : "5%"};

  img {
    height: auto;
    object-position: center center;
    width: 100%;
  }
`;

export const ContentImg = styled.div`
  border-bottom: 4px solid #f8864f;
  height: 200px;
  overflow: hidden;
`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 315px;

  p.tag {
    font-family: "Lato", sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.secondary};
    letter-spacing: 3px;
    margin-top: 5.5vh;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.75rem;
    margin-top: 25px;
    color: ${(props) => props.primary};
  }

  p.text {
    font-size: 0.95rem;
    margin: 20px auto;
    text-align: center;
    width: 85%;
    color: ${(props) => props.primary};
  }

  a.read-more {
    border: 2px solid #f8864f;
    border-radius: 25px;
    color: #f8864f;
    cursor: pointer;
    font-family: "Lato", sans-serif;
    font-size: 0.85rem;
    font-weight: bold;
    margin-top: 15px;
    padding: 7.5px 25px;
    transition: all 0.5s ease;
  }

  a.read-more:hover {
    background-color: #f8864f;
    color: #ffffff;
    transform: scale(1.15);
  }
`;
