import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CalculatorProvider } from './Context/CalculatorContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
    
  </StrictMode>,
)
