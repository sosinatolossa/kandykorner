import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <Route
        render={() => {
            if (localStorage.getItem("kandykorner_customer")) { //if the user is logged in, show them the stuff
            return (
                <>
                <NavBar />
                <ApplicationViews />
                </>
            );
            } else {
            return <Redirect to="/login" />; //if not redirect them to the login page
            }
        }}
        />

        <Route path="/login"> 
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)
