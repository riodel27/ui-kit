import styled from "styled-components";

import Card from "./components/Card";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Card />
    </Wrapper>
  );
}

export default App;
