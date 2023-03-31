import { useState } from 'react'
import Login from './composent/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './composent/navbar'
import { Footer } from './composent/footer'
import Home from './composent/home'
import Protec from "./composent/Protec"
import Piece from "./composent/Piece"
import Acces from "./composent/Acces"
import { Panier } from './composent/panier'
import { PanierProvider } from './composent/panierContexte'

function App() {
  const [count, setCount] = useState(0)


  return (
    <PanierProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/Acces' element={<><Acces /></>} />
          <Route path='/protec' element={<><Protec /></>} />
          <Route path='/piece' element={<><Piece /></>} />
          <Route path='/panier' element={<Panier />} />
          <Route path='/' element={<><Home /></>} />
        </Routes>
        <br></br>
        <Footer />
      </BrowserRouter>
    </PanierProvider>
  )
}



export default App
