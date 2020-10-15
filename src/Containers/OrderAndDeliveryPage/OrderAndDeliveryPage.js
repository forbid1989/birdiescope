import React from 'react';
import classes from "./OrderAndDeliveryPage.module.css";
import logo from '../../logo.svg';

const MenuPage = (props) => {

    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
            <div data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></div>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className={classes.AppLink}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
    );

}

export default MenuPage;