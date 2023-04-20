import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding-left: 2.4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.GRAY_DARKER };

  > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE };

    &::placeholder {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER };
    }
  }
`