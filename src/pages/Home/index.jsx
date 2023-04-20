import { Container, Movies } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title="Adicionar filme" />
        </header>

      <Movies>
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
        <Movie title="Interestellar" />
      </Movies>
      </main>
    </Container>
  )
}