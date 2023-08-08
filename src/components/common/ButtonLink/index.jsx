import Link from "next/link";
import React from "react";
import ButtonLinkStyles from "./button-link.module.css";

const ButtonLink = ({ variant, children, ...props }) => {
  const variantClass = () => {
    switch (variant) {
      case "primary":
        return ButtonLinkStyles["button--primary"];
      case "secondary":
        return ButtonLinkStyles["button--secondary"];
      case "navlink":
        return ButtonLinkStyles["button--navlink"];
      case "transparent":
        return ButtonLinkStyles["button--transparent"];
      default:
        return "";
    }
  };
  return (
    <Link className={`${ButtonLinkStyles.button} ${variantClass()}`} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
