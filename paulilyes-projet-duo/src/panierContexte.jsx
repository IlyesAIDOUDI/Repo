import { createContext, useContext, useState } from "react";

const PanierContexte = createContext({});

export function usePanierContext() {
    return useContext(PanierContexte)
}

export function PanierProvider({ children }) {
    const [products, setProducts] = useState([])
    function addProduct(Product) {
        setProducts([...products, Product]);
    }
    function removeProduct(product) {
        const productCopy = [...products]
        const productIndex = productCopy.indexOf(product)
        console.log(productIndex);
        setProducts(productCopy.splice(productIndex, 1))
    }

    return (
        <PanierContexte.Provider value={{ products, addProduct, removeProduct }}>{children}</PanierContexte.Provider>
    )
}