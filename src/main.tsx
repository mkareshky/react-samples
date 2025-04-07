import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NameProvider } from './contexts/NameContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <NameProvider>
      <App />
    </NameProvider>
  </StrictMode>,
)
