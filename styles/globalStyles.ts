import { createGlobalStyle } from "styled-components";
import { devices } from "lib/devices";
import {
  COLOR_DARK_BACKGROUND,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";

export const GlobalStyle = createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      background-color: ${COLOR_DARK_BACKGROUND};
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }

    html {
        scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      text-align: initial;
      outline: none;
    }

    button {
      padding: 0;
      line-height: inherit;
      color: inherit;
      cursor: pointer;
    }
    
    button, input, textarea {
      outline: none;
      border: 0;
    }

    input,
    textarea {
      transition: all 0.3s ease-in-out;  
      width: 100%;  
      padding: 1rem 1.25rem;
    }

    h1 {
      font-size: 3.5125rem;      
      line-height: 75.84px;
      letter-spacing: 0.025rem;
      margin-bottom: 1rem;
      color: ${COLOR_LIGHT_BLUE};
      font-family: 'Rubik Bold', Verdana, sans‑serif;

      
      @media ${devices.mobileL} {
        font-size: 1.75rem;      
      }

      @media ${devices.desktopM} {
        font-size: 2.875rem;      
      }
    }

    h2 {
      line-height: 60px;
      color: ${COLOR_LIGHT_BLUE};
      font-family: 'Rubik Bold', Verdana, sans‑serif;
      font-size: 2.5125rem;      

      @media ${devices.desktopM} {
        font-size: 2.275rem;      
      }
    }

    h3 {
      font-size: 1.25rem;      
      margin-bottom: 1rem;
      color: ${COLOR_LIGHT_BLUE};
      font-family: 'Rubik Medium', Verdana, sans‑serif;
      font-weight: 500;

      @media ${devices.mobileL} {
        font-size: 1rem;      
      }
    }

    h4 {
      font-size: 2rem;      
      margin-bottom: 1rem;
      color: ${COLOR_LIGHT_BLUE};
      font-family: 'Rubik Bold', Verdana, sans‑serif;
      font-weight: 500;

      @media ${devices.mobileL} {
        font-size: 1.5rem;      
      }
    }

    p {
      line-height: 28px;
      color: ${COLOR_WHITE}
    }

    p, button, input {
      font-size: 1rem;
      font-family: 'Rubik Regular', Verdana, sans‑serif;
    }
`;
