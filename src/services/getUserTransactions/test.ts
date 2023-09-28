import { waitFor } from "@testing-library/react-native";
import * as callApi from "../callApi";
import getUserTransactions from "./";

const callApiSpy = jest.spyOn(callApi, "default");

describe("getUserTransactions function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe("returns error", () => {});

  describe("runs correctly", () => {
    it("calls callApi", async () => {
      callApiSpy.mockReturnValueOnce(Promise.resolve({}));

      await getUserTransactions();

      await waitFor(() => {
        expect(callApiSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
