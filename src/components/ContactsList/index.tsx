/* eslint-disable @typescript-eslint/no-var-requires */
import { Container, ItemContainer, ColumnWrapper, XsmallText, LargeText } from "./styles";
import { SectionList } from "react-native";
import type { Contact } from "types";
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

const Item = ({ item }: ItemProps): JSX.Element => {
  const avatarInitials = item.name[0] + item.lastName[0];

  return (
    <ItemContainer>
      <TextAvatar initials={avatarInitials} />

      <ColumnWrapper testID="contact-info">
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

  if (isLoading) return <LoadingIndicator />;
  if (!sections) return null;

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
