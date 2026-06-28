import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading'
import { Container } from './components/Container'


export default function App() {


  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}


