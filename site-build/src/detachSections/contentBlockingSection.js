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
import detachStatusIndicator from "../images/detachStatusIndicator.png";

const ContentBlockingSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);
  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = isDesktop ? 0.3 * wHeight : 0.15 * wHeight;

  const styles = {};

  return (
    <div
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
        className={"window"}
        style={{
          display: "block",
          position: "relative",
          width: cWidth,
          height: frameHeight,
        }}
      >
        <PortfolioFrame
          frameHeight={frameHeight}
          borderWidth={5}
          frameWidth={cWidth}
          frameSize={20}
        ></PortfolioFrame>
        <img
          src={detachStatusIndicator}
          style={{
            maxHeight: "71%",
            maxWidth: "60%",
            width: "auto",
            height: "auto",
            position: "absolute",
            left: 0,
            right: 0,
            // top: 0,
            bottom: 25,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></img>
      </div>

      <div
        className={"solidTile"}
        style={{
          fontFamily: standardFontFam(),
          fontSize: standardFontSize(wWidth),
          color: colors.deepBlue,
          width: cWidth,
          paddingTop: 69,
        }}
      >
        Apple APIs do not support content-blocking within apps. To get around
        this, Detach creates a local proxy on the user’s phone. After Detach
        connects to this proxy as an external VPN, the proxy prohibits outgoing
        connections to user’s selected apps.
      </div>
    </div>
  );
};

ContentBlockingSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default ContentBlockingSection;
