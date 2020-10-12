import React from 'react';
import classes from "./Drawer.module.css"
import drawerImage from '../../../Assets/Images/drawerImage.jpg';
import DrawerItem from "./DrawerItem/DrawerItem"

const Drawer = (props) => {

    return (
        <ul id="slide-out" className={`sidenav ${classes.Drawer}`} style={{backgroundImage:`url(${drawerImage})`}}>
            <li><div><i className={`material-icons`}>close</i></div></li>
            <li><DrawerItem link="/">item1</DrawerItem></li>
            <li><DrawerItem link="/">item2</DrawerItem></li>
            <li><DrawerItem link="/">item3</DrawerItem></li>
        </ul>
    )

}

export default Drawer;