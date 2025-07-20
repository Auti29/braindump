import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//todo
//implement access after sharing the link
//dynamic layout of cards 
//add more content types => google docs 
//add tags and filtering based on tags 
//add superemory ai / vector db
//add responsiveness
//lazy load tweets