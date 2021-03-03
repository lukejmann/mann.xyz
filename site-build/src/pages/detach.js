import React, { Component } from "react";
import background from "../images/background.png";
import s from "../util/spacing-const";
import BlurredIntroSection from "../detachSections/introSection";
import PurposeSection from "../detachSections/purposeSection";
import DesignPrinciplesSection from "../detachSections/designPrinciplesSection";
import SelectAppsSection from "../detachSections/selectAppsSection";
import ContentBlockingSection from "../detachSections/contentBlockingSection";
import blurredBG from "../images/blurredBG.png";
import StackSection from "../detachSections/stackSection";
import PrivacySection from "../detachSections/privacySection";
import EndLinksSection from "../detachSections/endLinksSection";

class DetachPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
  }
  componentDidMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
    const bgWidth = 1440;
    const bgHeight = 1024;

    // const hPadding = hPaddingCalc();

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
      scrollContainer: {
        position: "relative",
        width: windowWidth,
      },
    };

    return (
      <div>
        {/*  */}
        <div style={styles.bgContainer}>
          <img style={styles.background} src={blurredBG}></img>
        </div>
        <BlurredIntroSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></BlurredIntroSection>
        {/* <div style={styles.bgContainer}>
          <img style={styles.background} src={blurredBG}></img>
        </div> */}
        <PurposeSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></PurposeSection>
        <DesignPrinciplesSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></DesignPrinciplesSection>
        <ContentBlockingSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></ContentBlockingSection>
        <SelectAppsSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></SelectAppsSection>
        <PrivacySection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></PrivacySection>
        <StackSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></StackSection>
        <EndLinksSection
          wWidth={windowWidth}
          wHeight={windowHeight}
        ></EndLinksSection>
      </div>
    );
  }
}

export default DetachPage;
