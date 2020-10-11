import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Drawer from "../../Components/Navigation/Drawer/Drawer";
import classes from "./Layout.module.css";

const Layout = (props) => {

    return (
        <Aux>
            <Drawer />
            {props.children}
        </Aux>
    )

}

export default Layout;