import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  font-size: 1.6rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.MAGENTA };

  &:hover {
    filter: brightness(1.2);
  }
`