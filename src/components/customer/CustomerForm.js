import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Customer.css"
import { useHistory } from 'react-router-dom';
import { ProductContext } from "../product/ProductProvider";

export const CustomerForm = () => {
    const { customers, addCustomer } = useContext(CustomerContext)
    const { products, getProducts } = useContext(ProductContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

    const [customer, setCustomer] = useState({
      name: "",
      productId: 0,
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and customers state on initialization, so we can provide their data in the form drop downs
    */
    useEffect(() => {
      getProducts()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newCustomer = { ...customer } //"..." spread operator. It takes all of the properties of this object, make a new object with its properties, then change the properties of it without affecting the regional object
      let selectedVal = event.target.value
      
      /* Customer is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newCustomer[event.target.id] = selectedVal
      // update state
      setCustomer(newCustomer)
    }
    
    const handleClickSaveCustomer = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      
      const customerPrice = customer.products.price

      if (customerPrice === "") {
        window.alert("Please type in a price")
      } else {
        //invoke addCustomer passing Customer as an argument.
        addCustomer(customer)
        .then(() => history.push("/customers"))
      }
    }

    return (
      <form className="customerForm">
          <h2 className="customerForm__title">New Customer</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Customer name: </label>
                  {/* event.target is this input element */}
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="product">Assign product: </label>
                  <select value={customer.productId} id="productId" className= "form-control" onChange={handleControlledInputChange} >
                      <option value="0">Select a product</option>
                      {products?.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          
          <fieldset>
              <div className="form-group">
                  <label htmlFor="price">Product price: </label>
                  {/* <input type="number" id="price" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Product price" value={customer.products.price}/> */}
              
                  <select defaultValue={customer.productPrice} name="productPrice" id="productPrice" onChange={handleControlledInputChange} className="form-control" >
                    <option value="0">Select a price</option>
                      {products.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.price}
                          </option>
                      ))}
                  </select>

              </div>
          </fieldset>

          <button className="btn btn-primary"
            onClick={handleClickSaveCustomer}>
            Save Customer
          </button>
      </form>
    )
}

// const {product, setProduct} = useState({
    //name= "",
    //productName= "",
    //productPrice=""
//})
//have on change that listens to when the select element change 
//