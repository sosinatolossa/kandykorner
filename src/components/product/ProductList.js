import React, { useContext, useEffect } from "react"
//The useContext hook allows us to use data structures and functions that a parent provider component exposes
//To start, we need to import the context object we created in the provider component so that the Context hook can access the objects it exposes
//The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
//In this case, it is the API call for the Products.
// import { useHistory } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
  
    //useEffect - reach out to the world for something out of the react app
    useEffect(() => {
      console.log("ProductList: useEffect - getProducts")
      getProducts()
    }, [])
  
  
    return (
      <div className="products">
        {console.log("ProducList: Render", products)}
      {
        products.map(product => {
          return <ProductCard key={product.id} 
              product={product} />
        })
      }
    </div>
    )
  }