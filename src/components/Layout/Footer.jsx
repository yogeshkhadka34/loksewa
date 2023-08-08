import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import Logo from "@/assets/mock/Logologo.png";
import headerOptions from "@/constants/headerOptions";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={Styles["footer-full"]}>
      <Container>
        <div className={Styles["footer-container"]}>
          {/* Logo */}
          <div className={Styles.logo}>
            <Image src={Logo} alt="Loksewa Smart Study logo"></Image>
          </div>
          {/* Links */}
          {/* <div className={Styles["footer-links"]}>
            {headerOptions.map((item) => (
              <ul key={item.label}>
                <li>{item.label}</li>
              </ul>
            ))}
          </div> */}
          {/* Copyright */}
          <div className={Styles["copyright"]}>
            <p>Copyright &copy; Loksewa Smart Study</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
