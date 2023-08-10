import React, { Fragment } from "react";
import "./HeroSection.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="hero_container">
        <h2>Your Team needs you!</h2>
        <Link to="/">
          <Button>Become a member</Button>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HeroSection;
