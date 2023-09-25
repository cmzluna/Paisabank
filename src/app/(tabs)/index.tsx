/* eslint-disable react-native/no-inline-styles */
import CardsList from "../../components/CardsList";
import TransactionsList from "../../components/TransactionsList";
import Header from "../../components/Header";
import { Container, SafeAreaContainer } from "./styles";
import ActionsTabs from "../../components/ActionsTabs";
import SectionTitle from "../../components/SectionTitle";
import useCallApi from "../../hooks/useCallApi";
import getUserCards from "../../services/getUserCards";
import { mapCardsArray, mapTransactionsArray } from "../../utils";
import getUserTransactions from "../../services/getUserTransactions";

export default function Home(): React.JSX.Element {
  const { isLoading: isLoadingCards, data: cardsData } = useCallApi(getUserCards, mapCardsArray);
  const { isLoading: isLoadingTransactions, data: transactionsData } = useCallApi(
    getUserTransactions,
    mapTransactionsArray,
  );

  return (
    <SafeAreaContainer>
      <Container>
        <Header />
        <CardsList data={cardsData} isLoading={isLoadingCards} />

        <TransactionsList
          data={transactionsData}
          showsVerticalScrollIndicator={false}
          isLoading={isLoadingTransactions}
          ListHeaderComponent={
            <>
              <SectionTitle title={"Servicios"} contained />
              <ActionsTabs />
              <SectionTitle title={"Últimas transacciones"} contained />
            </>
          }
        />
      </Container>
    </SafeAreaContainer>
  );
}
