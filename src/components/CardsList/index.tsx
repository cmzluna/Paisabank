import React, { useCallback, useState } from "react";
import {
  Container,
  Wrapper,
  ExtendedWrapper,
  ItemContainer,
  Chip,
  ColumnWrapper,
  MediumText,
  XxsmallText,
  SmallText,
  LargeText,
  XxlargeText,
  PositionedText,
} from "./styles";
import { FlatList, type ViewToken } from "react-native";
import type { Card, ParsedCard } from "../../types";
import GradientChip from "../../../assets/gradient-chip.svg";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LoadingIndicator from "../LoadingIndicator";

interface ItemProps {
  item: ParsedCard;
}

interface CardsListProps {
  data: ParsedCard[];
  isLoading: boolean;
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

const CardsList = ({ data, isLoading }: CardsListProps): JSX.Element | null => {
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const Item = ({ item }: ItemProps): JSX.Element => {
    //  const isOnTop = focusedItem === item.id;
    const SvgComp = item.svgFile;
    return (
      <ItemContainer backgroundColor={"#005CEE"}>
        <ExtendedWrapper>
          <MediumText>Balance</MediumText>
          <SvgComp />
        </ExtendedWrapper>

        <Wrapper>
          <Chip>
            <GradientChip />
            <PositionedText>{item.currency}</PositionedText>
          </Chip>

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

  if (isLoading) return <LoadingIndicator />;

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
