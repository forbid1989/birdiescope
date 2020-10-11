import React from 'react';
import classes from "./Drawer.module.css"
import drawerImage from '../../../Assets/Images/drawerImage.jpg';

const Drawer = (props) => {

    return (
        <ul id="slide-out" className={`sidenav ${classes.Drawer}`} style={{backgroundImage:`url(${drawerImage})`}}>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
        </ul>
    )

}

export default Drawer;