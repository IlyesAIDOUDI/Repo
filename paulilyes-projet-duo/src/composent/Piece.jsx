import { useState } from 'react'
import Produit from "./Produit";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Itemboutique } from "./itemboutique";

function Piece() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 flex-wrap justify-center image">
                <Produit
                    name="Pièce 1"
                    prix={9.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                />
                <Produit
                    name="Pièce 2"
                    prix={4.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                /><b />
                <Produit
                    name="Pièce 3"
                    prix={19.99}
                    image="https://www.challenges.fr/drupal/files/2021-12/capture-d-e-cran-2021-12-14-a-11-09-11_0.jpg"
                />
            </div>
        </div>

    )
}


export default Piece



