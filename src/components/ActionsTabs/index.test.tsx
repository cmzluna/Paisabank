import renderer from "react-test-renderer";
import ActionsTab from ".";
import WalletIcon from "assets/icons/wallet.svg";
import TransferIcon from "assets/icons/transfer.svg";
import BaseButton from "components/BaseButton";

const mockedData = [
  {
    id: 1,
    title: "Billetera",
    icon: WalletIcon,
    backgroundColor: "#E4FFF0",
  },
  {
    id: 2,
    title: "Transferir",
    icon: TransferIcon,
    backgroundColor: "#FEEAD4",
  },
];

describe("returns error", () => {
  it("returns null when data prop is not passed", () => {
    const ActionsTabComponent = renderer.create(<ActionsTab />).toJSON();
    expect(ActionsTabComponent).toBeNull();
  });
});

describe("renders correctly", () => {
  it("match snapshot", () => {
    const tree = renderer.create(<ActionsTab data={mockedData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("iterates over data array and renders buttons", () => {
    const ActionsTabComponent = renderer.create(<ActionsTab data={mockedData} />).toJSON();

    expect(ActionsTabComponent.children[0].children[1].type).toBe("Text");
  });
});
