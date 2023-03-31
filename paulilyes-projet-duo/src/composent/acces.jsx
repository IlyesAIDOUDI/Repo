import { useState } from 'react'
import Produit from "./Produit";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Acces() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 flex-wrap justify-center image">
                <Produit
                    name="Acces 1"
                    prix={0.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                />
                <Produit
                    name="Acces 2"
                    prix={1.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                /><b />
                <Produit
                    name="Acces 3"
                    prix={2.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                />
            </div>
        </div>

    )
}


export default Acces



