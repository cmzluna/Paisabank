import reducer, { type TransactionType, setTransactions, resetTransactions } from "./";
describe("transactions reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      transactions: [],
    });
  });

  test("should handle setting adding transactions", () => {
    const previousState: TransactionType = {
      transactions: [],
    };

    expect(
      reducer(
        previousState,
        setTransactions([
          {
            id: 1,
            title: "transaction 1",
            amount: "200",
            transactionType: "SUS",
            date: "2022-02-02",
          },
          {
            id: 2,
            title: "transaction 2",
            amount: "300",
            transactionType: "CASH_IN",
            date: "2022-03-04",
          },
        ]),
      ),
    ).toEqual({
      transactions: [
        {
          id: 1,
          title: "transaction 1",
          amount: "200",
          transactionType: "SUS",
          date: "2022-02-02",
        },
        {
          id: 2,
          title: "transaction 2",
          amount: "300",
          transactionType: "CASH_IN",
          date: "2022-03-04",
        },
      ],
    });
  });

  test("should handle resetting transactions", () => {
    const previousState: TransactionType = {
      transactions: [
        {
          id: 1,
          title: "transaction 1",
          amount: "200",
          transactionType: "SUS",
          date: "2022-02-02",
        },
        {
          id: 2,
          title: "transaction 2",
          amount: "300",
          transactionType: "CASH_IN",
          date: "2022-03-04",
        },
      ],
    };

    expect(reducer(previousState, resetTransactions({}))).toEqual({ transactions: [] });
  });
});
