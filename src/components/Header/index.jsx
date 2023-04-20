import { Container, Profile } from './styles'
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <div>
        <h2>RocketMovies</h2>

        <Input 
          type="text"
          placeholder="Pesquisar pelo título"
        />
        <Profile>
          <div>
            <h3>Demonn Dev</h3>
            <a href="/">sair</a>
          </div>

          <img src="https://github.com/demon1094.png" alt="Foto do usuário" />
        </Profile>
      </div>
    </Container>
  )
}