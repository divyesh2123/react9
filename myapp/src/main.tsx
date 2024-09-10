import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Home } from './Home.tsx'
import { Product } from './Product.tsx'
import Login from './Login.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Login></Login>}/>
      <Route path='/home' element={<Home></Home>}/>
    </Routes>

    </BrowserRouter>
    
  </StrictMode>,
)
