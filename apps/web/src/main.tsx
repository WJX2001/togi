import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";


import Providers from './components/Common/Providers';
import { Routes } from './routes';

createRoot(document.getElementById('_togi_') as HTMLElement).render(
  <StrictMode>
    <Providers>
      {/* <App /> */}
      <Routes />
    </Providers>
  </StrictMode>
)
