import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ErrorPage from './pages/404Page.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Profil from './components/elements/Profil/index.jsx'
import Navbar from './components/fragments/Navbar.jsx'
import PageLayouts from './components/layouts/PageLayouts.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : 
    <div className='flex justify-center content-center'> 
      <Navbar/>

      </div>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>,
  },
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/blog",
    element : <BlogPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
