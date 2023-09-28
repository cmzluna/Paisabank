import { waitFor } from "@testing-library/react-native";
import * as callApi from "../callApi";
import userLogin from "./";

const callApiSpy = jest.spyOn(callApi, "default");

describe("userLogin function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe("returns error", () => {});

  describe("runs correctly", () => {
    it("calls callApi", async () => {
      callApiSpy.mockReturnValueOnce(Promise.resolve({}));

      await userLogin({});

      await waitFor(() => {
        expect(callApiSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
