import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import { ProductContext } from "../product/ProductProvider"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  const { products, getProducts } = useContext(ProductContext)

  // The useHistory hook let's us tell React which route we want to visit. 
  // We will use it to tell React to render the animal form component.
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getProducts()
    .then(getCustomers)
  }, [])


  return (
    <div className="customers">
		      <button onClick={() => {history.push("/customers/create")}}>
            Add Customer
          </button>
      {
        customers.map(customer => {
          const product = products.find(l => l.id === customer.productId)

          return <CustomerCard key={customer.id} 
                          product={product}
                          customer={customer} /> //key, product, and customer will become properties on an object that gets passed as an argument
        })
      }
    </div>
  )
}