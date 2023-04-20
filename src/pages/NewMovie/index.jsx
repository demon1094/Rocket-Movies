import { Container, Form, Textarea } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FiArrowLeft, FiX, FiPlus } from 'react-icons/fi'

export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <ButtonText 
            title="Voltar" 
            icon={FiArrowLeft}
          />
          <h1>Novo filme</h1>
        </header>

        <Form>
          <div className="title-rate">
            <Input 
              placeholder="Título"
              type="text"
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
            />
          </div>

          <Textarea placeholder="Observações" />

          <div className="tags">
            <h3>Marcadores</h3>
            <div className="tags-wrapper">
              <div className="tag new-tag">
                <span>React</span>
                <button>
                  <FiX />
                </button>
              </div>
              <div className="tag add-tag">
                <span>Novo marcador</span>
                <button>
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="buttons">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}