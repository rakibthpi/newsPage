// import React from 'react';

import { Outlet } from "react-router-dom";
import NavigtionBar from "../pages/Shared/NavigationBar/NavigtionBar";

function LoginLayout() {
    return (
        <div>
            <NavigtionBar></NavigtionBar>
            <Outlet></Outlet>
        </div>
    );
}

export default LoginLayout;