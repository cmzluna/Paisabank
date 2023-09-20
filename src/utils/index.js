/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dimensions } from "react-native";

export const getScale = () => {
  const { width, height } = Dimensions.get("screen");
  const baseWidth = 414;
  const baseHeight = 896;

  const horizontalScale = (size) => Math.floor((width / baseWidth) * size);
  const verticalScale = (size) => Math.floor((height / baseHeight) * size);

  return { horizontalScale, verticalScale };
};
