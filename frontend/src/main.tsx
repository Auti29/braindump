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
//delete functionality
// implement tweets and videos filter from sidebar
//implement access after sharing the link
//add more content features 
//add tags and filtering based on tags 
//add superemory ai 
//add responsiveness