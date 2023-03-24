import { useState } from 'react'
import './App.css'
import Produit from "./Produit";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Piece() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">


            <div className="image">
                <Produit
                    name="Pièce 1"
                    price={9.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                />
                <Produit
                    name="Pièce 2"
                    price={4.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                /><b />
                <Produit
                    name="Pièce 3"
                    price={19.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                />
            </div>
        </div>

    )
}


export default Piece



