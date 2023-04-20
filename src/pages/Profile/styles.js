import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.5rem;
    display: flex;
    align-items: center;
    padding-left: 14.4rem;
    background: ${({ theme }) => theme.COLORS.MAGENTA_TRANSPARENT };
  }
`

export const Form = styled.form`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: auto;

  > div:nth-child(4) {
    margin-top: 2.5rem;
  }

  > div:nth-child(5) {
    margin-bottom: 2rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  margin: -10rem auto 5rem;
  
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: .7rem;
    right: .7rem;
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.MAGENTA };

    &:hover {
      filter: brightness(1.2);
    }

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK };
    }
  }
`