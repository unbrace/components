import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    html, body {
      min-height: 100vh;
      width: 100%;
      font-family: ${props => props.theme.typography.fontFamily};
      font-size: 16px;
      height: 100%;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      line-height: 1.5;
      position: relative;
    }

    body {
      background: ${props => props.theme.palette.neutral.shade1};
      color: ${props => props.theme.palette.neutral.shade8};
    }

    #root {
      width: 100%;
      min-height: 100vh;
      display: flex;
      height: 100%;
      width: 100%;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    *:focus {
      outline: none;
    }

    h1, h2, h3, h4, h5, h6, p {
      font-weight: 400;
      margin: 0;
    }

    b {
      font-weight: 600;
    }
    
    h1 {
      font-size: 2rem;
    }

    a {
      text-decoration: none;
    }
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.scrollbar.track};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.scrollbar.thumb};
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.scrollbar.thumbHover};
    }
    ::-webkit-scrollbar-button {
      display: ${props => props.theme.scrollbar.buttonDisplay};
    }

    ::selection { 
      background: ${props => props.theme.palette.warning.shade3}; 
      color: ${props => props.theme.palette.neutral.shade8}; 
    }
  `;

export default GlobalStyle;
