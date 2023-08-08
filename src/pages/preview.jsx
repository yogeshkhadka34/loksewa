import React from "react";
import Button from "@/components/common/Button";
import ServiceCard from "@/components/common/cards/ServiceCard";
import Layout from "@/components/Layout";
import Head from "next/head";
import ServiceImage from "@/assets/mock/service-feature.png";
import VideosIcon from "@/assets/mock/Vectorvideos.png";
import McqIcon from "@/assets/mock/Vectormcqs.png";
import StudentIcon from "@/assets/mock/Vectorstudents.png";
import StrikeIcon from "@/assets/mock/Vectorstrike.png";
import Container from "@/components/common/Container";
import { HeroSection } from "@/components/home/HeroSection";
import ButtonLink from "@/components/common/ButtonLink";
import StatsCard from "@/components/common/cards/StatsCard";
import ContainerFluid from "@/components/common/ContainerFluid";

const Preview = () => {
  return (
    <Layout>
      <Head>
        <title>home page</title>
      </Head>

      {/* <HeroSection /> */}
      <ContainerFluid>
        <h1>Yogesh</h1>
      </ContainerFluid>

      <Container>
        <StatsCard
          imgUrl={VideosIcon}
          number="1000+"
          title="Videos"
        ></StatsCard>
      </Container>
      <ButtonLink className="navlink" href="/about">
        About
      </ButtonLink>

      {/* <Button variant="primary" onClick={() => alert("hello")}>
        Submit
      </Button>
      <Button variant="secondary" disabled>
        Submit
      </Button>
      <ButtonLink variant="primary" href="/about">
        go to abput
      </ButtonLink>
      <hr />

      <ServiceCard
        imgUrl={ServiceImage}
        title="All in One"
        content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
      />
      <ServiceCard
        imgUrl={ServiceImage}
        title="All in Two"
        content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
      />
      <ServiceCard
        imgUrl={ServiceImage}
        title="All in Three"
        content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
      />
      <Container>
        <ServiceCard
          imgUrl={ServiceImage}
          title="All in Three"
          content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
        />
        <ServiceCard
          imgUrl={ServiceImage}
          title="All in Three"
          content="Everything you need to be prepared to crack your public service exam arranged and manged at a single place."
        />
      </Container> */}
    </Layout>
  );
};

export default Preview;
