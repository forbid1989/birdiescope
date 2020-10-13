import React from "react";

import classes from "./DrawerItem.module.css";
import { NavLink } from "react-router-dom";

const DrawerItem = (props) => (
  <div className={classes.DrawerItem}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </div>
);

export default DrawerItem;
