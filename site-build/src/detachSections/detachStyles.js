import colors from "../util/colors";
import s from "../util/colors";

export const regularText = (wWidth) => {
  return {
    fontFamily: "Hndrxx-Medium",
    // fontSize: 0.03 * wWidth,
    color: colors.deepBlue,
    lineHeight: 1.2,
    letterSpacing: -1,
  };
};

export const hPaddingCalc = (wWidth) => {
  if (wWidth < s.mobileMaxWidth) {
    return 20;
  }
  if (wWidth > s.xlWideMinWidth) {
    return 0.1 * s.xlWideMinWidth;
  }
  return 0.1 * wWidth;
};

export const standardFontSize = (wWidth) => {
  if (wWidth < s.mobileMaxWidth) return 20;
  if (wWidth < 800) return 0.03 * wWidth;
  if (wWidth < s.xlWideMinWidth) return 0.02 * wWidth;
  return 30;
};

export const standardFontFam = () => {
  return "Hndrxx-Medium, Helvetica";
};
