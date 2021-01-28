//we're importing the main react library here and two functions it exports
//we will be using useState to hold and set the array of employees
import React, { useState, createContext } from "react"

//we're creating a data provider in react so we need to creat a context
//that individual components can use for data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => { //props is an object
    const [employees, setEmployees] = useState([]) //useState is returning array
    //setEmployees is a function that returns the updated version of 'employees'

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=locations") //_expand=location let's you have a method 'location' in animals object. if you want to do another method, you write '&_expand=objectName
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(response => response.json)
    }

    /*
        You return a context provider which has the
        `employees` state, `getEmployees` function,
        and the `addEmployee` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <EmployeeContext.Provider value={{
        employees, getEmployees, addEmployee
    }}>
        {props.children} 
    </EmployeeContext.Provider>
)
}