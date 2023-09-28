import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import ContactsList from ".";

const mockedData = [
  {
    title: "Title 1",
    data: [
      {
        name: "Juan",
        lastName: "Perez",
        phone: "111-1111",
      },
    ],
  },
  {
    title: "Title 2",
    data: [
      {
        name: "Martin",
        lastName: "Rodriguez",
        phone: "222-2222",
      },
    ],
  },
  {
    title: "Title 3",
    data: [
      {
        name: "Carlos",
        lastName: "Alvarez",
        phone: "333-3333",
      },
    ],
  },
];
// const mockProps = { data: mockedData };

describe("returns error", () => {
  it("returns null when sections prop is not passed", () => {
    const ContactsListComponent = renderer.create(<ContactsList />).toJSON();
    expect(ContactsListComponent).toBeNull();
  });
});

describe("renders correctly", () => {
  it("it matches snapshot", () => {
    const ContactsListComponent = renderer
      .create(<ContactsList sections={mockedData} isLoading={false} />)
      .toJSON();
    expect(ContactsListComponent).toMatchSnapshot();
  });

  it("renders loading indicator if loading prop is true", () => {
    const { getByAccessibilityHint } = render(<ContactsList sections={mockedData} isLoading />);

    expect(getByAccessibilityHint("loading...")).toBeTruthy();
  });

  it("renders all items correctly", () => {
    const { getAllByTestId } = render(<ContactsList sections={mockedData} isLoading={false} />);

    expect(getAllByTestId("contact-info")).toHaveLength(3);
  });
});
