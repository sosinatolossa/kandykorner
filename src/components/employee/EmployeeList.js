import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    
    // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the Employee form component.
    const history = useHistory()

    //useEffect - reach out to the world for something out of the react app
    useEffect(() => {
        getEmployees()
      }, [])

    
    return (
        <div className="employees">
		      <button onClick={() => {history.push("/employees/create")}}>
            Add Employee
          </button>
          {
            employees.map(employee => {
              return <EmployeeCard key={employee.id} 
                    employee={employee} />
            })
          }
        </div>
    )

}