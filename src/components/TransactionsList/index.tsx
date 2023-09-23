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
import type { ParsedTransaction } from "../../types";

interface ItemProps {
  item: ParsedTransaction;
}

interface TransactionsListProps {
  data: ParsedTransaction[];
}

const TransactionsList = ({ data, ...props }: TransactionsListProps): JSX.Element | null => {
  const Item = ({ item }: ItemProps): JSX.Element => {
    const SvgComp = item.svgFile;

    return (
      <ItemContainer>
        <SvgComp />

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

  return (
    <Container>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} {...props} />
    </Container>
  );
};

export default TransactionsList;
