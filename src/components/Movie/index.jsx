import { Container } from './styles'

import { MovieComments } from '../MovieComments'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

export function Movie({ title, ...rest }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Stars />

      <MovieComments />

      <Tags data={{
          tags: [
            { id: '1', title: 'Ficção Científica'},
            { id: '2', title: 'Drama' },
            { id: '3', title: 'Família' }
          ]
        }}
      />
    </Container>
  )
}