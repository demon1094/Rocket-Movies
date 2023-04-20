import styled from 'styled-components'

export const Container = styled.div`
  width: 99%;
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.MAGENTA_TRANSPARENT };
  padding: 3.2rem;
  border: 2px solid transparent;

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  > div:nth-child(2) svg {
    font-size: 1.2rem;
    margin-top: -.8rem;
  }

  > div:nth-child(3) {
    max-height: 4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
  }

  > section span {
    background: ${({ theme }) => theme.COLORS.TAG_BG };
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.COLORS.MAGENTA };
  }
`