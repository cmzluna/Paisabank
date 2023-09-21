import React, { useCallback, useState, useRef } from "react";
import {
  Container,
  Wrapper,
  ExtendedWrapper,
  ItemContainer,
  InnerWrapper,
  ItemTitle,
  ColumnWrapper,
  MediumText,
  XxsmallText,
  SmallText,
  LargeText,
  XxlargeText,
} from "./styles";
import { FlatList, Text, type ViewToken } from "react-native";
import type { Card } from "../../types";

interface ItemProps {
  item: Card;
}

interface CardsListProps {
  data: Card[];
}

/*
  {
    id: 1,
    issuer: "mastercard",
    name: "Soy Paisanx",
    expDate: "2026-03-20",
    lastDigits: 1234,
    balance: "978,85",
    currency: "USD",
  },

*/

const CardsList = ({ data }: CardsListProps): JSX.Element | null => {
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const Item = ({ item }: ItemProps): JSX.Element => {
    //  const isOnTop = focusedItem === item.id;

    return (
      <ItemContainer backgroundColor={"#F9B7B7"}>
        <ExtendedWrapper>
          <MediumText>Balance</MediumText>
          <ItemTitle>img</ItemTitle>
        </ExtendedWrapper>

        <Wrapper>
          <MediumText>{item.currency}</MediumText>
          <XxlargeText>{item.balance}</XxlargeText>
        </Wrapper>

        <Wrapper>
          <XxlargeText>**** **** **** </XxlargeText>
          <XxlargeText>{item.lastDigits}</XxlargeText>
        </Wrapper>

        <ExtendedWrapper>
          <LargeText>{item.name}</LargeText>
          <ColumnWrapper>
            <XxsmallText>Exp. Date</XxsmallText>
            <SmallText>{item.expDate}</SmallText>
          </ColumnWrapper>
        </ExtendedWrapper>
      </ItemContainer>
    );
  };

  const renderItem = ({ item }: { item: Card }): JSX.Element => {
    return <Item item={item} />;
  };

  // https://blog.logrocket.com/implementing-component-visibility-sensor-react-native/#difference-between-viewableitems-changed

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }): void => {
      const { changed } = info;
      // console.log("Visible items are", viewableItems);
      // console.log("Changed in this iteration", changed);
      console.log("INDEX ITEM ", changed[0].index);

      setFocusedItem(changed[0].index);
    },
    [],
  );

  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 70,
  });

  // try with  viewAreaCoveragePercentThreshold: 50,
  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        // onViewableItemsChanged={onViewableItemsChanged}
        // viewabilityConfig={viewConfigRef.current}

        //  keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default CardsList;
