/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import MastercardIcon from "assets/icons/issuers/mastercard.svg";
import VisaIcon from "assets/icons/issuers/visa.svg";
import CashInIcon from "assets/icons/arrow-down-bold.svg";
import CashOutIcon from "assets/icons/arrow-up-bold.svg";
import SuscriptionIcon from "assets/icons/arrows-up-down.svg";

export const getScale = () => {
  const { width, height } = Dimensions.get("screen");
  const baseWidth = 414;
  const baseHeight = 896;

  const horizontalScale = (size) => Math.floor((width / baseWidth) * size);
  const verticalScale = (size) => Math.floor((height / baseHeight) * size);

  return { horizontalScale, verticalScale };
};

export const showToast = (message, type = "success", position = "top") => {
  Toast.show({
    type,
    text1: message,
    bottomOffset: 20,
    position,
    visibilityTime: 3000,
  });
};

export const getItemsByCurrentMonth = (arr) => {
  const today = new Date();
  const currentMonth = (today.getMonth() + 1).toString();
  const currentYear = today.getFullYear().toString();

  return arr.filter((elem) => {
    const splittedValues = elem.addedDate.split("-");
    const elemYear = splittedValues[0];
    const elemMonth = splittedValues[1];
    // takes away 0 from digits
    const parsedMonth = elemMonth[0] === "0" ? elemMonth[1] : elemMonth;

    return currentMonth === parsedMonth && elemYear === currentYear;
  });
};

export const filterArrayByPersonalData = (array, searchString) => {
  if (!searchString || !(typeof searchString === "string")) return [];
  const formattedStr = searchString.toLowerCase();

  return array.filter((item) =>
    (item.name + item.lastName + item.phone).toLowerCase().includes(formattedStr),
  );
};

export const mapTransactionsArray = (array) => {
  return array.map((el) => {
    let transactionTypeLabel = "";
    let svgFile = null;
    let color = "";

    switch (el.transactionType) {
      case "SUS":
        transactionTypeLabel = "Pago de suscripción";
        svgFile = SuscriptionIcon;
        color = "#B946FF";
        break;
      case "CASH_IN":
        transactionTypeLabel = "Pago recibido";
        svgFile = CashInIcon;
        color = "#74CC9B";
        break;
      case "CASH_OUT":
        transactionTypeLabel = "Pago enviado";
        svgFile = CashOutIcon;
        color = "#EF9C55";
        break;
    }

    return { ...el, transactionTypeLabel, svgFile, color };
  });
};

export const mapCardsArray = (array) => {
  return array.map((el) => {
    let svgFile = null;

    switch (el.issuer) {
      case "mastercard":
        svgFile = MastercardIcon;
        break;
      case "visa":
        svgFile = VisaIcon;
        break;
    }

    return { ...el, svgFile };
  });
};
