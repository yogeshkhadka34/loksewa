import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Container from "@/components/common/Container";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TeamsSection from "@/components/home/TeamsSection";
import CTA from "@/components/home/CTA/CTA";

export default function HomePage() {
  return (
    <Layout>
      {/* Head Section for title and metatags */}
      <Head>
        <title>Home page</title>
      </Head>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <FeaturesSection></FeaturesSection>
      <TeamsSection></TeamsSection>
      <CTA />
    </Layout>
  );
}
