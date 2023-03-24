import React from "react";
import { Itemboutique } from "./itemboutique";
import Promo from "./promo";

export function Boutique() {
    return (
        <div className="flex gap-4 flex-wrap justify-center">
            <Itemboutique image="/public/img/clope2.jpg" produit="Kit Aegis Legend 2 Geek Vape" prix={69.90} />
            <Itemboutique image="/public/img/clope4.jpg" produit="Pack Exceed Débutant" prix={29.90} />
            <Itemboutique image="/public/img/clope8.jpg" produit="First LPV" prix={24.90} />
            <Itemboutique image="/public/img/clope9.jpg" produit="Pack Gen 200 Découverte" prix={62.90} />
        </div>




    );
}