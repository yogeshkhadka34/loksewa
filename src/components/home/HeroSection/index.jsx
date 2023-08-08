import ButtonLink from "@/components/common/ButtonLink";
import Image from "next/image";
import React from "react";
import Styles from "./hero.module.css";
import HeroImage from "@/assets/mock/heroimage.png";
import { constants } from "@/constants/Strings";
import Container from "@/components/common/Container";

const HeroSection = () => {
  return (
    <div className={Styles["heroarea-full"]}>
      <Container>
        <div className={Styles["heroarea-container"]}>
          <div className={Styles.heroarea}>
            {/* Markup for Heroarea Left Section */}
            <div className={Styles.herotext}>
              {/* Title and Description */}
              <div className={Styles["herotext-title"]}>
                <h1>{constants.title}</h1>
              </div>
              <div className={Styles["herotext-content"]}>
                <p>{constants.description}</p>
              </div>

              {/* Get Started button section */}
              <div className={Styles["get-started"]}>
                <p className={Styles["get-started-label"]}>
                  {constants.getstarted}
                </p>
                <div>
                  <ButtonLink variant="secondary" href="/">
                    Get Started
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          {/* Heroarea Image section/ Image on the right side */}
          <div className={Styles["hero-image"]}>
            <Image src={HeroImage} alt="Loksewa Image"></Image>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
