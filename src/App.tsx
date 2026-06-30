import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading/Heading'
import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'


export default function App() {


  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading>#</Heading>
      </Container>
    </>
  )
}


