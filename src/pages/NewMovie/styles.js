import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 140rem;
    margin: 4rem auto 0;
    padding: 0 1.2rem;

    header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2.4rem;
      margin-bottom: 3rem;

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
      }
    }
  }
`

export const Form = styled.form`
  > .title-rate {
    display: flex;
    gap: 4rem;
    margin-bottom: 2rem;
  }

  > .tags {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 4rem;

    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
    }

    .tags-wrapper {
      width: 100%;
      height: 8rem;
      padding: 1.6rem;
      display: flex;
      align-items: center;
      gap: 2.4rem;
      overflow-x: auto;
      border-radius: .8rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER };

      button {
        position: relative;
        top: .3rem;
        cursor: pointer;
        border: none;
        background: none;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.MAGENTA };

        &:hover {
          filter: brightness(1.2);
        }
      }

      .tag {
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      
      .new-tag {        
        background: ${({ theme }) => theme.COLORS.GRAY_DARKER };
      }

      .add-tag {
        border: 1px dashed ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
      }
    }
  }

  > .buttons {
    display: flex;
    gap: 4rem;

    button:first-child {
      color: ${({ theme }) => theme.COLORS.MAGENTA };
      background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER };
    }
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 27.5rem;
  padding: 2rem 2.4rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  resize: none;
  color: ${({ theme }) => theme.COLORS.WHITE };
  background: ${({ theme }) => theme.COLORS.GRAY_DARKER };

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
  }
`