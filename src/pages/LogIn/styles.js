import styled from 'styled-components'
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-areas: "form background";

  .form-wrapper {
    grid-area: form;
    max-width: 34rem;
    margin: auto;

    header {
      margin-bottom: 4.8rem;

      h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.MAGENTA };
      }

      p {
        font-size: 1.4rem;
        color: #CAC4CF;
      }
    }
  }

  .background-wrapper {
    width: 100%;
    height: 100%;
    grid-area: background;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 2.5rem;
  }

  > button {
    margin-bottom: 5rem;
  }
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundImg}) no-repeat;
  background-size: cover;
  opacity: 0.4;
`