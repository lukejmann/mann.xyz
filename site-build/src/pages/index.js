import React, { Component } from "react";
import s from "../util/spacing-const";
import colors from "../util/colors";
import NavLinks from "../components/navLinks";
import Orb from "../components/orb";
import { mouseXOffset, mouseYOffset } from "../util/depthEffects";
import About from "./about";
import Portfolio from "./portfolio";
import background from "../images/background.png";
import downloadIcon from "../images/downloadIcon.png";
import detachCover from "../images/detachCover.png";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Waypoint } from "react-waypoint";

class HomePage extends Component {
  // scrollSpy = null;
  scrollableContainer = null;
  scroller = scroller;
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      aboutNavHovered: false,
      mousePos: {
        x: 0,
        y: 0,
      },
      selectedPage: "none",
      currentPage: "home",
    };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    document.addEventListener("mousemove", (e) => {
      this.setState({ mousePos: { x: e.pageX, y: e.pageY } });
    });
    // console.log(`windowWidth :${this.state.windowWidth}`);

    // Events.scrollEvent.register("begin", function (to, element) {
    //   console.log("begin", arguments);
    // });

    // Events.scrollEvent.register("end", function (to, element) {
    //   console.log("end", arguments);
    // });
    // if (this.scrollSpy != null) {
    // this.scrollSpy.update();
    // }
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

  onPressAbout = () => {
    this.setState({ selectedPage: "about" });
    scroller.scrollTo("about", {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -305,
    });
  };
  onPressPortfolio = () => {
    this.setState({ selectedPage: "portfolio" });
    scroller.scrollTo("portfolio", {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -200,
    });
  };
  onPressResume = () => {
    this.setState({ selectedPage: "resume" });
    scroller.scrollTo("resume", {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -200,
    });
  };
  onPressWritings = () => {
    this.setState({ selectedPage: "writings" });
    scroller.scrollTo("writings", {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -200,
    });
  };

  render() {
    const { windowWidth, windowHeight } = this.state;

    const isSmallMode = windowWidth <= s.mobileMaxWidth;

    const orbs = () => {
      return (
        <div style={{ position: "fixed" }}>
          <Orb
            diameter={90}
            xPos={20}
            yPos={40}
            height={0.2}
            mousePosX={this.state.mousePos.x}
            mousePosY={this.state.mousePos.y}
          ></Orb>
          {/* <Orb
            diameter={222}
            xPos={-140}
            yPos={40}
            height={0.7}
            mousePos={this.state.mousePos}
          ></Orb> */}
          <Orb
            diameter={141}
            xPos={201}
            yPos={-30}
            height={0.5}
            mousePosX={this.state.mousePos.x}
            mousePosY={this.state.mousePos.y}
          ></Orb>
          <Orb
            diameter={247}
            xPos={-191}
            yPos={728}
            height={0.4}
            mousePosX={this.state.mousePos.x}
            mousePosY={this.state.mousePos.y}
          ></Orb>
        </div>
      );
    };
    const elevatedOrbs = () => {
      return (
        <div style={{ position: "fixed" }}>
          <Orb
            diameter={247}
            xPos={473}
            yPos={-70}
            height={0.6}
            mousePosX={this.state.mousePos.x}
            mousePosY={this.state.mousePos.y}
            shadow
          ></Orb>
          <Orb
            diameter={410}
            xPos={windowWidth * 0.85}
            yPos={72.5}
            height={0.9}
            mousePosX={this.state.mousePos.x}
            mousePosY={this.state.mousePos.y}
            shadow
          ></Orb>
        </div>
      );
    };
    const aboutWidth = () => {
      if (windowWidth < s.mobileMaxWidth) {
        return windowWidth - 20;
      }
      if (windowWidth > s.xlWideMinWidth) {
        return 0.9 * s.xlWideMinWidth;
      }
      return 0.9 * windowWidth;
    };
    const aWidth = aboutWidth();
    const portfolioWidth = () => {
      if (windowWidth < s.mobileMaxWidth) {
        return windowWidth - 20;
      }
      if (windowWidth > s.xlWideMinWidth) {
        return 0.65 * s.xlWideMinWidth;
      }
      return 0.65 * windowWidth;
    };
    const pWidth = portfolioWidth();

    const bgWidth = 1440;
    const bgHeight = 1024;

    const pStyles = () => {
      const smallModeMaxWdith = 750;
      const isSmallMode = pWidth <= smallModeMaxWdith;
      const coverPadding = !isSmallMode ? 25 : 20;
      const coverHeight = !isSmallMode ? 257 : 220;
      const textLeftMargin =
        coverPadding + (coverHeight - coverPadding * 2) + 30;
      const vertSpacing = 45;
      const imgHeight = !isSmallMode
        ? coverHeight - coverPadding * 2
        : 10 + (coverHeight - coverPadding * 2) / 2;
      return {
        coverImg: {
          position: "absolute",
          top: coverPadding,
          left: coverPadding,
          height: imgHeight,
          width: imgHeight,

          // marginTop: 45,
        },
        projectName: {
          fontSize: !isSmallMode ? 70 : "3em",
          color: colors.yumGreen,
          position: "absolute",
          left: !isSmallMode ? textLeftMargin : imgHeight + coverPadding * 2,
          bottom: coverHeight / 2 - 10,
          top: isSmallMode ? coverPadding + 20 : "",
          fontFamily: "Hndrxx-Semibold",
        },
        subText: {
          fontSize: 30,
          color: colors.beachSand,
          position: "absolute",
          left: !isSmallMode ? textLeftMargin : coverPadding,
          top: coverHeight / 2 + (!isSmallMode ? 12 : 22),
          fontFamily: "Hndrxx-Medium",
          lineHeight: 1.1,
        },
        coverBG: {
          height: coverHeight,
          position: "relative",
          width: pWidth,
          marginTop: vertSpacing,
        },
      };
    };

    const calcDetachScreenTop = () => {
      // try {
      //   console.log(`currentY: ${scrollSpy.currentPositionY()}`);
      // } catch (err) {
      //   console.log(`currentYErr: ${err}`);
      // }
      return 1000;
    };

    const styles = {
      mainContainer: {
        position: "fixed",
        height: this.state.windowHeight,
        width: this.state.windowWidth,
      },
      writings: {
        display: "block",
        fontFamily: "SF-Bold",
        color: colors.whiteSand,
        fontSize: 70,
        letterSpacing: -2,
        textShadow: `${5 - 0.0005 * this.state.mousePos.x}px ${
          10 - 0.001 * this.state.mousePos.y
        }px 10px rgba(6,40,20,0.2)`,
      },
      scrollContainer: {
        width: windowWidth,
        position: "absolute",
        top: 0,
        // top: 0,
        left: 0,
        overflow: "hidden",
        paddingLeft: `${Math.round((windowWidth - aWidth) / 2)}px`,
        paddingRight: `${Math.round((windowWidth - aWidth) / 2)}px`,
        paddingTop: `${305 + mouseXOffset(0.1, this.state.mousePos.x)}px`,
      },
      comingSoon: {
        height: 1200,
        fontFamily: "Sequel",
        fontSize: 80,
        color: colors.whiteSand,
      },
      background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: windowWidth > bgWidth ? windowWidth : bgWidth,
        height: windowHeight > bgHeight ? windowHeight : bgHeight,
      },
      resumeText: {
        display: "block",
        fontFamily: "SF-Bold",
        color: colors.whiteSand,
        fontSize: 70,
        letterSpacing: -2,
        textShadow: `${5 - 0.0005 * this.state.mousePos.x}px ${
          10 - 0.001 * this.state.mousePos.y
        }px 10px rgba(6,40,20,0.2)`,
      },
      resumeButton: {
        height: 200,
        marginTop: 20,
        width: pWidth,
        position: "relative",
        background: "rgba(108,108,108,0.3)",
        borderColor: colors.whiteSand,
        borderWidth: 5,
        borderStyle: "solid",
        marginBottom: !isSmallMode ? 400 : 250,
        display: "inline-block",
        hover: "pointer",
      },
      resumeC1: {
        height: 75,
        display: "flex",
        marginTop: 70,
        marginBottom: 70,
        justifyContent: "center",
        alignItems: "center",
      },
      resumeC2: {
        display: "inline-block",
        fontFamily: "Hndrxx-Medium",
        fontSize: pWidth * 0.07,
        color: "white",
        textDecoration: "underline",
      },
      ...pStyles(),
    };

    return (
      <div>
        <div id="main" style={styles.mainContainer}>
          <img style={styles.background} src={background}></img>
          <NavLinks
            selectedPage={this.state.selectedPage}
            windowHeight={windowHeight}
            windowWidth={aWidth}
            onPressAbout={this.onPressAbout}
            onPressPortfolio={this.onPressPortfolio}
            onPressResume={this.onPressResume}
            onPressWritings={this.onPressWritings}
          ></NavLinks>
        </div>
        {orbs()}

        <div
          style={styles.scrollContainer}
          ref={(r) => {
            this.scrollableContainer = r;
          }}
        >
          <Element name="about">
            <Waypoint
              topOffset={0.2 * windowHeight}
              onEnter={() => {
                console.log("ENTERING ABOUT");
                this.setState({ selectedPage: "about" });
              }}
              onLeave={() => {
                console.log("LEAVING ABOUT");
              }}
            ></Waypoint>
            <About
              id="about"
              aboutWindowWidth={aWidth}
              windowWidth={windowWidth}
              mousePosX={this.state.mousePos.x}
              mousePosY={this.state.mousePos.y}
              style={{ display: "block", position: "relative", width: aWidth }}
            ></About>
          </Element>
          <Element name="portfolio">
            <Waypoint
              topOffset={0.2 * windowHeight}
              onEnter={() => {
                console.log("ENTERING PORTFOLIO");
              }}
              onLeave={() => {
                console.log("LEAVING PORTFOLIO");
                this.setState({ selectedPage: "portfolio" });
              }}
            ></Waypoint>

            <Portfolio
              // onPressDetach={() => {
              //   console.log("in onPressDetach!");
              //   this.setState({ currentPage: "detach" });
              // }}
              name="portfolio"
              id="portfolio"
              portfolioWindowWidth={pWidth}
              mousePosX={this.state.mousePos.x}
              mousePosY={this.state.mousePos.y}
              style={{
                position: "relative",
                width: pWidth,
                marginTop: !isSmallMode ? 250 : 150,
              }}
            ></Portfolio>
          </Element>
          <Element name="resume">
            <Waypoint
              topOffset={0.2 * windowHeight}
              onEnter={() => {
                console.log("ENTERING RESUME");
              }}
              onLeave={() => {
                console.log("LEAVING RESUME");
                this.setState({ selectedPage: "resume" });
              }}
            ></Waypoint>
            <div style={styles.resumeText}>Resume</div>
            <button style={styles.resumeButton}>
              <div style={styles.resumeC1}>
                <div style={styles.resumeC2}>LUKE_RESUME.pdf</div>
                {!isSmallMode && (
                  <img
                    src={downloadIcon}
                    style={{ height: pWidth * 0.07, marginLeft: 50 }}
                  ></img>
                )}
              </div>
            </button>
          </Element>
          <Element name="writings">
            <Waypoint
              topOffset={0.2 * windowHeight}
              onEnter={() => {
                console.log("ENTERING WRITINGS");
              }}
              onLeave={() => {
                console.log("LEAVING WRITINGS");
                this.setState({ selectedPage: "writings" });
              }}
            ></Waypoint>
            <div style={styles.writings}>Writings</div>
          </Element>
          <div style={styles.comingSoon}>COMING SOON.</div>
        </div>
        {elevatedOrbs()}
      </div>
    );
  }
}
export default HomePage;
