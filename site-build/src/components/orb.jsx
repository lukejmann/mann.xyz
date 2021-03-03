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

const Orb = (props) => {
  const styles = {
    container: {
      // width: props.windowHeight,
      // height: props.windowHeight,
      position: "fixed",
      left: `${props.xPos - mouseXOffset(props.mousePosX, props.height)}px`,
      top: `${props.yPos - mouseXOffset(props.mousePosY, props.height)}px`,
      // overflow: 'visible'
      ...props.style,
    },
    orb: {
      width: props.diameter,
      height: props.diameter,
      boxShadow: props.shadow
        ? calcBoxShadow(
            props.diameter,
            props.diameter,
            props.height,
            props.mousePosX,
            props.mousePosY
          )
        : "",
      borderRadius: `${props.diameter / 2}px`,
    },
  };

  return (
    <div style={styles.container}>
      <img src={orb} style={styles.orb}></img>
    </div>
  );
};

Orb.propTypes = {
  xPos: Number,
  yPos: Number,
  diameter: Number,
  windowHeight: Number,
  windowWidth: Number,
  // 0.00-1.00
  height: Number,
  mousePosY: Number,
  mousePosX: Number,
  style: PropTypes.object,
};

export default Orb;
