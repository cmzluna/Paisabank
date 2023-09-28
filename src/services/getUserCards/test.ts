import { waitFor } from "@testing-library/react-native";
import * as callApi from "../callApi";
import getUserCards from "./";

const callApiSpy = jest.spyOn(callApi, "default");

describe("getUserCards function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe("returns error", () => {});

  describe("runs correctly", () => {
    it("calls callApi", async () => {
      callApiSpy.mockReturnValueOnce(
        Promise.resolve({
          success: true,
          data: [
            {
              id: 1,
              issuer: "mastercard",
              name: "User name",
              expDate: "2024-08-02",
              lastDigits: 123,
              balance: "200",
              currency: "USD",
            },
          ],
        }),
      );

      await getUserCards();

      await waitFor(() => {
        expect(callApiSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
