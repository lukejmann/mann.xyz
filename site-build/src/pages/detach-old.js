import React, { Component } from "react";
import s from "../util/spacing-const";
import colors from "../util/colors";
import NavLinks from "../components/navLinks";
import Orb from "../components/orb";
import { mouseXOffset, mouseYOffset } from "../util/depthEffects";
import About from "./about";
import Portfolio from "./portfolio";
import blurredBG from "../images/blurredBG.png";
import background from "../images/background.png";
import downloadIcon from "../images/downloadIcon.png";
import gridAndPhone from "../images/gridAndPhone.png";
import detachSelectApps from "../images/detachSelectApps.png";
import detachTimer1 from "../images/detachTimer1.png";
import detachStatusIndicator from "../images/detachStatusIndicator.png";
import proxyIndicator2Img from "../images/proxyIndicator2Img.png";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";
import justGrid from "../images/justGrid.png";
import justDetachPhone from "../images/justDetachPhone.png";
import appStore from "../images/appStore.svg";
import FitText from "@kennethormandy/react-fittext";

import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Waypoint } from "react-waypoint";
import PortfolioFrame from "../components/PortfolioFrame";

class PortfolioTemplate extends Component {
  scrollableContainer = null;
  scroller = scroller;
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    document.addEventListener("mousemove", (e) => {
      this.setState({ mousePos: { x: e.pageX, y: e.pageY } });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  updateDimensions() {
    const windowWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const windowHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth, windowHeight } = this.state;
    console.log(`windowWidth : ${windowWidth}`);
    const isDesktop = windowWidth > 500;

    const bgWidth = 1440;
    const bgHeight = 1024;

    const hPadding = isDesktop ? 0.1833 * windowWidth : 0.05 * windowWidth;
    const vSpacing = 0.4 * windowHeight;
    const sWidth = windowWidth - 2 * hPadding;

    const selectAppsPhoneHeight = 0.9 * windowHeight;

    // const proxyIndicator2FrameHeight = 0.3 * windowHeight;
    const proxyIndicator2FrameHeight = 390;

    const scrollPadding = {
      paddingRight: hPadding,
      paddingLeft: hPadding,
    };

    const vSpacer = (height) => {
      return (
        <div
          style={{ width: windowWidth, height: height }}
          className={"solidTile"}
        ></div>
      );
    };

    const regularText = {
      fontFamily: "Hndrxx-Medium",
      fontSize: 0.02 * windowWidth,
      color: colors.deepBlue,
      lineHeight: 1.2,
      letterSpacing: -1,
    };

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
              ...regularText,
              fontFamily: "Hndrxx-Medium",
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
      bgContainer: {
        width: this.state.windowWidth,
        height: this.state.windowHeight,
        position: "fixed",
      },
      background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: windowWidth > bgWidth ? windowWidth : bgWidth,
        height: windowHeight > bgHeight ? windowHeight : bgHeight,
      },
      sideBlur: {
        position: "fixed",
        top: 0,
        height: windowHeight,
        width: 0.048 * windowWidth,
      },
      scrollContainer: {
        position: "relative",
        width: windowWidth,
      },
      navText: {
        color: colors.deepBlue,
        display: "inline-block",
        marginLeft: 32,
        fontSize: 0.02 * windowWidth,
        letterSpacing: -1.37,
        fontFamily: "Inter-Semibold",
        height: 35,
        verticalAlign: "center",
      },
      navLine: {
        width: 1.1 * sWidth,
        height: 8,
        background: "black",
        marginTop: 33.5,
      },
      timer1Img: {
        maxHeight: "50%",
        maxWidth: "70%",
        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
      },
      desc1: {
        ...regularText,
        position: "absolute",
        top: 100,
        left: hPadding + sWidth / 2,
        width: sWidth * 0.4,
      },
      timer1Desc: {
        position: "absolute",
        left: 0,
        top: 0,
        ...regularText,
        width: 0.45 * sWidth,
        color: colors.deepBlue,
        height: 360,
        paddingLeft: hPadding,
        paddingRight: 0.1 * sWidth,
      },
      frameContainer1: {
        position: "absolute",
        top: 0,
        left: hPadding + 0.55 * sWidth,
        width: 0.45 * sWidth,
        overflow: "hidden",
        height: "100%",
        verticalAlign: "center",
      },
      timer1Container: {
        width: windowWidth,
        position: "relative",
        height: 360,
      },
      designPrincipleHeader: {
        ...regularText,
        fontSize: 100,
        display: "inline-block",
        width: 0.35 * sWidth,
      },
      designPrincipleDesc: {
        ...regularText,
        display: "inline-block",
        width: 0.65 * sWidth,
      },
      designPrincipleContainer: {
        marginTop: 40,
        width: sWidth,
        position: "relative",
      },
      designPrincipleTitle: {
        ...regularText,
        fontSize: 70,
        letterSpacing: -1.75,
        textDecoration: "underline",
      },
      frameContainer2: {
        position: "absolute",
        top: 0,
        left: hPadding,
        width: sWidth,
        overflow: "hidden",
        height: "100%",
        verticalAlign: "center",
      },
      proxyIndContainer: {
        width: windowWidth,
        position: "relative",
        height: 320,
      },
      detachStatusIndicator: {
        maxHeight: "71%",
        // maxWidth: "60%",
        width: "auto",
        height: "auto",
        position: "absolute",
        left: 0,
        right: 0,
        // top: 0,
        bottom: 25,
        marginLeft: "auto",
        marginRight: "auto",
      },
      horizontalBlurSpacer: {
        position: "absolute",
        height: "100%",
        top: 0,
        width: hPadding,
      },
      proxyDesc: {
        ...regularText,
        width: sWidth,
        position: "relative",
        ...scrollPadding,
      },
      proxyDesc2: {
        position: "absolute",
        left: 0,
        top: 0,
        ...regularText,
        width: 0.45 * sWidth,
        color: colors.deepBlue,
        height: proxyIndicator2FrameHeight,
        paddingLeft: hPadding,
        paddingRight: 0.1 * sWidth,
      },
      proxyIndicator2FrameContainer: {
        position: "absolute",
        top: 0,
        left: hPadding + 0.55 * sWidth,
        width: 0.45 * sWidth,
        overflow: "hidden",
        height: "100%",
        verticalAlign: "center",
      },
      proxyIndicator2Container: {
        width: windowWidth,
        position: "relative",
        height: proxyIndicator2FrameHeight,
      },
      proxyIndicator2Img: {
        maxHeight: "70%",
        maxWidth: "70%",
        width: "auto",
        height: "auto",
        position: "absolute",
        // SHADOW COMPENSATION
        left: 5,
        right: 0,
        top: 10,
        bottom: 0,
        margin: "auto",
      },
      stackHeader: {
        textDecoration: "underline",
        ...regularText,
        fontSize: 50,
      },
      stackHContainer: {
        position: "absolute",
        top: 0,
        left: hPadding,
        width: 0.3 * sWidth,
        height: 315,
      },
      findOnAppStoreDesc: {
        ...regularText,
        width: sWidth,
        position: "relative",
        ...scrollPadding,
        textAlign: "center",
      },
      bottomNavLinks: {
        width: sWidth,
        position: "relative",
        ...scrollPadding,
      },
    };

    const sectionOne_Purpose = (isDesktop, cWidth, wHeight) => {
      console.log(`isDesktop: ${isDesktop}. cWidth ${cWidth}`);
      const frameHeight = 0.3 * wHeight;
      return (
        <div
          style={
            isDesktop
              ? {
                  height: wHeight,
                  width: cWidth,
                  position: "relative",
                }
              : { position: "relative", width: cWidth }
          }
        >
          {/* TOP SPACER */}
          <div
            className={"solidTile"}
            style={{
              height: isDesktop ? 0.35 * wHeight : 0.1 * wHeight,
              width: cWidth,
            }}
          ></div>
          <div
            className={"solidTile"}
            style={
              isDesktop
                ? {
                    display: "inline-block",
                    height: frameHeight,
                    width: 0.45 * cWidth,
                    paddingRight: 0.1 * cWidth,
                    verticalAlign: "top",
                  }
                : {
                    display: "block",
                    width: cWidth,
                    paddingBottom: 0.2 * windowHeight,
                    background: "red",
                  }
            }
          >
            The purpose of Detach is to minimize the time users spend on thier
            phone. Users set a time for which they want to block distractions,
            select distracting apps to block, and start sessions.
          </div>
          <div
            style={
              isDesktop
                ? {
                    display: "inline-block",
                    height: frameHeight,
                    width: 0.45 * cWidth,
                    position: "relative",
                  }
                : {
                    display: "block",
                    width: cWidth,
                  }
            }
          >
            <PortfolioFrame
              frameHeight={frameHeight}
              borderWidth={4}
              frameWidth={isDesktop ? 0.45 * cWidth : cWidth}
              frameSize={20}
            ></PortfolioFrame>
            <img src={detachTimer1} style={styles.timer1Img}></img>
          </div>
          {/* BOTTOM SPACER */}
          <div
            className={"solidTile"}
            style={{
              height: isDesktop ? 0.35 * wHeight : 0.1 * wHeight,
              width: cWidth,
            }}
          ></div>
        </div>
      );
    };

    return (
      <div>
        <div style={styles.bgContainer}>
          <img style={styles.background} src={background}></img>
        </div>
        <div style={styles.scrollContainer} className={"totalBlur"}>
          <div
            style={{
              height: windowHeight,
              width: windowWidth,
              position: "relative",
            }}
          >
            <div
              style={{
                ...regularText,
                position: "absolute",
                bottom: 0.42 * windowHeight,
                left: 0.38 * windowWidth,
                width: 0.7 * windowHeight,
              }}
            >
              Detach is an iOS App for time management. Utilizing a proprietary
              API, the app filters network request from distracting apps. 👇
            </div>
            <img
              src={justGrid}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: windowWidth,
                height: 0.4 * windowHeight,
              }}
            ></img>
            <img
              src={justDetachPhone}
              style={{
                position: "absolute",
                top: 0.35 * windowHeight,
                left: 0,
                bottom: 0.9 * windowHeight,
                height: 0.55 * windowHeight,
              }}
            ></img>
            <div
              style={{
                position: "absolute",
                top: 0.06 * windowHeight,
                left: 0.1 * windowWidth,
                alignItems: "center",
                height: 45,
              }}
            >
              <img
                src={leftArrow}
                style={{
                  display: "inline-block",
                  height: 35,
                  color: colors.deepBlue,
                }}
              ></img>
              <div style={styles.navText}>mann.xyz</div>
            </div>
            {/* <div
              style={{
                position: "absolute",
                top: 0.125 * windowHeight,
                left: 0.1 * windowWidth,
                width: 1.1 * sWidth,
                height: 8,
                background: "black",
              }}
            ></div> */}
            <div
              // className={"solidTile"}
              style={{
                position: "absolute",
                left: 0.1 * windowWidth,
                top: 0.15 * windowHeight,
                // width: sWidth,
                // paddingLeft: hPadding / 2,
                // paddingRight: hPadding * 1.5,
              }}
            >
              <div
                style={{
                  fontSize: 0.05 * windowWidth,
                  fontFamily: "Inter-Bold",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Detach
              </div>
              <div
                style={{
                  fontSize: 0.015 * windowWidth,
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <div style={{ fontFamily: "Inter-Regular", display: "inline" }}>
                  An
                </div>{" "}
                <div style={{ fontFamily: "Inter-Bold", display: "inline" }}>
                  iOS App
                </div>{" "}
                <div style={{ fontFamily: "Inter-Regular", display: "inline" }}>
                  by Luke Mann
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.bgContainer}>
          <img style={styles.background} src={background}></img>
        </div>
        <div style={styles.scrollContainer}>
          {vSpacer(vSpacing)}
          <div
            style={{
              marginLeft: hPadding,
              marginRight: hPadding,
              background: "blue",
            }}
          >
            {sectionOne_Purpose(isDesktop, sWidth, windowHeight)}
          </div>

          {/* <div style={styles.timer1Container}>
            <div className={"solidTile"} style={styles.timer1Desc}>
              The purpose of Detach is to minimize the time users spend on thier
              phone. Users set a time for which they want to block distractions,
              select distracting apps to block, and start sessions.
            </div>
            <div style={styles.frameContainer1}>
              <PortfolioFrame
                frameHeight={360}
                borderWidth={4}
                frameWidth={0.45 * sWidth}
                frameSize={20}
              ></PortfolioFrame>
              <img src={detachTimer1} style={styles.timer1Img}></img>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100%",
                top: 0,
                right: 0,
                width: hPadding,
              }}
              className={"solidTile"}
            ></div>
          </div> */}

          {/*           
          <div
            className={"solidTile"}
            style={{
              width: windowWidth,
              paddingTop: vSpacing,
              position: "relative",
              ...scrollPadding,
            }}
          >
            <div style={styles.designPrincipleTitle}>
              Guiding Design Principles
            </div>
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
          
           */}
          {vSpacer(vSpacing)}
          <div style={styles.proxyIndContainer}>
            <div
              style={{ ...styles.horizontalBlurSpacer, left: 0 }}
              className={"solidTile"}
            ></div>
            <div style={styles.frameContainer2}>
              <PortfolioFrame
                frameHeight={320}
                borderWidth={5}
                frameWidth={sWidth}
                frameSize={20}
              ></PortfolioFrame>
              <img
                src={detachStatusIndicator}
                style={styles.detachStatusIndicator}
              ></img>
            </div>
            <div
              style={{ ...styles.horizontalBlurSpacer, right: 0 }}
              className={"solidTile"}
            ></div>
          </div>
          {vSpacer(vSpacing / 5)}
          <div className={"solidTile"} style={styles.proxyDesc}>
            Apple APIs do not support content-blocking within apps. To get
            around this, Detach creates a local proxy on the user’s phone. After
            Detach connects to this proxy as an external VPN, the proxy
            prohibits outgoing connections to user’s selected apps.
          </div>
          {vSpacer(vSpacing)}
          <div
            className={"solidTile"}
            style={{
              width: sWidth,
              ...scrollPadding,
              position: "relative",
              height: selectAppsPhoneHeight,
            }}
          >
            <img
              style={{
                position: "absolute",
                top: 0,
                left: hPadding,
                height: selectAppsPhoneHeight,
              }}
              src={detachSelectApps}
            ></img>
            {/* </div> */}
            <div
              style={{
                position: "absolute",
                right: hPadding,
                width: 0.5 * sWidth,
                height: "100%",
                ...regularText,
              }}
            >
              <div style={{ marginTop: 0.15 * selectAppsPhoneHeight }}>
                Detach’s content-blocking proxy supports most popular apps.
                Blocklists are updated weekly to ensure reliable usage.
              </div>
              <div style={{ marginTop: 0.2 * selectAppsPhoneHeight }}>
                {" "}
                Whereas most content-blockers on the App Store can only block
                Safari websites, Detach is able to block distractions within
                apps themselves.
              </div>
            </div>
          </div>
          {vSpacer(vSpacing)}
          <div style={styles.proxyIndicator2Container}>
            <div className={"solidTile"} style={styles.proxyDesc2}>
              Detach makes it abundantly clear to the user the status of thier
              proxy at any given time. The app will never record or store any
              data from the proxy.
            </div>
            <div style={styles.proxyIndicator2FrameContainer}>
              <PortfolioFrame
                frameHeight={proxyIndicator2FrameHeight}
                borderWidth={4}
                frameWidth={0.45 * sWidth}
                frameSize={20}
              ></PortfolioFrame>
              <img
                src={proxyIndicator2Img}
                style={styles.proxyIndicator2Img}
              ></img>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100%",
                top: 0,
                right: 0,
                width: hPadding,
              }}
              className={"solidTile"}
            ></div>
          </div>
          {vSpacer(vSpacing)}
          <div
            className={"solidTile"}
            style={{
              width: sWidth,
              ...scrollPadding,
              position: "relative",
              height: 315,
            }}
          >
            <div style={styles.stackHContainer}>
              <div style={styles.stackHeader}>Frontend Stack</div>
              <div style={{ height: 10 }}></div>
              {bulletPoint("Swift 5")}
              {bulletPoint("SwiftUI")}
              {bulletPoint("Objective-C")}
            </div>
            <div
              style={{
                ...styles.stackHContainer,
                left: hPadding + 0.55 * sWidth,
              }}
            >
              <div style={styles.stackHeader}>Backend Stack</div>
              <div style={{ height: 10 }}></div>
              {bulletPoint("Golang")}
              {bulletPoint("MongoDB")}
              {bulletPoint("Python")}
              {bulletPoint("Docker")}
            </div>
            {/* </div> */}
          </div>
          {vSpacer(vSpacing)}
          <div className={"solidTile"} style={styles.findOnAppStoreDesc}>
            Detach can be found on the iOS App Store.
          </div>
          {vSpacer(40)}
          <div className={"solidTile"} style={styles.findOnAppStoreDesc}>
            <img src={appStore} style={{ width: 0.25 * sWidth }}></img>
          </div>
          {vSpacer(vSpacing / 7)}
          <div className={"solidTile"} style={styles.bottomNavLinks}>
            <div
              style={{
                position: "absolute",
                left: hPadding,
                height: 45,
                color: colors.deepBlue,
              }}
            >
              <img
                src={leftArrow}
                style={{ display: "inline-block", height: 35 }}
              ></img>
              <div style={styles.navText}>mann.xyz</div>
            </div>
            <div style={{ position: "absolute", right: hPadding, height: 45 }}>
              <div style={styles.navText}>AI Art</div>
              <img
                src={rightArrow}
                style={{ display: "inline-block", height: 35, marginLeft: 25 }}
              ></img>
            </div>
          </div>
          {vSpacer(vSpacing)}
        </div>
      </div>
    );
  }
}
export default PortfolioTemplate;
