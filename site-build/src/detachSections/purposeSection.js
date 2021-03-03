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

const PurposeSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);
  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = 0.3 * wHeight;

  return (
    <div
      style={{
        position: "relative",
        width: props.wWidth,
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
        paddingTop: isDesktop ? (wHeight - frameHeight) / 2 : 0.25 * wHeight,
        paddingBottom: isDesktop ? (wHeight - frameHeight) / 2 : 0.25 * wHeight,
      }}
    >
      <div
        className={"solidTile"}
        style={
          isDesktop
            ? {
                display: "inline-block",
                // height: frameHeight,
                width: 0.45 * cWidth,
                paddingRight: 0.1 * cWidth,
                verticalAlign: "middle",
                fontFamily: standardFontFam(),
                fontSize: standardFontSize(wWidth),
                color: colors.deepBlue,
              }
            : {
                display: "block",
                width: cWidth,
                paddingBottom: 40,
                fontFamily: standardFontFam(),
                fontSize: standardFontSize(wWidth),
                color: colors.deepBlue,
              }
        }
      >
        The purpose of Detach is to minimize the time users spend on thier
        phone. Users set a time for which they want to block distractions,
        select distracting apps to block, and start sessions.
      </div>
      <div
        className={"window"}
        style={
          isDesktop
            ? {
                display: "inline-block",
                height: frameHeight,
                width: 0.45 * cWidth,
                position: "relative",
                verticalAlign: "middle",
              }
            : {
                display: "block",
                position: "relative",
                width: cWidth,
                height: frameHeight,
              }
        }
      >
        <PortfolioFrame
          frameHeight={frameHeight}
          borderWidth={4}
          frameWidth={isDesktop ? 0.45 * cWidth : cWidth}
          frameSize={20}
        ></PortfolioFrame>
        <img
          src={detachTimer1}
          style={{
            maxHeight: "70%",
            maxWidth: "70%",
            width: "auto",
            height: "auto",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
          }}
        ></img>
      </div>
    </div>
  );
};

PurposeSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default PurposeSection;
