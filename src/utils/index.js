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

export const getItemsByCurrentMonth = (arr) => {
  const today = new Date();
  const actualMonth = (today.getMonth() + 1).toString();

  return arr.filter((elem) => {
    const elemMonth = elem.addedDate.split("-")[1];
    const parsedMonth = elemMonth[0] === "0" ? elemMonth[1] : elemMonth;

    return actualMonth === parsedMonth;
  });
};

export const filterArrayByPersonalData = (array, string) => {
  if (!(typeof string === "string")) return [];
  const formattedStr = string.toLowerCase();

  return array.filter((item) =>
    (item.name + item.lastName + item.phone).toLowerCase().includes(formattedStr),
  );
};
