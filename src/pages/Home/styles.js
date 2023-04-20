import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 140rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 5rem auto;
    padding: 0 1.2rem;
    overflow-y: hidden;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 3.2rem;
        font-weight: 400;
      }

      button {
        max-width: 22rem;
      }
    }
  }
`

export const Movies = styled.section`
  max-height: 65rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
`