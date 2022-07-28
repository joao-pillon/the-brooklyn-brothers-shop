import styled from "styled-components";

export const Card = styled.li`
  width: 250px;
  height: 300px;
  margin: 10px auto;

  background-color: #ffff;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 800px) {
    height: 290px;
    width: 150px;
  }
`;

export const Font = styled.h2`
  font-size: 0.9rem;
  h3 {
    font-size: 1rem;
  }
`;

export const ProductImg = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const Container = styled.li`
  height: 88px;
  background-color: #999;
  box-shadow: 0px 0px 49px 17px rgba(99, 94, 94, 0.75) inset;
  -webkit-box-shadow: 0px 0px 49px 17px rgba(99, 94, 94, 0.75) inset;
  -moz-box-shadow: 0px 0px 49px 17px rgba(99, 94, 94, 0.75) inset;
  @media only screen and (max-width: 800px) {
    height: 128px;

  }

`;

export const Button = styled.button`
  color: #f1f1f1;
  background-color: #333;
  border: transparent;
  width: 90px;
  height: 25px;

  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    filter: brightness(0.8);
  }
`;
