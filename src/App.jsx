import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ErrorPage from './pages/404Page'

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/error' Component={ErrorPage}/>
      </Routes> */}
    </div>

  )
}

export default App