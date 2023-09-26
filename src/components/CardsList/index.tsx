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
import type { ParsedCard } from "../../types";
import GradientChip from "../../../assets/gradient-chip.svg";
import LoadingIndicator from "../LoadingIndicator";
import { SvgXml } from "react-native-svg";

interface ItemProps {
  item: ParsedCard;
}

interface CardsListProps {
  data?: ParsedCard[];
  isLoading: boolean;
}

const CardsList = ({ data, isLoading }: CardsListProps): JSX.Element | null => {
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const Item = ({ item }: ItemProps): JSX.Element => {
    //  const isOnTop = focusedItem === item.id;

    return (
      <ItemContainer backgroundColor={"#005CEE"}>
        <ExtendedWrapper>
          <MediumText>Balance</MediumText>

          <SvgXml width="48" height="48" xml={item.svgFile} testID="CardItemImage" />
        </ExtendedWrapper>

        <Wrapper>
          <Chip>
            <SvgXml xml={GradientChip} />
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

  const renderItem = ({ item }: { item: ParsedCard }): JSX.Element => {
    return <Item item={item} />;
  };

  // https://blog.logrocket.com/implementing-component-visibility-sensor-react-native/#difference-between-viewableitems-changed

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }): void => {
      const { changed } = info;
      // console.log("Visible items are", viewableItems);
      // console.log("Changed in this iteration", changed);

      setFocusedItem(changed[0].index);
    },
    [],
  );

  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 70,
  });

  if (!data) return null;
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
