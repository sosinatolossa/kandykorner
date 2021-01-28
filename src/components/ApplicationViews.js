import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"


export const ApplicationViews = () => {
    return (
        <>
            {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
            <Route exact path="/">
                <Home />
            </Route>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

        </>
    )
}