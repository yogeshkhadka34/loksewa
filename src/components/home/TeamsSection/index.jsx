import TeamPicture from "@/components/common/cards/TeamPicture";
import React from "react";
import Styles from "./teams.module.css";
import team1 from "@/assets/mock/team1.png";
import team2 from "@/assets/mock/team2.png";
import team3 from "@/assets/mock/team3.png";
import team4 from "@/assets/mock/team4.png";
import ButtonLink from "@/components/common/ButtonLink";
import { constants } from "@/constants/Strings";
import Container from "@/components/common/Container";

const TeamsSection = () => {
  return (
    <div className={Styles["teams-container"]}>
      <Container>
        {/* Teams text */}
        <div className={Styles["teams-text"]}>
          <h5>{constants.teams.title}</h5>
          <p className={Styles["teams-content"]}>
            {constants.teams.description}
          </p>
        </div>
        <div className={Styles["teams-image"]}>
          <TeamPicture imgUrl={team1} title="Julia Sweet"></TeamPicture>
          <TeamPicture imgUrl={team2} title="Caitlin Snow"></TeamPicture>
          <TeamPicture imgUrl={team3} title="Scarlet Witch"></TeamPicture>
          <TeamPicture imgUrl={team4} title="Black Widow"></TeamPicture>
        </div>

        <div className={Styles["button"]}>
          <ButtonLink variant="transparent" href="/">
            Learn More
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
};

export default TeamsSection;
