import Image from "next/image";
import React from "react";
import ServiceStyles from "./service.module.css";

const ServiceCard = (props) => {
  return (
    <div className={ServiceStyles["service-card"]}>
      <Image src={props.imgUrl} width={84} height={81} alt="Service Feature" />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <span className={ServiceStyles["decoration"]}></span>
    </div>
  );
};

export default ServiceCard;
