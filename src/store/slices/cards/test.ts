import reducer, { type CardsType, setCards, resetCards } from "./";
import MastercardIcon from "assets/icons/issuers/mastercard.svg";

describe("cards reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      cards: [],
    });
  });

  it("should handle setting adding cards", () => {
    const previousState: CardsType = {
      cards: [],
    };

    expect(
      reducer(
        previousState,
        setCards([
          {
            id: 1,
            issuer: "mastercard",
            name: "Soy Paisanx",
            expDate: "2024-03-03",
            lastDigits: 123,
            balance: "200",
            currency: "USD",
            svgFile: MastercardIcon,
          },
        ]),
      ),
    ).toEqual({
      cards: [
        {
          id: 1,
          issuer: "mastercard",
          name: "Soy Paisanx",
          expDate: "2024-03-03",
          lastDigits: 123,
          balance: "200",
          currency: "USD",
          svgFile: MastercardIcon,
        },
      ],
    });
  });

  it("should handle resetting cards", () => {
    const previousState: CardsType = {
      cards: [
        {
          id: 1,
          issuer: "mastercard",
          name: "Soy Paisanx",
          expDate: "2024-03-03",
          lastDigits: 123,
          balance: "200",
          currency: "USD",
          svgFile: MastercardIcon,
        },
      ],
    };

    expect(reducer(previousState, resetCards({}))).toEqual({ cards: [] });
  });
});
