import { Container, Form, Background } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FiMail, FiLock } from 'react-icons/fi'

export function LogIn() {
  return (
    <Container>
      <div className="form-wrapper">
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <Form>
          <h2>Faça seu login</h2>

          <div className="input-wrapper">
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

          <Button title="Entrar" />

          <ButtonText title="Criar conta" />
        </Form>
      </div>

      <div className="background-wrapper">
        <Background />
      </div>
    </Container>
  )
}