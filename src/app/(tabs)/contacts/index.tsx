/* eslint-disable react-native/no-inline-styles */
import { Container, StyledInputSearch } from "./styles";
import ContactsList from "components/ContactsList";
import { filterArrayByPersonalData, getItemsByCurrentMonth } from "utils";
import { useEffect, useState } from "react";
import useCallApi from "hooks/useCallApi";
import getUserContacts from "services/getUserContacts";
import { setContacts } from "store/slices/contacts";

export default function Contacts(): React.JSX.Element {
  const [sectionsArray, setSectionsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading: isLoadingContacts, data: contacts } = useCallApi({
    api: getUserContacts,
    dispatchCallback: setContacts,
  });

  useEffect(() => {
    if (contacts && contacts.data && contacts.data.length > 0) {
      const recentContacts = getItemsByCurrentMonth(contacts.data);
      const initialsectionsArray = recentContacts?.length
        ? [
            { title: "Recents", data: recentContacts },
            { title: "All", data: contacts.data },
          ]
        : [{ title: "All", data: contacts.data }];

      setSectionsArray(initialsectionsArray);
    }
  }, [contacts]);

  const onSearch = (text: string): void => {
    if (text) {
      const results = filterArrayByPersonalData(contacts.data, text);
      const parsedResults = [{ title: "Search results", data: results }];

      setSectionsArray(parsedResults);
      setSearchQuery(text);

      return;
    }

    setSearchQuery("");
    setSectionsArray([{ title: "All", data: contacts.data }]);
  };

  return (
    <Container>
      <StyledInputSearch
        value={searchQuery}
        onChangeText={(text) => {
          onSearch(text);
        }}
      />

      <ContactsList isLoading={isLoadingContacts} sections={sectionsArray} />
    </Container>
  );
}
