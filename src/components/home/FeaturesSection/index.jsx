import ServiceCard from "@/components/common/cards/ServiceCard";
import React from "react";
import Styles from "./feature.module.css";
import ServiceImage from "@/assets/mock/service-feature.png";
import Image from "next/image";
import FeaturesImage from "@/assets/mock/featuresimage.png";
import { constants } from "@/constants/Strings";
import Container from "@/components/common/Container";

const FeaturesSection = () => {
  return (
    <div className={Styles["features-container"]}>
      <Container>
        {/* Features text */}
        <div className={Styles["features-text"]}>
          <h5>{constants.features.title}</h5>
          <p className={Styles["features-content"]}>
            {constants.features.description}
          </p>
        </div>

        {/* Features cards and side image */}
        <div className={Styles["features-bottom"]}>
          {/* Cards section */}
          <div className={Styles["features-card"]}>
            <ServiceCard
              imgUrl={ServiceImage}
              title="All in Three"
              content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
            />
            <ServiceCard
              imgUrl={ServiceImage}
              title="All in One"
              content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
            />

            <ServiceCard
              imgUrl={ServiceImage}
              title="All in One"
              content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
            />
            <ServiceCard
              imgUrl={ServiceImage}
              title="All in One"
              content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
            />
          </div>
        </div>

        {/* Features Image on the right side */}
        {/* <div className={Styles["features-image"]}>
          <Image
            src={FeaturesImage}
            alt="Loksewa Features Image"
            width={603}
            height={653}
          ></Image>
        </div> */}
      </Container>
    </div>
  );
};

export default FeaturesSection;
