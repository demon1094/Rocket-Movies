import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', sans-serif;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE };
    background: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHTER };
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 1rem;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.MAGENTA };
    background-clip: padding-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.ORANGE_HOVER };
  }
`