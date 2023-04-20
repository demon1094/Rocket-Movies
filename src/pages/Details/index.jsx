import { Container } from './styles'

import { MovieComments } from '../../components/MovieComments'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Stars } from '../../components/Stars'
import { Tags } from '../../components/Tags'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText 
          title="Voltar" 
          icon={FiArrowLeft}
        />

        <div className="movie-rate">
          <h1>Interestellar</h1>
          <Stars />
        </div>

        <div className="author-date">
          <div className="author">
            <img src="https://github.com/demon1094.png" />
            <p>Por Demonn Dev</p>
          </div>
          <div className="date">
            <FiClock />
            <p>18/04/2023 às 11:50</p>
          </div>
        </div>

        <Tags data={{
          tags: [
            { id: '1', title: 'Ficção Científica'},
            { id: '2', title: 'Drama' },
            { id: '3', title: 'Família' }
          ]
        }}
        />

        <MovieComments />
      </main>
    </Container>
  )
}