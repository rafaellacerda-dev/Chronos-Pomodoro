import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading/Heading'
import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'
import { CountDown } from './components/CountDown/CountDown'


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
        <CountDown />
      </Container>

      <Container>

        <Heading>#</Heading>
      </Container>
    </>
  )
}


