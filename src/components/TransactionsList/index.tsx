/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Container,
  ItemContainer,
  ColumnWrapper,
  MediumText,
  XsmallText,
  LargeText,
} from "./styles";
import { FlatList } from "react-native";
import type { ParsedTransaction } from "types";
import { SvgXml } from "react-native-svg";
import LoadingIndicator from "../LoadingIndicator";

interface ItemProps {
  item: ParsedTransaction;
}

interface TransactionsListProps {
  data: ParsedTransaction[];
  isLoading: boolean;
}

const TransactionsList = ({
  data,
  isLoading,
  ...props
}: TransactionsListProps): JSX.Element | null => {

  const Item = ({ item }: ItemProps): JSX.Element => {
    return (
      <ItemContainer testID="transaction-info">
        <SvgXml xml={item.svgFile} />

        <ColumnWrapper>
          <LargeText>{item.title}</LargeText>
          <XsmallText> {item.transactionTypeLabel}</XsmallText>
        </ColumnWrapper>

        <MediumText color={item.color}>${item.amount}</MediumText>
      </ItemContainer>
    );
  };

  const renderItem = ({ item }: { item: ParsedTransaction }): JSX.Element => {
    return <Item item={item} />;
  };

  if (!data) return null;
  if (isLoading) return <LoadingIndicator />;

  return (
    <Container>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} {...props} />
    </Container>
  );
};

export default TransactionsList;
