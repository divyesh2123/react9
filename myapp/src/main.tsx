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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ToastContainer />
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Login></Login>}/>
      <Route path='/registration' element={<Registration></Registration>}/>
      <Route path='/home' element={<HomeNew></HomeNew>}/>
      <Route path='/Account' element={<Account></Account>}/>
      <Route path='/formikwithMUI' element={<FormikWithMUI></FormikWithMUI>}/>
      <Route path='/Post' element={<Post></Post>}/>
      <Route path='/readmore' element={<ReadMore props='this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript'></ReadMore>}/>
    </Routes>

    </BrowserRouter>
    
  </StrictMode>,
)
