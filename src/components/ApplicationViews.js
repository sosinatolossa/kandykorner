import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"

import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"

import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerForm } from "./customer/CustomerForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
            <Route exact path="/">
                <Home />
            </Route>

            <h2>Products</h2>
            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

            <h2>Locations</h2>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <h2>Employees</h2>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>

                    <Route path="/employees/edit/:employeeId(\d+)">
                        <EmployeeForm />
                    </Route>

                </LocationProvider>
            </EmployeeProvider>

            {/* Render the location list when http://localhost:3000/employees */}
            <h2>Customers</h2>
             <CustomerProvider>

                <ProductProvider>

                    <Route exact path="/customers">
                        <CustomerList />
                    </Route>

                    <Route path="/customers/create">
                        <CustomerForm />
                    </Route>

                </ProductProvider>
              </CustomerProvider>

        </>
    )
}