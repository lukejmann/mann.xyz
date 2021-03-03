import PropTypes from "prop-types";
import React, { useState } from "react";
import colors from "../util/colors";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const NavLinks = (props) => {
  const textHeight = () => props.windowWidth * 0.1;

  const styles = {
    navLink: {
      pointerEvent: "auto",
      fontFamily: "SF-Black",
      fontSize: `${textHeight()}px`,
      lineHeight: `${textHeight() * 0.72}px`,
      textAlign: "right",
      color: "white",
      textDecoration: "none",
      letterSpacing: -4,
      display: "block",
    },
  };

  return (
    <Container
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
      }}
    >
      <Row>
        <a
          className={"navlink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "about" ? "66%" : "44%",
          }}
          onClick={(event) => {
            event.preventDefault();
            props.onPressAbout();
          }}
        >
          ABOUT
        </a>
      </Row>
      <Row>
        <a
          // href="/"
          className={"navlink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "portfolio" ? "66%" : "44%",
          }}
          onClick={(event) => {
            event.preventDefault();
            props.onPressPortfolio();
          }}
        >
          PORTFOLIO
        </a>
      </Row>
      <Row>
        <a
          // href="/"
          className={"navlink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "resume" ? "66%" : "44%",
          }}
          onClick={(event) => {
            event.preventDefault();
            // props.onPressResume();
            props.onPressResume();
          }}
        >
          RESUME
        </a>
      </Row>
      <Row>
        <a
          // href="/"
          className={"navlink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "writings" ? "66%" : "44%",
          }}
          onClick={(event) => {
            event.preventDefault();
            props.onPressWritings();
          }}
        >
          WRITINGS
        </a>
      </Row>
      {/* <Row>
        <a
          href="/"
          className={"navLink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "resume" ? "66%" : "44%",
          }}
          onClick={(event) => {
            event.preventDefault();
            props.onPressResume();
          }}
        >
          RESUME
        </a>
      </Row>
      <Row>
        <a
          href="/"
          className={"navLink"}
          style={{
            ...styles.navLink,
            opacity: props.selectedPage == "writings" ? "66%" : "44%",
          }}
        >
          WRITINGS
        </a>
      </Row> */}
    </Container>
  );
};

NavLinks.propTypes = {
  windowHeight: Number,
  windowWidth: Number,
  onPressAbout: () => {},
  onPressPortfolio: () => {},
  onPressResume: () => {},
  selectedPage: PropTypes.string,
  onPressWritings: () => {},
};

export default NavLinks;
