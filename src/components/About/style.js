import styled from "styled-components";

export const Container = styled.div`
  background: rgba(57, 38, 38, 0.69);
  background: linear-gradient(
    180deg,
    rgba(57, 38, 38, 0.69) 0%,
    rgba(0, 255, 0, 0) 80%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(57, 38, 38, 0.69) 0%,
    rgba(0, 255, 0, 0) 80%
  );
  background: -moz-linear-gradient(
    180deg,
    rgba(57, 38, 38, 0.69) 0%,
    rgba(0, 255, 0, 0) 80%
  );
`;

export const Text = styled.div`
  text-family: Lato;
  text-align: center;
  margin: 50px auto;
  width: 70%;
  padding: 25px;

  h1 {
    font-size: 19px;
    text-family: Montserrat;
    margin: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 55%;
  }

  @media only screen and (max-width: 600px) {
    width: 30%;
  }
`;
