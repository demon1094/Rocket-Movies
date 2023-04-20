import { Container, Form, Background } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function Register() {
  return (
    <Container>
      <div className="form-wrapper">
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <Form>
          <h2>Crie sua conta</h2>

          <div className="input-wrapper">
            <Input 
              type="text"
              placeholder="Nome"
              icon={FiUser}
            />

            <Input 
              type="email"
              placeholder="E-mail"
              icon={FiMail}
            />

            <Input 
              type="password"
              placeholder="Password"
              icon={FiLock}
            />
          </div>

          <Button title="Cadastrar" />

          <ButtonText title="Voltar para o login" />
        </Form>
      </div>

      <div className="background-wrapper">
        <Background />
      </div>
    </Container>
  )
}