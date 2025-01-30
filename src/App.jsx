import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/screens/Home'
import Proyects from './components/screens/Home/Proyects'

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Proyects/>
    </>
  )
}

export default App
