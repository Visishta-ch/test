import React from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const SideDrawer = (props) => (
  <div className={classes.model}>
    <div>{props.children}</div>
  </div>
);
const Model = (props) => {
  return ReactDOM.createPortal(
    <SideDrawer onClose={props.onClose}>{props.children}</SideDrawer>,
    document.getElementById("side-drawer")
  );
};

export default Model;
