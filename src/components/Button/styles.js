import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: .8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BLACK };
  background: ${({ theme }) => theme.COLORS.MAGENTA };

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`