import PropTypes from "prop-types";
import React, { useState } from "react";
import colors from "../util/colors";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import orb from "../images/orb.png";
import {
  calcBoxShadow,
  mouseXOffset,
  mouseYOffset,
} from "../util/depthEffects";

const PortfolioFrame = (props) => {
  const b = (color) => {
    return `${props.borderWidth}px solid ${color}`;
  };
  const border = `${props.borderWidth}px solid ${colors.sexyBlue}`;
  // console.log(`BORDER!: ${border}`);
  const bgColor = "rgba(0, 0, 0, 0.4)";
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: props.frameHeight,
        width: props.frameWidth,
        // border: border,
      }}
    >
      <div
        className={"windowFrame"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: props.frameWidth,
          height: props.frameSize,
          backgroundColor: bgColor,
        }}
      ></div>
      <div
        className={"windowFrame"}
        style={{
          position: "absolute",
          top: props.frameSize,
          left: 0,
          width: props.frameSize,
          height: props.frameHeight - props.frameSize * 2,
          backgroundColor: bgColor,
        }}
      ></div>
      <div
        className={"windowFrame"}
        style={{
          position: "absolute",
          top: props.frameSize,
          right: 0,
          width: props.frameSize,
          height: props.frameHeight - props.frameSize * 2,
          backgroundColor: bgColor,
        }}
      ></div>
      <div
        className={"windowFrame"}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: props.frameWidth,
          height: props.frameSize,
          backgroundColor: bgColor,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: props.frameHeight - props.borderWidth * 2,
          width: props.frameWidth - props.borderWidth * 2,
          border: border,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: props.frameSize,
          left: props.frameSize,
          height:
            props.frameHeight - props.frameSize * 2 - props.borderWidth * 2,
          width: props.frameWidth - props.frameSize * 2 - props.borderWidth * 2,
          border: border,
        }}
      ></div>
      {/* <div
        className={"fortyFiveDegSkew"}
        style={{
          top: 50,
          left: 50,
          // background: "green",
          width: 0,
          height: 0,
          border: `${props.borderWidth}px solid ${colors.emerald}`,

          // width: 50,
        }}
      ></div> */}

      <div
        className={"skewOne"}
        style={{
          position: "absolute",
          left: 0.5 * props.frameSize,
          top: 0,
          width: props.frameWidth - 2 * props.frameSize,
          height: props.frameSize + props.borderWidth,
          borderLeft: border,
        }}
      ></div>
      <div
        className={"skewTwo"}
        style={{
          position: "absolute",
          right: 0.5 * props.frameSize,
          bottom: 0,
          width: props.frameWidth - 2 * props.frameSize,
          height: props.frameSize + props.borderWidth,
          borderRight: border,
        }}
      ></div>
      <div
        className={"skewThree"}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0.5 * props.frameSize,
          width: props.frameSize + props.borderWidth,
          height: props.frameHeight - 2 * props.frameSize,
          borderBottom: border,
        }}
      ></div>
      <div
        className={"skewFour"}
        style={{
          position: "absolute",
          right: 0,
          top: 0.5 * props.frameSize,
          width: props.frameSize,
          height: props.frameHeight - 2 * props.frameSize,
          borderTop: border,
        }}
      ></div>
    </div>
  );
};

PortfolioFrame.propTypes = {
  frameWidth: Number,
  frameHeight: Number,
  frameSize: Number,
  borderWidth: Number,
  style: PropTypes.object,
};

export default PortfolioFrame;
