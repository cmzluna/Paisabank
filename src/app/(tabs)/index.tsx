/* eslint-disable react-native/no-inline-styles */
import CardsList from "../../components/CardsList";
import TransactionsList from "../../components/TransactionsList";
import SuscriptionIcon from "../../../assets/icons/arrows-up-down.svg";
import CashInIcon from "../../../assets/icons/arrow-down-bold.svg";
import CashOutIcon from "../../../assets/icons/arrow-up-bold.svg";
import MastercardIcon from "../../../assets/icons/issuers/mastercard.svg";
import VisaIcon from "../../../assets/icons/issuers/visa.svg";
import Header from "../../components/Header";
import { Container, SafeAreaContainer } from "./styles";
import ActionsTabs from "../../components/ActionsTabs";
import SectionTitle from "../../components/SectionTitle";
import useCallApi from "../../hooks/useCallApi";
import getUserCards from "../../services/getUserCards";
import { mapCardsArray, mapTransactionsArray } from "../../utils";
import { setCards } from "../../store/slices/cards";
import getUserTransactions from "../../services/getUserTransactions";
import { setTransactions } from "../../store/slices/transactions";

export default function Home(): React.JSX.Element {
  const { isLoading: isLoadingCards, data: cardsData } = useCallApi(
    getUserCards,
    mapCardsArray,
    setCards,
  );
  const { isLoading: isLoadingTransactions, data: transactionsData } = useCallApi(
    getUserTransactions,
    mapTransactionsArray,
    setTransactions,
  );

  return (
    <SafeAreaContainer>
      <Container>
        <Header />
        <CardsList isLoading={isLoadingCards} data={cardsData} />

        <TransactionsList
          data={transactionsData}
          isLoading={isLoadingTransactions}
          showsVerticalScrollIndicator={false}
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
