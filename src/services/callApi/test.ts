import callApi from "./";
import axios, { type AxiosError, type AxiosResponse } from "axios";
import { showToast } from "utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("utils", () => ({
  showToast: jest.fn(), // Mock showToast function
}));

describe("callApi function", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  describe("returns error", () => {
    afterEach(() => {
      // restore the spy created with spyOn
      jest.restoreAllMocks();
    });
    it("returns a promise with the object error", async () => {
      const expectedResult = "API error message";

      mockedAxios.request.mockReturnValueOnce(Promise.reject(new Error(expectedResult)));

      try {
        const result = await callApi({
          url: "/test/path",
          method: "get",
          dataRequest: {},
          errorMessage: "test error message for user",
        });

        // This line should not be reached since we expect an error
        expect(result).toBeUndefined();
      } catch (error) {
        expect(error).toBe(expectedResult);
      }
      expect(mockedAxios.request).toHaveBeenCalled();
    });
  });

  describe("runs correctly", () => {
    it("calls callApi", async () => {
      const expectedResult = { data: { testObjKey: "testObject" } };

      mockedAxios.request.mockReturnValueOnce(Promise.resolve({ data: expectedResult }));

      const result = await callApi({
        url: "/test/path",
        method: "get",
        dataRequest: {},
        errorMessage: "test error message",
      });

      expect(mockedAxios.request).toHaveBeenCalled();
      expect(result).toBe(expectedResult);
    });
  });
});
