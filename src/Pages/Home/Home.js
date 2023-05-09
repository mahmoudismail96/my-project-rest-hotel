import React from "react";
import Typical from "../../Components/Components_home_pages/TypicalSec/Typical";
import HeroSec from "../../Components/Components_home_pages/HeroSec/HeroSec";
import Rooms from "../../Components/Components_home_pages/RoomsSec/Rooms";
import Services from "../../Components/Components_home_pages/ServicesSec/Services";

const Home = () => {
  return (
    <div className="all_home">
      <HeroSec />
      <Typical />
      <Rooms />
      <Services />
    </div>
  );
};

export default Home;
