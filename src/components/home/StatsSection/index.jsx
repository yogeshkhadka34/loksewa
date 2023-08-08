import StatsCard from "@/components/common/cards/StatsCard";
import React from "react";
import Styles from "./stats.module.css";
import Videos from "@/assets/mock/Vectorvideos.png";
import Students from "@/assets/mock/Vectorstudents.png";
import Mcqs from "@/assets/mock/Vectormcqs.png";
import Strike from "@/assets/mock/Vectorstrike.png";
import ButtonLink from "@/components/common/ButtonLink";
import { constants } from "@/constants/Strings";
import Container from "@/components/common/Container";

const StatsSection = () => {
  return (
    <div className={Styles["stats-container"]}>
      <Container>
        {/* Text section of stats */}
        <div className={Styles["text-section"]}>
          <div className={Styles["text-section-h1"]}>
            <div>
              <p>{constants.about.title}</p>
            </div>
          </div>

          <div className={Styles["text-section-p"]}>
            {constants.about.description.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        {/* Stats card display section */}
        <div className={Styles["cards"]}>
          <StatsCard imgUrl={Videos} number="1,000+" title="Videos"></StatsCard>
          <StatsCard
            imgUrl={Students}
            number="23,500+"
            title="Students"
          ></StatsCard>
          <StatsCard imgUrl={Mcqs} number="31,000+" title="Mcqs"></StatsCard>
          <StatsCard imgUrl={Strike} number="90%+" title="Strike"></StatsCard>
        </div>

        {/* Stats section learn more button */}
        <div className={Styles["learnmore"]}>
          <ButtonLink variant="primary" href="/">
            Learn More
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
