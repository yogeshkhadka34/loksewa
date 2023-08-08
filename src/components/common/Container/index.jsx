import React from "react";
import Styles from "./container.module.css";

const Container = (props) => {
  return (
    <div className={`${Styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
