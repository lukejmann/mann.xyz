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
import appStore from "../images/appStore.svg";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";

const EndLinksSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);

  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = 0.3 * wHeight;

  const styles = {
    findOnAppStoreDesc: {
      fontSize: standardFontSize(wWidth),
      color: colors.deepBlue,
      fontFamily: standardFontFam(),
      width: cWidth,
      position: "relative",
      textAlign: "center",
      marginBottom: 50,
    },
    bottomNavLinks: {
      width: cWidth,
      position: "relative",
      marginTop: 40,
    },
  };

  return (
    <div
      // className={"solidTile"}
      style={{
        position: "relative",
        width: cWidth,
        // height: wHeight * (2 / 3),
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
        height: 500,
      }}
    >
      <div style={styles.findOnAppStoreDesc}>
        Detach can be found on the iOS App Store.
      </div>
      <a>
        <img
          src={appStore}
          style={{
            // maxHeight: "70%",
            maxWidth: 0.25 * cWidth,
            width: "auto",
            height: "auto",
            position: "absolute",
            left: 0,
            right: 0,
            // top: 0,
            // bottom: 0,
            margin: "auto",
          }}
        ></img>
      </a>
      <div style={{ position: "absolute", bottom: 200 }}>
        <div style={styles.bottomNavLinks}>
          <a
            href="/"
            style={{
              position: "absolute",
              left: 0,
              color: colors.deepBlue,
            }}
          >
            <img
              src={leftArrow}
              style={{
                display: "inline-block",
                height: 35,
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
        </div>
        <div style={styles.bottomNavLinks}>
          <a
            href="/ai-art"
            style={{
              position: "absolute",
              right: 0,
              // height: 45,
              color: colors.deepBlue,
            }}
          >
            <div
              style={{
                color: "black",
                display: "inline-block",
                marginLeft: 32,
                fontSize: standardFontSize(wWidth) * 1.4,
                letterSpacing: -1.37,
                fontFamily: "Inter-Semibold",
                // height: 35,
                verticalAlign: "middle",
                marginRight: 25,
              }}
            >
              AI Art
            </div>
            <img
              src={rightArrow}
              style={{
                display: "inline-block",
                height: 35,
                verticalAlign: "middle",
              }}
            ></img>
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

EndLinksSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default EndLinksSection;
