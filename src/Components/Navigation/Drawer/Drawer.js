import React, {useEffect, useState} from 'react';
import classes from "./Drawer.module.css"
import drawerImage from '../../../Assets/Images/drawerImage.jpg';
import DrawerItem from "./DrawerItem/DrawerItem";
import CloseSideBarButton from "./CloseSideBarButton/CloseSideBarButton";
import M from  'materialize-css/dist/js/materialize.min.js';

const Drawer = (props) => {

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {edge:"left", draggable:true});
        console.log("sidebar");
      });

    const closeButtonHandler = () => {

        let instance = M.Sidenav.getInstance('.sidenav');
        instance.close();

    }

    return (
        <ul id="slide-out" className={`sidenav ${classes.Drawer}`} style={{backgroundImage:`url(${drawerImage})`}}>
            <li className={classes.CloseSidebarContainer}><CloseSideBarButton closeButtonHandler={closeButtonHandler}/></li>
            <li className={classes.DrawerItems}><DrawerItem link="/menu">Menu Management</DrawerItem></li>
            <li className={classes.DrawerItems}><DrawerItem link="/delivery">Delivery Location Management</DrawerItem></li>
            <li className={classes.DrawerItems}><DrawerItem link="/handling">Order & Delivery Handling</DrawerItem></li>
        </ul>
    )

}

export default Drawer;