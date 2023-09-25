/* eslint-disable @typescript-eslint/no-var-requires */
import { Container, ItemContainer, ColumnWrapper, XsmallText, LargeText } from "./styles";
import { FlatList, SectionList } from "react-native";
import type { Contact } from "../../types";
import TextAvatar from "./components/TextAvatar";
import SectionTitle from "../SectionTitle";
import LoadingIndicator from "../LoadingIndicator";

interface ItemProps {
  item: Contact;
}

interface ContactsListProps {
  sections: Array<{
    title: string;
    data: Contact[];
  }>;
  isLoading: boolean;
}

/*
 
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
    addedDate: "2022-12-08",
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
    addedDate: "2023-01-09",
  },
  {
    id: 6,
    name: "Jorge",
    lastName: "Cruz",
    phone: "+541133556536",
    addedDate: "2023-01-10",
  },
];
*/
const Item = ({ item }: ItemProps): JSX.Element => {
  const avatarInitials = item.name[0] + item.lastName[0];

  return (
    <ItemContainer>
      <TextAvatar initials={avatarInitials} />

      <ColumnWrapper>
        <LargeText>
          {item.name} {item.lastName}
        </LargeText>
        <XsmallText> {item.phone}</XsmallText>
      </ColumnWrapper>
    </ItemContainer>
  );
};

const ContactsList = ({ sections, isLoading, ...props }: ContactsListProps): JSX.Element | null => {
  const renderItem = ({ item }: { item: Contact }): JSX.Element => {
    return <Item item={item} />;
  };

  if (isLoading || sections.length === 0) return <LoadingIndicator />;

  return (
    <Container>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + item.name}
        renderSectionHeader={({ section: { title } }) => <SectionTitle title={title} showDivider />}
        {...props}
      />
    </Container>
  );
};

export default ContactsList;
