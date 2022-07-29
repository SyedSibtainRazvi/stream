import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
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
          <Route path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </Fragment>
  )

}

export default App