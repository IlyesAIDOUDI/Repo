import { useState } from 'react'
import './App.css'
import Produit from "./Produit";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Itemboutique } from "./itemboutique";

function Acces() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">


            <div className="image">
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



