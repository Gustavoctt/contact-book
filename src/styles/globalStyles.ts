import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
  --background: #181618;
  --orange: #F4671F;
  --white: #FFFFFF;
  --red: #a93638;
  --green: #608c3d;
  --yellow: #abb046;

  --gray-100: #89868D;
  --gray-200: #282729;
  --gray-300: #1F1E1F;
 }

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 a{ text-decoration: none}

 html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body {
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   background: var(--background);
  }
`;

export default GlobalStyle;
