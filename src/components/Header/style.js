import styled from "styled-components";

export const HeaderMain = styled.div`
  font-family: "Ultra", serif;
  background: #200f0f;
  background: linear-gradient(90deg, #200f0f 0%, #000000 99%);
  background: -webkit-linear-gradient(90deg, #200f0f 0%, #000000 99%);
  height: 100px;
  color: #fff;
  font-size: 45px;

  :after {
    content: "shop";
  }

  font-size: 30px;
  padding: 35px;
  img {
    height: 80px;
  }


  @media only screen and (max-width: 768px) {
    text-align: right;
  }

  @media only screen and (max-width: 600px) {
    text-align: right;
    height: 70px;
    padding: 10px;
    font-size: 25px;
    img {
      height: 60px;
    }
  }
`;

export const Hr = styled.div`
  background-color: #2b3030;
  height: 43px;
  box-shadow: 1px 8px 9px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 8px 9px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 8px 9px 2px rgba(0, 0, 0, 0.75);
`;

export const Nav = styled.div`
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-250%)"};
  transition: transform 0.33s ease-in-out;
  transform-origin: px;

  padding-top: 20px;
  padding-left: 100px;
  top: 0%;
  left: 0%;

  @media only screen and (max-width: 600px) {
    padding-top: 12px;
    padding-left: 60px;
  }
`;
export const Left = styled.div`
  position: absolute;
`;

export const H2 = styled.div`
  margin: 20px;
  font-size: 24px;
  font-family: Lato;
  color: #f6f6f6;
`;

export const H3 = styled.div`
  position: relative;
  color: #f6f6f6;
  font-size: 21px;
  font-family: Montserrat;
  text-align: left;
  justify-content: center;
  :hover {
    cursor: pointer;
    color: #fff;
    text-shadow: 4px 0px 3px rgba(123, 123, 123, 0.6);
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Input = styled.div`

input{
  height: 17px; 
  width: 225px;
  margin:10px auto;
}
  button {
    background-color:#f9f9f9;
    width: 150px;
    height: 25px;
    border-radius: 10px;
    :hover{
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;
