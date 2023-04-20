import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 140rem;
    margin: 4rem auto 0;
    padding: 0 1.5rem;

    button {
      margin-bottom: 2.4rem;
    }

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    .movie-rate {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2.4rem;
    }

    .author-date {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin-bottom: 4rem;

      .author, .date {
        display: flex;
        align-items: center;
        gap: .8rem;

        img, svg {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          color: ${({ theme }) => theme.COLORS.MAGENTA };
        }
      }
    }

    section {
      margin-bottom: 5rem;
    }
  }
`