import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import colors from "../util/colors";
// import blur from "../images/blur.svg";
// import "../css/global.css";
import detachCover from "../images/detachCover.png";
import artCover from "../images/artCover.png";
import floatingCover from "../images/floatingCover.png";

const Portfolio = (props) => {
  const smallModeMaxWdith = 750;
  const isSmallMode = props.portfolioWindowWidth <= smallModeMaxWdith;
  const coverPadding = !isSmallMode ? 25 : 20;
  const coverHeight = !isSmallMode ? 257 : 220;
  const textLeftMargin = coverPadding + (coverHeight - coverPadding * 2) + 30;
  const vertSpacing = 45;
  const imgHeight = !isSmallMode
    ? coverHeight - coverPadding * 2
    : 10 + (coverHeight - coverPadding * 2) / 2;
  const styles = {
    coverImg: {
      position: "absolute",
      top: coverPadding,
      left: coverPadding,
      height: imgHeight,
      width: imgHeight,

      // marginTop: 45,
    },
    projectName: {
      fontSize: !isSmallMode ? 70 : "3em",
      color: colors.yumGreen,
      position: "absolute",
      left: !isSmallMode ? textLeftMargin : imgHeight + coverPadding * 2,
      bottom: coverHeight / 2 - 10,
      top: isSmallMode ? coverPadding + 20 : "",
      fontFamily: "Hndrxx-Semibold",
    },
    subText: {
      fontSize: 30,
      color: colors.beachSand,
      position: "absolute",
      left: !isSmallMode ? textLeftMargin : coverPadding,
      top: coverHeight / 2 + (!isSmallMode ? 12 : 22),
      fontFamily: "Hndrxx-Medium",
      lineHeight: 1.1,
    },
    coverBG: {
      height: coverHeight,
      position: "relative",
      width: props.portfolioWindowWidth,
      marginTop: vertSpacing,
      cursor: "pointer",
    },
  };

  const vertOffset = (index) => {
    return index * (coverHeight + vertSpacing);
  };

  return (
    <div style={props.style}>
      <div
        style={{
          display: "block",
          fontFamily: "SF-Bold",
          color: colors.whiteSand,
          fontSize: 70,
          letterSpacing: -2,
          textShadow: `${5 - 0.0005 * props.mousePosX}px ${
            10 - 0.001 * props.mousePosY
          }px 10px rgba(6,40,20,0.2)`,
        }}
      >
        Portfolio
      </div>
      <a href="/detach">
        <div
          className={"blur"}
          style={styles.coverBG}
          // onClick={"location.href='/detach'"}
        >
          <img style={styles.coverImg} src={detachCover}></img>
          <div style={styles.projectName}>Detach</div>
          <div style={styles.subText}>
            iOS App <br />
            December 2020
          </div>
        </div>
      </a>
      <div className={"blur"} style={styles.coverBG}>
        <img style={styles.coverImg} src={artCover}></img>
        <div style={styles.projectName}>AI Art</div>
        <div style={styles.subText}>
          iOS App <br />
          March 2019
        </div>
      </div>
      <div className={"blur"} style={styles.coverBG}>
        <img style={styles.coverImg} src={floatingCover}></img>
        <div style={styles.projectName}></div>
        <div style={styles.subText}>
          Design Concept <br />
          January 2021
        </div>
      </div>

      <div style={{ height: 400 }}></div>
    </div>
  );
};

Portfolio.propTypes = {
  portfolioWindowWidth: Number,
  mousePosY: Number,
  mousePosX: Number,
  onPressDetach: () => {},
  style: PropTypes.object,
};

export default Portfolio;
