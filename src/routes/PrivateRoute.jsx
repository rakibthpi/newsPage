/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { UserProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    0
    let location = useLocation();
    console.log("location private route", location)
    const { user, loading } = useContext(UserProvider);
    if (loading) {
        return <div>Loading .....</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ url: location }} replace={true}></Navigate>
};

export default PrivateRoute;