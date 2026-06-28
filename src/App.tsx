import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading/Heading'
import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'


export default function App() {


  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}


