import React, { useContext, useEffect } from "react"
//The useContext hook allows us to use data structures and functions that a parent provider component exposes
//To start, we need to import the context object we created in the provider component so that the Context hook can access the objects it exposes
//The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
//In this case, it is the API call for the locations.
// import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
  
    //useEffect - reach out to the world for something out of the react app
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getLocations()
    }, [])
  
  
    return (
      <div className="locations">
      {
        locations.map(location => {
          return <LocationCard key={location.id} 
              location={location} />
        })
      }
    </div>
    )
  }