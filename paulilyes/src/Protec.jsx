import { useState } from 'react'
import './App.css'
import Produit from "./Produit";

function Protec() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="image">
        <Produit
          name="Casque 1"
          price={19.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        /><br />
        <Produit
          name="Casque 2"
          price={14.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        /><b /><br />
        <Produit
          name="Casque 3"
          price={29.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        />
      </div>
    </div>

  )
}


export default Protec



