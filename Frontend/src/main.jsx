import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { IsAuthorizedContextProvider, isAuthorizedContext } from './context/CustomContext.jsx'
import axios from 'axios'
import CreatePost from './Pages/CreatePost.jsx'
import PostDetail from './Components/common/PostDetail.jsx'
import NotFound from './Pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
      <Route path='/post/:id' element={<PostDetail/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <IsAuthorizedContextProvider>
        <RouterProvider router={router}>
            <Layout/>
        </RouterProvider>
      </IsAuthorizedContextProvider>
  </React.StrictMode>,
)
