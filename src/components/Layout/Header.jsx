import React, { useState } from "react";
import Container from "../common/Container";
import Styles from "./header.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ButtonLink from "../common/ButtonLink";
import Image from "next/image";
import Logo from "@/assets/mock/logologo.png";
import headerOptions from "@/constants/headerOptions";

const Menu = () => {
  return (
    // Setting up navbar links as components
    <>
      {headerOptions.map((item) => (
        <ButtonLink variant="navlink" href={item.url} key={item.label}>
          {item.label}
        </ButtonLink>
      ))}
    </>
  );
};

const SignButtons = () => {
  return (
    // Setting up sign up and login buttons as components
    <>
      <ButtonLink variant="navlink" href="/">
        Login
      </ButtonLink>
      <ButtonLink variant="secondary" href="/">
        Sign Up
      </ButtonLink>
    </>
  );
};

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={Styles["navbar-container"]}>
      <Container>
        <div className={Styles.header}>
          {/* Company Logo */}
          <div className={Styles.logo}>
            <Image src={Logo} alt="Loksewa Smart Study logo"></Image>
          </div>

          {/* Navbar links */}
          <div className={Styles["navbar-links-container"]}>
            <Menu></Menu>
          </div>

          {/* Navbar Login and Sign up buttons */}
          <div className={Styles["navbar-sign"]}>
            <SignButtons></SignButtons>
          </div>

          {/* Setting up navigation bar for Mobile Menu */}
          <div className={Styles["mobile_menu"]}>
            {/* Mobile menu toggling logic */}
            {mobileMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setMobileMenu(false)}
              ></RiCloseLine>
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setMobileMenu(true)}
              ></RiMenu3Line>
            )}

            {/* Displaying navbar links and sign in buttons in dropdown */}
            {mobileMenu && (
              <div className={Styles["mobile_menu-container"]}>
                <div className={Styles["mobile_menu-container-links"]}>
                  <Menu></Menu>
                </div>
                <div className={Styles["mobile_menu-container-sign"]}>
                  <SignButtons></SignButtons>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
