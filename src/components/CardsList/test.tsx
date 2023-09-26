import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";
import CardsListComponent from ".";
import MastercardIcon from "assets/icons/issuers/mastercard.svg";
import VisaIcon from "assets/icons/issuers/visa.svg";

const mockedData = [
  {
    balance: "978,85",
    currency: "USD",
    expDate: "2026-03-20",
    id: 1,
    issuer: "mastercard",
    lastDigits: 1234,
    name: "Soy Paisanx",
    svgFile: MastercardIcon,
  },
  {
    balance: "1000,10",
    currency: "USD",
    expDate: "2027-03-20",
    id: 2,
    issuer: "visa",
    lastDigits: 1234,
    name: "Soy Paisanx",
    svgFile: VisaIcon,
  },
];

const mockProps = { data: mockedData };

describe("returns error", () => {
  it("returns null when data prop is not passed", () => {
    const ActionsTabComponent = renderer.create(<CardsListComponent />).toJSON();
    expect(ActionsTabComponent).toBeNull();
  });
});

describe("renders correctly", () => {
  it("match snapshot", () => {
    const ActionsTabComponent = renderer
      .create(<CardsListComponent data={mockedData} isLoading={false} />)
      .toJSON();
    expect(ActionsTabComponent).toMatchSnapshot();
  });

  it("renders loading indicator if loading prop is true", () => {});

  it("renders all items correctly", () => {
    const { getAllByTestId } = render(<CardsListComponent data={mockedData} isLoading={false} />);

    expect(getAllByTestId("CardItemImage")).toHaveLength(2);
  });
});
