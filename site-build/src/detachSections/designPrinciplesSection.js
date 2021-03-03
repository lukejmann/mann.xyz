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

const DesignPrinciplesSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);
  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = 0.3 * wHeight;

  const styles = {
    designPrincipleHeader: {
      fontFamily: standardFontFam(),
      fontSize: standardFontSize(wWidth) * 2.5,
      color: colors.deepBlue,
      display: "inline-block",
      width: 0.35 * cWidth,
      verticalAlign: "middle",
    },
    designPrincipleDesc: {
      fontFamily: standardFontFam(),
      fontSize: standardFontSize(wWidth),
      color: colors.deepBlue,
      display: "inline-block",
      width: 0.65 * cWidth,
      verticalAlign: "middle",
    },
    designPrincipleContainer: {
      marginTop: 40,
      width: cWidth,
      position: "relative",
    },
    designPrincipleTitle: {
      fontFamily: standardFontFam(),
      fontSize: standardFontSize(wWidth) * 2.2,
      color: colors.deepBlue,
      fontSize: 70,
      letterSpacing: -1.75,
      textDecoration: "underline",
    },
  };

  return (
    <div
      // className={"solidTile"}
      style={{
        position: "relative",
        width: props.wWidth,
        height: props.wHeight * (2 / 3),
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
      }}
    >
      <div
      // style={{
      //   marginTop: 0.3 * wHeight,
      // }}
      >
        <div style={styles.designPrincipleTitle}>Guiding Design Principles</div>
        <div style={styles.designPrincipleContainer}>
          <div style={styles.designPrincipleHeader}>Speed</div>
          <div style={styles.designPrincipleDesc}>
            Users should be in-and-out of Detach as quickly as possible. No
            operation should take more than seconds.
          </div>
        </div>
        <div style={styles.designPrincipleContainer}>
          <div style={styles.designPrincipleHeader}>Ease</div>
          <div style={styles.designPrincipleDesc}>
            There must be no learning-curve to the app.
          </div>
        </div>
        <div style={styles.designPrincipleContainer}>
          <div style={styles.designPrincipleHeader}>Privacy</div>
          <div style={styles.designPrincipleDesc}>
            Detach must not only be built with a focus on user privacy, but
            convey to the user that thier privacy is protected.
          </div>
        </div>
      </div>
    </div>
  );
};

DesignPrinciplesSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default DesignPrinciplesSection;
