import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./AboutCTF.css";

function AboutCTF() {
  return (
    <div className="aboutCTF">
      <div class="wrapper">
        <div>
          <p className="aboutCTF_paragraph">Your CTF Practice begins here!</p>
        </div>
        <div>
          <LinkContainer to="/blog">
            <button className="aboutCTF_button">Read More</button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}

export default AboutCTF;
