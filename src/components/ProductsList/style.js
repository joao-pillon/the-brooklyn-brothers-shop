import styled from "styled-components";

export const Main = styled.div`
  width: 95%;
  height: 100%;

  margin: 5px auto;
  padding-top:10px;

  border-radius: 15px;
  background-color: #111;
  box-shadow: -1px 0px 14px 4px rgba(134, 133, 133, 0.6);
  -webkit-box-shadow: -1px 0px 14px 4px rgba(134, 133, 133, 0.6);
  -moz-box-shadow: -1px 0px 14px 4px rgba(134, 133, 133, 0.6);

  ul{
  list-style: none;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  }
  li{
    margin:10px auto;
    padding:0px;
  }


@media only screen and (max-width: 1124px) {
    ul{
      grid-template-columns: 1fr 1fr 1fr;
}
@media only screen and (max-width: 600px) {
    ul{
      grid-template-columns: 1fr 1fr;
}
    li{

    }
  }


  }


`;
