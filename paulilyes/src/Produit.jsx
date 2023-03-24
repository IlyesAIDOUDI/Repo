import React from "react";

function Produit(props) {
    return (
        <div className="product">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>Prix : {props.price} €</p>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default Produit;