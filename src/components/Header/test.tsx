import renderer from "react-test-renderer";
import Header from ".";

describe("renders correctly", () => {
  it("match snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
