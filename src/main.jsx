import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Guesscolor from './components/Guesscolor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Guesscolor/>
  </StrictMode>,
)
