import { Container, Form, Avatar } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} />
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/demon1094.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

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
          placeholder="Senha atual"
          icon={FiLock}
        />

        <Input 
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}