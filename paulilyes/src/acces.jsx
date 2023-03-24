import { useState } from 'react'
import './App.css'
import Produit from "./Produit";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Acces() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">


            <div className="image">
                <Produit
                    name="Acces 1"
                    price={0.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                />
                <Produit
                    name="Acces 2"
                    price={1.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                /><b />
                <Produit
                    name="Acces 3"
                    price={2.99}
                    image="https://www.sweet-chic-accessoires.com/template/images/logo-boutique-pc.png"
                />
            </div>
        </div>

    )
}


export default Acces



