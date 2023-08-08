import React from "react";
import ButtonStyles from "./button.module.css";

const Button = (props) => {
  const variantClass = () => {
    switch (props.variant) {
      case "primary":
        return ButtonStyles["button--primary"];
      case "secondary":
        return ButtonStyles["button--secondary"];
      default:
        return "";
    }
  };
  return (
    <button
      className={`${ButtonStyles.button} ${variantClass()} ${
        props.disabled ? ButtonStyles["button--disabled"] : ""
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
