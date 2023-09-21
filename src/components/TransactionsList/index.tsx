/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Container,
  ExtendedWrapper,
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

/*
   {
    id: 1,
    title: "Adobe",
    amount: "125,00",
    transactionType: "SUS",
    date: "2023-01-01",
  },
 {
    id: 2,
    title: "Juan David",
    amount: "99,00",
    transactionType: "CASH_IN",
    date: "2022-12-30",
  },
  {
    id: 3,
    title: "Jorge Cruz",
    amount: "10,00",
    transactionType: "CASH_OUT",
    date: "2022-12-29",
    transactionTypeLabel: string;
  svgFile: string;
  },
*/

// const MyComponent = (svgFile: string): React.JSX.Element => {
//   // const svg = require("./my-icon.png");

//   return (
//     <View>
//       <SvgXml xml={svgFile} />
//     </View>
//   );
// };

const TransactionsList = ({ data, ...props }: TransactionsListProps): JSX.Element | null => {
  const Item = ({ item }: ItemProps): JSX.Element => {
    const SvgComp = item.svgFile;

    return (
      <ItemContainer>
        <ExtendedWrapper>
          {/* <Image source={require(`../../assets/icons/issuers/${item.svgFile}`)} /> */}
          <SvgComp />

          <ColumnWrapper>
            <LargeText>{item.title}</LargeText>
            <XsmallText> {item.transactionTypeLabel}</XsmallText>
          </ColumnWrapper>

          <MediumText color={item.color}>${item.amount}</MediumText>
        </ExtendedWrapper>
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
