import { useEffect } from "react"
import { usePanierContext } from "./panierContexte"

export function Panier() {
  const { products, removeProduct } = usePanierContext()

  useEffect(() => {
    console.log(products)
  }, [products])

  function getTotalPrix() {
    const Prix = products.reduce(function (accumulator, product) {
      return accumulator + product.prix
    }, 0)

    return Prix.toFixed(2)

  }

  return (
    <body class="bg-sky-100">
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Votre Panier</h1>
              <h2 class="font-semibold text-2xl">{products.length} Produit(s)</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Détails de produits</h3>
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"> </h3>
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Prix</h3>
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"> </h3>
            </div>

            {
              products.map(product => (
                <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div class="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={product.image} alt="" />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{product.name}</span>
                      <button onClick={() => removeProduct(product)} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Supprimer</button>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5"></div>
                  <span class="text-center w-1/5 font-semibold text-sm">{product.prix}€</span>
                </div>
              ))
            }

            <a href="/boutique" class="flex font-semibold text-indigo-600 text-sm mt-10">

              <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continuer vos achats
            </a>
          </div>

          <div id="summary" class="w-1/4 px-8 py-10">
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">{products.length} Articles</span>
              <span class="font-semibold text-sm">TOTAL : {getTotalPrix()}€</span>
            </div>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span></span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Paiement</button>
            </div>
          </div>

        </div>
      </div>
    </body>
  )

}


