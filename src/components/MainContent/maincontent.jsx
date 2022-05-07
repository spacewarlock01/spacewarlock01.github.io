import React from "react";
import "./maincontent.css";
// import { Container, Row, Col } from "react-bootstrap";
import AboutCTF from "../AboutCTF/AboutCTF";
import Cards from "../Cards/Cards";

function MainContent() {
  return (
    <div className="maincontent">
      <AboutCTF />
      <Cards />
    </div>
  );
}

export default MainContent;
