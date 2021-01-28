//we're importing the main react library here and two functions it exports
//we will be using useState to hold and set the array of locations
import React, { useState, createContext } from "react"

//we're creating a data provider in react so we need to creat a context
//that individual components can use for data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => { //props is an object
    const [locations, setLocations] = useState([]) //useState is returning array
    //setLocations is a function that returns the updated version of 'locations'

    const getLocations = () => {
        return fetch("http://localhost:8088/locations") //_expand=location let's you have a method 'location' in animals object. if you want to do another method, you write '&_expand=objectName
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <LocationContext.Provider value={{
        locations, getLocations, addLocation
    }}>
        {props.children} 
    </LocationContext.Provider>
)
}