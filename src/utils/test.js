import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { showToast, getScale, getItemsByCurrentMonth, filterArrayByPersonalData } from "./index";

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

describe("getItemsByCurrentMonth", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2020-02-06"));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns empty array if not match is found", () => {
    const mockedItems = [
      { addedDate: "2020-05-12" },
      { addedDate: "2020-06-03" },
      { addedDate: "2022-01-01" },
      { addedDate: "2020-06-01" },
    ];
    const res = getItemsByCurrentMonth(mockedItems);

    expect(res).toStrictEqual([]);
  });

  it("returns correct results", () => {
    const mockedItems = [
      { addedDate: "2020-02-12" },
      { addedDate: "2020-02-03" },
      { addedDate: "2022-02-01" },
      { addedDate: "2020-06-01" },
    ];

    const expectedResults = [{ addedDate: "2020-02-12" }, { addedDate: "2020-02-03" }];

    const res = getItemsByCurrentMonth(mockedItems);

    expect(res).toStrictEqual(expectedResults);
  });
});

describe("filterArrayByPersonalData", () => {
  const personalData = [
    { name: "Carlos", lastName: "Gomez", phone: "111-1234" },
    { name: "Juan", lastName: "Perez", phone: "222-4567" },
  ];

  it("returns empty array if no searchString is passed to function", () => {
    const res = filterArrayByPersonalData(personalData);

    expect(res).toStrictEqual([]);
  });

  it("returns empty array if searchString is not of correct type", () => {
    const invalidValues = [null, 55, NaN, {}, () => {}, true];

    invalidValues.forEach((invalidValue) => {
      const res = filterArrayByPersonalData(personalData, invalidValue);

      expect(res).toStrictEqual([]);
    });
  });

  it("returns correct results", () => {
    const res = filterArrayByPersonalData(personalData, "12");
    expect(res).toStrictEqual([{ name: "Carlos", lastName: "Gomez", phone: "111-1234" }]);
  });
});
