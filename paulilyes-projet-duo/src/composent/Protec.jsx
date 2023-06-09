import { useState } from 'react'
import Produit from "./Produit";
import { Itemboutique } from "./itemboutique";

function Protec() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4 flex-wrap justify-center image">
        <Produit
          name="Casque 1"
          prix={19.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        />
        <Produit
          name="Casque 2"
          prix={14.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        />
        <Produit
          name="Casque 3"
          prix={29.99}
          image="https://www.icasque.com/images/casque-moto/jet/sz-r-vas-blanc-mat-s6.jpg"
        />
      </div>
    </div>

  )
}


export default Protec



