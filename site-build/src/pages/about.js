import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import colors from "../util/colors";
import headshot from "../images/headshot.png";
import s from "../util/spacing-const";

const About = (props) => {
  const descriptionWidth = (aboutWidth) => {
    if (aboutWidth > s.mobileMaxWidth) {
      return aboutWidth * 0.75;
    }
    return aboutWidth;
  };

  const dWidth = descriptionWidth(props.aboutWindowWidth);
  const spacerWidth = props.aboutWindowWidth < s.mobileMaxWidth ? 0 : 60;
  const imgWidth = props.aboutWindowWidth - dWidth - spacerWidth;

  const styles = {
    nameText: {
      display: "block",
      fontFamily: "SF-Bold",
      color: colors.whiteSand,
      fontSize: 70,
      letterSpacing: -2,
      textShadow: `${5 - 0.0005 * props.mousePosX}px ${
        10 - 0.001 * props.mousePosY
      }px 10px rgba(6,40,20,0.2)`,
    },
    ddText: {
      display: "block",
      fontFamily: "SF-Medium",
      color: colors.whiteSand,
      fontSize: 45,
      letterSpacing: -2,
      textShadow: `${5 - 0.0005 * props.mousePosX}px ${
        10 - 0.001 * props.mousePosY
      }px 10px rgba(6,40,20,0.2)`,
    },
    descBox: {
      display: "inline-block",
      backgroundColor: colors.whiteSand,
      fontFamily: "SF-Medium",
      fontSize: 30,
      color: colors.forestGreen,
      width: dWidth,
      boxShadow: `20px 30px 20px 0px rgba(6, 40, 20, 0.2)`,
    },
    descText: {
      paddingLeft: 20,
      paddingRight: props.aboutWindowWidth * 0.2,
      paddingTop: 60,
      paddingBottom: 60,
    },
    contactBox: {
      display: "inline-block",
      backgroundColor: colors.whiteSand,
      fontFamily: "SF-Medium",
      fontSize: 30,
      color: colors.forestGreen,
      width: props.aboutWindowWidth > 628 ? 628 : props.aboutWindowWidth,
      marginTop: 45,
    },
    contactText: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
      paddingBottom: 30,
    },
    headshot: {
      verticalAlign: "top",
      height: imgWidth,
      boxShadow: `20px 30px 20px 0px rgba(6, 40, 20, 0.2)`,
    },
  };

  const boldText = (text) => {
    return (
      <div
        style={{
          fontFamily: "SF-Bold",
          display: "inline",
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div style={props.style}>
      <div style={styles.nameText}>Luke Mann</div>
      <div style={styles.ddText}>
        {boldText(" lukemann ")}
        [at]
        {boldText(" stanford ")}
        [dot]
        {boldText(" edu")}
      </div>
      <div
        style={{
          marginTop: 30,
          verticalAlign: "top",
        }}
      >
        <div style={styles.descBox}>
          <div style={styles.descText}>
            I'm Luke, a first-year student at Stanford studying{" "}
            {boldText("Product Design")}. I have a deep interest in{" "}
            {boldText("aesthetics, clothing, and UI/UX experiences")}.
            <br />
            <br />
            My design philosophy is heavily based on intuition. I believe there
            are fundamental aspects of aesthetic appreciation that all humans
            share and those aspects can only be implemented by turning inwards.
            The rest is creativity and experience.
            <br />
            <br />
            Find me on
            <span>&nbsp;</span>
            <a style={{ textDecoration: "underline" }}>Twitter</a>
            <span>&nbsp;</span>
            or <a style={{ textDecoration: "underline" }}>send me an email</a>
          </div>
        </div>
        <div
          style={{
            pointerEvents: "none",
            width: spacerWidth,
            display: "inline-block",
          }}
        ></div>

        {props.windowWidth > s.mobileMaxWidth && (
          <img src={headshot} id="headshot" style={styles.headshot}></img>
        )}
      </div>
    </div>
  );
};

About.propTypes = {
  aboutWindowWidth: Number,
  windowWidth: Number,
  mousePosY: Number,
  mousePosX: Number,
  style: PropTypes.object,
};

export default About;
