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
            <li className={classes.DrawerItems}><DrawerItem link="/menu"><i className={`material-icons ${classes.DrawerItemIcons}`}>restaurant_menu</i>Manage Menu</DrawerItem></li>
            <li className={classes.DrawerItems}><DrawerItem link="/delivery"><i className={`material-icons ${classes.DrawerItemIcons}`}>place</i>Manage Delivery Location</DrawerItem></li>
            <li className={classes.DrawerItems}><DrawerItem link="/handling"><i className={`material-icons ${classes.DrawerItemIcons}`}>golf_course</i>Order & Delivery Handling</DrawerItem></li>
        </ul>
    )

}

export default Drawer;