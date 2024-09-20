import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Home } from './Home.tsx'
import { Product } from './Product.tsx'
import Login from './Login.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeNew } from './HomeNew.tsx'
import Registration from './Registration.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Account from './Account.tsx'
import FormikWithMUI from './FormikWithMUI.tsx';
import Post from './Post.tsx'
import ReadMore from './ReadMore.tsx'
import Parent from './Paret.tsx'
import Pat from './Pat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ToastContainer />
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </StrictMode>,
)
