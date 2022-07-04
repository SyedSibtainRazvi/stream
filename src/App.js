import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'



const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
      </Routes>
    </Fragment>
  )
}

export default App