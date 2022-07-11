import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



const App = () => {
  return (
    <Fragment>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </Fragment>
  )

}

export default App