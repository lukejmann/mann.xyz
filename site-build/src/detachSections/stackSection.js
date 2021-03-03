import PropTypes from "prop-types";
import React, { useState } from "react";
import colors from "../util/colors";
import s from "../util/spacing-const";
import {
  hPaddingCalc,
  regularText,
  standardFontSize,
  standardFontFam,
} from "./detachStyles";
import PortfolioFrame from "../components/PortfolioFrame";
import detachTimer1 from "../images/detachTimer1.png";

const StackSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);

  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = 0.3 * wHeight;

  const bulletPoint = (text) => {
    const bulletDiameter = 15;
    return (
      <div style={{ position: "relative", height: 60 }}>
        <div
          style={{
            position: "absolute",
            width: bulletDiameter,
            height: bulletDiameter,
            left: 20,
            top: (60 - bulletDiameter) / 2,
            borderRadius: 0.5 * bulletDiameter,
            backgroundColor: colors.deepBlue,
          }}
        ></div>
        <div
          style={{
            color: colors.deepBlue,
            fontSize: standardFontSize(wWidth),
            fontFamily: standardFontFam(),
            position: "absolute",
            left: 20 + 15 + 40,
            top: 10,
            bottom: 10,
          }}
        >
          {text}
        </div>
      </div>
    );
  };

  const styles = {
    stackHeader: {
      textDecoration: "underline",
      fontFamily: standardFontFam(),
      fontSize: standardFontSize(wWidth) * 1.5,
      color: colors.deepBlue,
    },
  };

  return (
    <div
      // className={"solidTile"}
      style={{
        position: "relative",
        width: cWidth,
        // height: wHeight * (1 / 2),
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
        paddingBottom: 200,
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: isDesktop ? 0.4 * cWidth : cWidth,
        }}
      >
        <div style={styles.stackHeader}>Frontend Stack</div>
        <div style={{ height: 10 }}></div>
        {bulletPoint("Swift 5")}
        {bulletPoint("SwiftUI")}
        {bulletPoint("Objective-C")}
      </div>
      <div
        style={{
          display: "inline-block",
          width: isDesktop ? 0.4 * cWidth : cWidth,
          marginLeft: isDesktop ? 0.1 * cWidth : 0,
        }}
      >
        <div style={styles.stackHeader}>Backend Stack</div>
        <div style={{ height: 10 }}></div>
        {bulletPoint("Golang")}
        {bulletPoint("MongoDB")}
        {bulletPoint("Python")}
        {bulletPoint("Docker")}
      </div>
    </div>
  );
};

StackSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default StackSection;
