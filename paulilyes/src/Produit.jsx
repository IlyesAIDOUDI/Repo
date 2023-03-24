import React from "react";
import { usePanierContext } from "./panierContexte"

function Produit(props) {
    const { addProduct } = usePanierContext()
    function handleClick() {
        const product = {
            name: props.produit,
            prix: props.prix,
            image: props.image
        }

        addProduct(product)
    }
    return (
        <div className="product">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>Prix : {props.price} €</p>
            <button onClick={handleClick} class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Ajouter au panier</button>
        </div>
    );
}

export default Produit;