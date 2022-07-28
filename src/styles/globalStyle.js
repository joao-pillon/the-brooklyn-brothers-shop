import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.App{
	@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,200;0,300;1,400&family=Ultra&display=swap');
  text-align: center;
  background: #2c2a2a;
  background: linear-gradient(222deg,#2c2a2a 0%, #ccb8a9 90%);
  background: -webkit-linear-gradient(222deg,#2c2a2a 0%, #f6f6f6 90%);
  background: -moz-linear-gradient(222deg,#2c2a2a 0%, #ff9f48 90%);
  filter:hue-rotate(15deg) sepia(0.2);
  height:100%;
}

html,hr, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
 
font-family: 'Lato', sans-serif;  
}
body {
	line-height: 1.5;
}
ol, ul {
	list-style: none;
}



`;
export default GlobalStyle;
