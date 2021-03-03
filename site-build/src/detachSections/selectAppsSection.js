import PropTypes from "prop-types";
import React, { useState } from "react";
import colors from "../util/colors";
import s from "../util/spacing-const";
import detachSelectApps from "../images/detachSelectApps.png";
import {
  hPaddingCalc,
  regularText,
  standardFontSize,
  standardFontFam,
} from "./detachStyles";

const SelectAppsSection = (props) => {
  const { wWidth, wHeight } = props;
  const isDesktop = props.wWidth > s.mobileMaxWidth;
  const hPadding = hPaddingCalc(wWidth);

  const cWidth = wWidth - 2 * hPadding;
  const frameHeight = isDesktop ? 0.3 * wHeight : 0.15 * wHeight;
  // const selectAppsPhoneHeight = 0.7 * wHeight;
  const styles = {};

  return (
    <div
      style={{
        position: "relative",
        width: cWidth,
        height: wHeight,
        overflow: "hidden",
        paddingLeft: hPadding,
        paddingRight: hPadding,
      }}
    >
      <img
        style={{
          width: isDesktop ? 0.4 * cWidth : cWidth,
          display: "inline-block",
          verticalAlign: "middle",
          marginLeft: -15,
        }}
        src={detachSelectApps}
      ></img>
      <div
        style={{
          display: "inline-block",
          width: isDesktop ? 0.5 * cWidth : cWidth,
          fontFamily: standardFontFam(),
          fontSize: standardFontSize(wWidth),
          color: colors.deepBlue,
          verticalAlign: "middle",
          paddingLeft: isDesktop ? 0.1 * cWidth : 0,
          marginTop: isDesktop ? 0 : 40,
        }}
      >
        <div>
          Detach’s content-blocking proxy supports most popular apps. Blocklists
          are updated weekly to ensure reliable usage.
        </div>
        <div style={{ marginTop: isDesktop ? wHeight * 0.1 : 40 }}>
          Whereas most content-blockers on the App Store can only block Safari
          websites, Detach is able to block distractions within apps themselves.
        </div>
      </div>
    </div>
  );
};

SelectAppsSection.propTypes = {
  wWidth: Number,
  wHeight: Number,
};

export default SelectAppsSection;
