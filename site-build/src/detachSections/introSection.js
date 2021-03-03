import PropTypes from "prop-types";
import React, { useState } from "react";
import colors from "../util/colors";
import s from "../util/spacing-const";
import justGrid from "../images/justGrid.png";
import justDetachPhone from "../images/justDetachPhone.png";
import leftArrow from "../images/leftArrow.svg";
import { hPaddingCalc, regularText, standardFontSize } from "./detachStyles";

const BlurredIntroSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  return (
    <div
      className={"totalBlur"}
      style={{
        position: "relative",
        width: props.wWidth,
        height: props.wHeight,
      }}
    >
      {isDesktop && (
        <div
          style={{
            // ...regularText(),
            fontFamily: "Hndrxx-Medium, Helvetica",
            fontSize: standardFontSize(wWidth),
            position: "absolute",
            // top: 0.4 * props.wHeight,
            left: 0.45 * props.wWidth,
            right: hPaddingCalc(wWidth),
            bottom: 0.45 * props.wHeight,
            color: colors.deepBlue,
          }}
        >
          Detach is an iOS App for time management. Utilizing a proprietary API,
          the app filters network request from distracting apps. 👇
        </div>
      )}
      <img
        src={justGrid}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: wWidth,
          height: 0.4 * wHeight,
        }}
      ></img>
      <img
        src={justDetachPhone}
        style={{
          position: "absolute",
          left: 0 ? wWidth < 400 : -50,
          bottom: 0.1 * wHeight,
          height: 0.5 * wHeight,
        }}
      ></img>
      <div
        style={{
          position: "absolute",
          top: 0.1 * wHeight,
          left: hPaddingCalc(wWidth) * 0.7,
          // height: 45,
        }}
      >
        <a href="/">
          <img
            src={leftArrow}
            style={{
              display: "inline-block",
              height: 35,
              color: colors.offBlack,
              verticalAlign: "middle",
            }}
          ></img>
          <div
            style={{
              color: "black",
              display: "inline-block",
              marginLeft: 32,
              fontSize: standardFontSize(wWidth) * 1.4,
              letterSpacing: -1.37,
              fontFamily: "Inter-Semibold",
              verticalAlign: "middle",
            }}
          >
            mann.xyz
          </div>
        </a>
        <div
          style={{
            marginTop: 30,
            marginBottom: 30,
            width: 0.85 * wWidth,
            height: 10,
            background: "black",
          }}
        ></div>
        <div
          style={{
            fontSize: standardFontSize(wWidth) * (isDesktop ? 3 : 6),
            fontFamily: "Inter-Bold",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          Detach
        </div>
        <div
          style={{
            fontSize: standardFontSize(wWidth) * (isDesktop ? 1 : 2),
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <div style={{ fontFamily: "Inter-Regular", display: "inline" }}>
            An
          </div>{" "}
          <div style={{ fontFamily: "Inter-Bold", display: "inline" }}>
            iOS App
          </div>{" "}
          <div style={{ fontFamily: "Inter-Regular", display: "inline" }}>
            by Luke Mann
          </div>
        </div>
      </div>
    </div>
  );
};

BlurredIntroSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default BlurredIntroSection;
