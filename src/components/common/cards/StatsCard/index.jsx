import Image from "next/image";
import React from "react";
import Styles from "./stats.module.css";

const StatsCard = (props) => {
  return (
    <div className={Styles["stats-card"]}>
      <Image
        src={props.imgUrl}
        width={40}
        height={40}
        alt="Stats Icons"
      ></Image>
      <h1 className={Styles["stats-number"]}>{props.number}</h1>
      <p className={Styles["stats-title"]}>{props.title}</p>
    </div>
  );
};

export default StatsCard;
