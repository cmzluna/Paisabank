import reducer, { type AuthType, setUser, deleteUser } from "./";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      user: null,
      isLoading: false,
      rememberMe: false,
    });
  });

  it("should handle setting a user", () => {
    const previousState: AuthType = {
      user: null,
      isLoading: false,
      rememberMe: false,
    };

    expect(
      reducer(
        previousState,
        setUser({ name: "Juan", email: "juan@domain.com", isLoading: false, rememberMe: false }),
      ),
    ).toEqual({
      user: { name: "Juan", email: "juan@domain.com" },
      isLoading: false,
      rememberMe: false,
    });
  });

  it("should handle deleting a user", () => {
    const previousState: AuthType = {
      user: { name: "Juan", email: "juan@domain.com" },
      isLoading: false,
      rememberMe: false,
    };

    expect(reducer(previousState, deleteUser({}))).toEqual({
      user: null,
      isLoading: false,
      rememberMe: false,
    });
  });
});
