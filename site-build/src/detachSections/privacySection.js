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
import proxyIndicator2Img from "../images/proxyIndicator2Img.png";

const PrivacySection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);
  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = 0.3 * wHeight;

  return (
    <div
      style={{
        position: "relative",
        width: cWidth,
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
        // height: wHeight * (2 / 3),
        // paddingBottom: 200,
        // paddingTop: isDesktop ? (wHeight - frameHeight) / 2 : 0.25 * wHeight,
        paddingBottom: isDesktop ? (wHeight - frameHeight) / 2 : 0.25 * wHeight,
      }}
    >
      <div style={{ width: cWidth, display: "block" }}>
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
          Detach makes it abundantly clear to the user the status of thier proxy
          at any given time. The app will never record or store any data from
          the proxy.
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
            src={proxyIndicator2Img}
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
    </div>
  );
};

PrivacySection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default PrivacySection;
