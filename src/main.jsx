import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ErrorPage from './pages/404Page.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Navbar from './components/fragments/Navbar.jsx'
import Sidebar from './components/fragments/Sidebar.jsx';
import DashboardLayouts from './components/layouts/DashboardLayouts.jsx';
import { Footer } from './components/fragments/Footer.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    // <div className=''> 
    //     <Navbar />
    //     <div className='my-4'>d</div>
    //     <Footer/>
    //   </div>,
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
  {
    path : "/dashboard",
    element : <DashboardLayouts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
