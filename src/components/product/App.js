import React from "react"
import Product from "./Product"
import productsData from ".vschoolsProducts"

function App() {
    const productCommponents = productsData.map(item => <Product product={item}/>)

    return (
      <div>
        {productCommponents}
      </div>
    )

}

export  default App
