import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { showToast, getScale } from "./index";

describe("showToast", () => {
  const toastSpy = jest.spyOn(Toast, "show");
  toastSpy.mockImplementation(() => jest.fn());

  it("runs the Toast show method with the passed message", () => {
    const testMessage = "test";

    showToast(testMessage);
    const args = toastSpy.mock.calls[0][0];

    expect(toastSpy).toHaveBeenCalledTimes(1);
    expect(args.text1).toBe(testMessage);
  });
});

describe("getScale", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns an object", () => {
    expect(typeof getScale()).toBe("object");
  });

  it("method horizontalScale adapts the size to the device", () => {
    // base width: 360

    jest.spyOn(Dimensions, "get").mockReturnValueOnce({ width: 300, height: 600 });

    expect(getScale().horizontalScale(100)).toBe(72);
  });

  it("method verticalScale adapts the size to the device", () => {
    // base height: 720

    jest.spyOn(Dimensions, "get").mockReturnValueOnce({ width: 300, height: 600 });

    expect(getScale().verticalScale(100)).toBe(66);
  });
});
