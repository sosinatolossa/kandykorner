//we're importing the main react library here and two functions it exports
//we will be using useState to hold and set the array of products
import React, { useState, createContext } from "react"

//we're creating a data provider in react so we need to creat a context
//that individual components can use for data
export const ProductContext = createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => { //props is an object
    const [products, setProducts] = useState([]) //useState is returning array
    //setProducts is a function that returns the updated version of 'products'

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productTypes") //_expand=location let's you have a method 'location' in animals object. if you want to do another method, you write '&_expand=objectName
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    /*
        You return a context provider which has the
        `products` state, `getProducts` function,
        and the `addProduct` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <ProductContext.Provider value={{
        products, getProducts, addProduct
    }}>
        {props.children} 
    </ProductContext.Provider>
)
}