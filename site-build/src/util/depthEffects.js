export const calcBoxShadow = (width, yHeight, zHeight, mouseX, mouseY) => {
  const shadowXOffset =
    -1 * Math.round(80 * zHeight + width * 0.4 - 0.01 * mouseX);
  const shadowYOffset =
    1.5 * Math.round(80 * zHeight + yHeight * 0.4 - 0.01 * mouseY);
  const shadowBlurRadius = Math.round(0.1 * (width + yHeight) + 80 * zHeight);
  const shadowSpreadRadius = Math.round(0.4 * (width + yHeight) * zHeight);
  const r = `${shadowXOffset}px ${shadowYOffset}px ${shadowBlurRadius}px ${shadowSpreadRadius}px rgba(6, 40, 20, 0.10)`;
  // console.log(`shadow r ${r}`)

  return r;
};

export const calcTextShadow = (zHeight, mouseX, mouseY) => {
  return {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: {
      width: Math.round(80 * zHeight - 0.01 * mouseX),
      height: Math.round(80 * zHeight - 0.01 * mouseY),
    },
    textShadowRadius: 100 * zHeight,
  };
};

export const mouseXOffset = (mouseX, height) => {
  return mouseX * 0.02 * height;
};
export const mouseYOffset = (mouseY, height) => {
  return mouseY * 0.02 * height;
};
