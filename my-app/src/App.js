import { PanierProvider } from './composent/panierContexte'
import { Navbar } from './composent/navbar'
import { Hdp } from './composent/hautdepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './composent/footer'
import Register from './composent/register'
import Login from './composent/login'
import Produits from './composent/produits'
import Services from './composent/services'
import Contacts from './composent/contacts'



function App() {

  return (
    <PanierProvider>
      <Hdp />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<><h1>Accueil</h1></>}> </Route>
          <Route path='/produits' element={<Produits />}> </Route>
          <Route path='/services' element={<Services />}> </Route>
          <Route path='/contacts' element={<Contacts />}> </Route>
        </Routes>
        <br /><br /><br /><br /><br />
        <Footer></Footer>
      </BrowserRouter>
    </PanierProvider>
  );
}

export default App;
