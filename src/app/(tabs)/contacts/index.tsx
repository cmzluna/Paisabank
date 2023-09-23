/* eslint-disable react-native/no-inline-styles */
import { Container, StyledInputSearch } from "./styles";
import ContactsList from "../../../components/ContactsList";
import { filterArrayByPersonalData, getItemsByCurrentMonth } from "../../../utils";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Ronaldo",
    lastName: "Martins",
    phone: "+541133556531",
    addedDate: "2022-12-07",
  },
  {
    id: 2,
    name: "Lidia",
    lastName: "Roldan",
    phone: "+541133556532",
    addedDate: "2022-09-08",
  },
  {
    id: 3,
    name: "Carlos",
    lastName: "Gutierrez",
    phone: "+541133556533",
    addedDate: "2022-12-09",
  },
  {
    id: 4,
    name: "Josefina Miranda",
    lastName: "Torres",
    phone: "+541133556534",
    addedDate: "2022-12-10",
  },
  {
    id: 5,
    name: "Belen",
    lastName: "Salvador",
    phone: "+541133556535",
    addedDate: "2023-09-09",
  },
  {
    id: 6,
    name: "Jorge",
    lastName: "Cruz",
    phone: "+541133556536",
    addedDate: "2023-01-10",
  },
];

export default function Contacts(): React.JSX.Element {
  const recentContacts = getItemsByCurrentMonth(data);
  const initialDataArray = recentContacts?.length
    ? [
        { title: "Recents", data: recentContacts },
        { title: "All", data },
      ]
    : [{ title: "All", data }];

  const [searchQuery, setSearchQuery] = useState("");
  const [contactsData, setContactsData] = useState(initialDataArray);

  const onSearch = (text: string): void => {
    if (text) {
      const results = filterArrayByPersonalData(data, text);
      const parsedResults = [{ title: "Search results", data: results }];

      setContactsData(parsedResults);
      setSearchQuery(text);

      return;
    }
    setSearchQuery("");
    setContactsData(initialDataArray);
  };

  return (
    <Container>
      <StyledInputSearch
        value={searchQuery}
        onChangeText={(text) => {
          onSearch(text);
        }}
      />

      <ContactsList sections={contactsData} />
    </Container>
  );
}
