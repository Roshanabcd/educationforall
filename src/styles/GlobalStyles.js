import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6C63FF;
    --secondary: #FF6584;
    --background: #0A1929;
    --surface: #1A2027;
    --text: #FFFFFF;
    --neon: #00ff9f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.5;
  }

  .neon-text {
    text-shadow: 0 0 5px var(--neon),
                 0 0 15px var(--neon),
                 0 0 30px var(--neon);
  }

  .gaming-button {
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border: none;
    padding: 12px 24px;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: 0.5s;
    }

    &:hover:before {
      left: 100%;
    }
  }
`;