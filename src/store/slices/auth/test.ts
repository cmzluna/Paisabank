import reducer, { type AuthType, signIn } from "./";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isLogging: false,
    });
  });

  it("should handle signIn", () => {
    const previousState: AuthType = {
      isLogging: false,
    };

    expect(reducer(previousState, signIn({}))).toEqual({
      isLogging: true,
    });
  });
});
