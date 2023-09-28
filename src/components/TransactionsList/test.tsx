import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import TransactionsList from ".";
import MastercardIcon from "assets/icons/issuers/mastercard.svg";
import VisaIcon from "assets/icons/issuers/visa.svg";

const mockedData = [
  {
    id: 1,
    title: "Title 1",
    amount: "100",
    transactionType: "SUS",
    date: "2023-01-01",

    svgFile: MastercardIcon,
    transactionTypeLabel: "SUS label",
    color: "#eee",
  },
  {
    id: 2,
    title: "Title 2",
    amount: "200",
    transactionType: "CASH_IN",
    date: "2023-06-12",
    svgFile: VisaIcon,
    transactionTypeLabel: "CASH_IN label",
    color: "#eee",
  },
  {
    id: 3,
    title: "Title 3",
    amount: "300",
    transactionType: "CASH_OUT",
    date: "2023-04-03",
    svgFile: MastercardIcon,
    transactionTypeLabel: "CASH_OUT label",
    color: "#eee",
  },
];

describe("returns error", () => {
  it("returns null when data prop is not passed", () => {
    const TransactionsListComponent = renderer.create(<TransactionsList />).toJSON();
    expect(TransactionsListComponent).toBeNull();
  });
});

describe("renders correctly", () => {
  it("it matches snapshot", () => {
    const TransactionsListComponent = renderer
      .create(<TransactionsList data={mockedData} isLoading={false} />)
      .toJSON();
    expect(TransactionsListComponent).toMatchSnapshot();
  });

  it("renders loading indicator if loading prop is true", () => {
    const { getByAccessibilityHint } = render(<TransactionsList data={mockedData} isLoading />);

    expect(getByAccessibilityHint("loading...")).toBeTruthy();
  });

  it("renders all items correctly", () => {
    const { getAllByTestId } = render(<TransactionsList data={mockedData} isLoading={false} />);

    expect(getAllByTestId("transaction-info")).toHaveLength(3);
  });
});
