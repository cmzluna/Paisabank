import React, { useCallback, useState, useRef, useEffect } from "react";
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
import { FlatList, type ViewToken, Animated } from "react-native";
import type { ParsedCard } from "types";
import GradientChip from "assets/gradient-chip.svg";
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
  const [focusedItemId, setFocusedItemId] = useState<number | null>(null);

  const Item = ({ item }: ItemProps): JSX.Element => {
 const isOnTop = focusedItemId === item.id;

 const animation = new Animated.Value(0);
 const inputRange = [0, 1.1];
 const outputRange = [1, 0.9];
 const scale = animation.interpolate({inputRange, outputRange});

 useEffect(() => {
  Animated.spring(animation, {
    toValue: 1,         
    tension: 1,      
    friction: 9,     
    useNativeDriver: true,
  }).start();
}, [ isOnTop]);
 
    return (
      <Animated.View style={{transform: [{scale}]} }>
      <ItemContainer isOnTop={isOnTop}  >
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
      </Animated.View>
    );
  };

  const renderItem = ({ item }: { item: ParsedCard }): JSX.Element => {
    return <Item item={item} />;
  };

 
 
  const onViewableItemsChanged = useCallback(
    (info: { changed: ViewToken[] }): void => {
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        setFocusedItemId(visible.item.id)
      });
    },
    []
  );

  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 10,
  });

  if (!data) return null;
  if (isLoading) return <LoadingIndicator />;
 
  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle = {{alignItems:'center',  }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
         keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default CardsList;
