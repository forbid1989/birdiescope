import React from "react";

import classes from "./DrawerItem.module.css";
import { NavLink } from "react-router-dom";

const DrawerItem = (props) => (
  <li className={classes.DrawerItem}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default DrawerItem;
