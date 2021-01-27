import React from "react"
import { Route } from "react-router-dom"

import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"


export const ApplicationViews = () => {
    return (
        <>

            {/* Render the animal list when http://localhost:3000/animals */}
            <h2>Products</h2>
            <ProductProvider>
                {/* <ProductTypeProvider> */}
                    
                        {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
                        <Route exact path="/products">
                            <ProductList />
                        </Route>
                   
                {/* </ProductTypeProvider> */}
            </ProductProvider>
        </>
    )
}