import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Google Fonts for recommended typography
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Montserrat:wght@800&family=Nunito:wght@400;700&family=Lexend:wght@700&family=Poppins:wght@500&family=Roboto:wght@500&family=Lato:wght@700&family=Bebas+Neue&family=Open+Sans:wght@400;700&family=Lora:wght@400;700&family=Playfair+Display:ital,wght@1,700&family=Cormorant+Garamond:wght@700&family=Source+Sans+Pro:wght@400;700&display=swap';
document.head.appendChild(fontLink);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
