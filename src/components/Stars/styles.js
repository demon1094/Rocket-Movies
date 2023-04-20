import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.MAGENTA };
  }
`