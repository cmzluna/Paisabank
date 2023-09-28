import reducer, { type ContactType, setContacts, resetContacts } from "./";

describe("contacts reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      contacts: [],
    });
  });

  it("should handle setting adding contacts", () => {
    const previousState: ContactType = {
      contacts: [],
    };

    expect(
      reducer(
        previousState,
        setContacts([
          {
            id: 1,
            name: "Carlos",
            lastName: "Perez",
            phone: "111-1111",
            addedDate: "2021-02-01",
          },
          {
            id: 2,
            name: "Rodrigo",
            lastName: "Martinez",
            phone: "222-2222",
            addedDate: "2021-07-04",
          },
        ]),
      ),
    ).toEqual({
      contacts: [
        {
          id: 1,
          name: "Carlos",
          lastName: "Perez",
          phone: "111-1111",
          addedDate: "2021-02-01",
        },
        {
          id: 2,
          name: "Rodrigo",
          lastName: "Martinez",
          phone: "222-2222",
          addedDate: "2021-07-04",
        },
      ],
    });
  });

  it("should handle resetting contacts", () => {
    const previousState: ContactType = {
      contacts: [
        {
          id: 1,
          name: "Carlos",
          lastName: "Perez",
          phone: "111-1111",
          addedDate: "2021-02-01",
        },
        {
          id: 2,
          name: "Rodrigo",
          lastName: "Martinez",
          phone: "222-2222",
          addedDate: "2021-07-04",
        },
      ],
    };

    expect(reducer(previousState, resetContacts({}))).toEqual({ contacts: [] });
  });
});
