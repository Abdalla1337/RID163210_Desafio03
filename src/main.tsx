import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/home/Home'
import { GlobalStyles } from './components/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
