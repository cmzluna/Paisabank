import { waitFor } from "@testing-library/react-native";
import * as callApi from "../callApi";
import getUserContacts from "./";

const callApiSpy = jest.spyOn(callApi, "default");

describe("getUserContacts function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe("returns error", () => {});

  describe("runs correctly", () => {
    it("calls callApi", async () => {
      callApiSpy.mockReturnValueOnce(Promise.resolve({}));

      await getUserContacts();

      await waitFor(() => {
        expect(callApiSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
