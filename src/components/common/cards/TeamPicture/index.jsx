import Image from "next/image";
import React from "react";
import Styles from "./team.module.css";

const TeamPicture = (props) => {
  return (
    <div className={Styles["team"]}>
      <Image
        src={props.imgUrl}
        alt="Teams Image"
        width={100}
        height={100}
      ></Image>
      <p>{props.title}</p>
    </div>
  );
};

export default TeamPicture;
