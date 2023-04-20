import { Container } from './styles'
import { BsStarFill, BsStar } from 'react-icons/bs'

export function Stars({ ...rest }) {
  return (
    <Container {...rest}>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStar />
    </Container>
  )
}