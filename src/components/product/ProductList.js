import React, { useContext, useEffect } from "react"
//The useContext hook allows us to use data structures and functions that a parent provider component exposes
//To start, we need to import the context object we created in the provider component so that the Context hook can access the objects it exposes
//The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
//In this case, it is the API call for the Products.
import { useHistory } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    // const { productTypes, getProductTypes}

  
    // The useHistory hook let's us tell React which route we want to visit. 
    // We will use it to tell React to render the Product form component.
    const history = useHistory()
  
    //useEffect - reach out to the world for something out of the react app
    useEffect(() => {
      console.log("ProductList: Initial render before data")
      getProducts()
    }, [])
  
  
    return (
      <div className="products">
                <button className="addProductButton"onClick={() => {history.push("/products/create")}}>
              Add Product
            </button>
        {/* {console.log("ProductList: Render", Products)} */}
        {
          products.map(product => {
            //Use the .find() method on both the customers array and
            //the locations array to find the object representation that 
            //each foreign key is referencing.
            // const productType = productTypes.find(l => l.id === product.productTypeId)
            
            return <ProductCard key={product.id} 
                              // productType={productType}
                              product={product} /> //key, productType, and product will become properties on an object that gets passed as an argument
          })
        }
      </div>
    )
  }