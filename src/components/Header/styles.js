import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 13.6rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.STROKE };

  > div {
    max-width: 140rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6.4rem;
    margin: 0 auto;

    h2 {
      color: ${({ theme }) => theme.COLORS.MAGENTA };
    }

    @media screen and (max-width: 685px) {
      gap: 0;
      justify-content: space-between;

      div:nth-child(2) {
        display: none;
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1.8rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      white-space: nowrap;
    }

    a {
      align-self: end;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
    }
  }

  > img {
    width: 6.4rem;
    border-radius: 50%;
    cursor: pointer;
    outline: 2px solid transparent;

    &:hover {
      outline: 2px solid ${({ theme }) => theme.COLORS.MAGENTA };
    }
  }
`