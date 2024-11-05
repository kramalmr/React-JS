import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './meeting-2/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
