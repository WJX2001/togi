import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import Providers from './components/Common/Providers/index.tsx'
import { Routes } from './routes.tsx'

createRoot(document.getElementById('_togi_') as HTMLElement).render(
  <StrictMode>
    <Providers>
      {/* <App /> */}
      <Routes />
    </Providers>
  </StrictMode>
)
