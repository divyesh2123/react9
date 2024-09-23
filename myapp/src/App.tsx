import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

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
import { ILanguage, TodoContext } from './language/Language.tsx'
import Header from './Header.tsx'
import MyCrud from './MyCrud.tsx'
import MyInfo from './MyInfo.tsx'
import MyInfoComments from './MyInfoComments.tsx'

function App() {
  const [lan, setlan] = useState<ILanguage>({lan:"en"})

  return (
    <TodoContext.Provider value={{lan,setlan}}>
      <Header/>
    <Routes>

<Route path='/' element={<Login></Login>}/>
<Route path='/registration' element={<Registration></Registration>}/>
<Route path='/home' element={<HomeNew></HomeNew>}/>
<Route path='/Account' element={<Account></Account>}/>
<Route path='/formikwithMUI' element={<FormikWithMUI></FormikWithMUI>}/>
<Route path='/Post' element={<Post></Post>}/>
<Route path='/readmore' element={<ReadMore props='this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript'></ReadMore>}/>
<Route path='/Parent' element={<Parent></Parent>}/>
<Route path='/Pat' element={<Pat></Pat>}/>
<Route path='/crud' element={<MyCrud></MyCrud>}/>
<Route path='/myInfo' element={<MyInfo></MyInfo>}/>
<Route path='/myinfodata' element={<MyInfoComments></MyInfoComments>}/>
</Routes>

    </TodoContext.Provider>
  )
}

export default App
