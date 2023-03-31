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
        <div class="ml-5 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg" src={props.image} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.produit}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">Prix : {props.prix} €   </span>
                    <button onClick={handleClick} class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Ajouter au panier</button>
                </div>
            </div>

        </div>
    );
}

export default Produit;


