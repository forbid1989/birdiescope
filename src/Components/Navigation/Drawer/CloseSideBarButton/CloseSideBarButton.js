import React from "react";
import classes from "./CloseSideBarButton.module.css";

const CloseSideBarButton = (props) => {

    return (
        <div className={`sidenav-close ${classes.CloseSideBarButton}`}>
            <i className={`small material-icons ${classes.CloseIcon}`}>chevron_left</i>
        </div>);

}

export default CloseSideBarButton;