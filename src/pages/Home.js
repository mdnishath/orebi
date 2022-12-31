import React from "react";
import Adds from "../components/layout/Adds";
import AditionalInfo from "../components/layout/AditionalInfo";
import Baner from "../components/layout/Baner";
import Bestseller from "../components/layout/Bestseller";
import MiddleAdd from "../components/layout/MiddleAdd";
import Newarrivals from "../components/layout/Newarrivals";
import SpecialOffers from "../components/layout/SpecialOffers";

const Home = () => {
  return (
    <>
      <Baner />
      <AditionalInfo />
      <Adds />
      <Newarrivals />
      <Bestseller />
      <MiddleAdd />
      <SpecialOffers />
    </>
  );
};

export default Home;
