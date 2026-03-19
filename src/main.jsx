import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Loop} from './loop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loop />
  </StrictMode>
)
