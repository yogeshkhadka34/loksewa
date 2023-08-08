import React from "react";
import Styles from "./cta.module.css";
import Social from "@/assets/mock/icon/social.png";
import Image from "next/image";
import { constants } from "@/constants/Strings";
import Container from "@/components/common/Container";

export default function CTA() {
  return (
    <div className={Styles["cta-full"]}>
      <Container>
        <div className={Styles["cta-container"]}>
          <h4 className={Styles["cta"]}>{constants.cta}</h4>
          <div className={Styles["social-icons"]}>
            <Image
              src={Social}
              alt="social image"
              width={170}
              height={35}
            ></Image>
          </div>
        </div>
      </Container>
    </div>
  );
}
