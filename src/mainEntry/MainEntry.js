import React from "react";
import { useState } from "react";
import StartupModal from '../components/UI/Modals/StartupModal'
import Toolkit from "./Toolkit";
import PortfolioSection from "./PortfolioSection";
import IntroSection from "./IntroSection";
import Footer from '../components/UI/Footer/Footer'


import "./MainEntry.css";

function MainEntry() {
  const [ modalIsVisible, setModalIsVisible ] = useState(true);
  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <div className="main-entry__wrapper">
      {!modalIsVisible ? null : <StartupModal closeModal={closeModal}/>}
        <IntroSection />
        <PortfolioSection />
        <Toolkit />
        <Footer />
      </div>
    </>
  );
}

export default MainEntry;
