import './styles/global.css'
import './styles/theme.css'
import Heading from './components/Heading'
import { TimerIcon } from 'lucide-react'

export default function App() {


  return (
    <>
      <Heading>
        Ola mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  )
}


