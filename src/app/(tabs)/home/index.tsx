/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View } from "react-native";
import CardsList from "../../../components/CardsList";
import TransactionsList from "../../../components/TransactionsList";
import SuscriptionIcon from "../../../../assets/icons/arrows-up-down.svg";
import CashInIcon from "../../../../assets/icons/arrow-down-bold.svg";
import CashOutIcon from "../../../../assets/icons/arrow-up-bold.svg";
import Header from "../../../components/Header";
import { Container, SafeAreaContainer } from "./styles";
import ActionsTabs from "../../../components/ActionsTabs";
import SectionTitle from "../../../components/SectionTitle";

const cardsList = [
  {
    id: 1,
    issuer: "mastercard",
    name: "Soy Paisanx",
    expDate: "2026-03-20",
    lastDigits: 1234,
    balance: "978,85",
    currency: "USD",
  },
  {
    id: 2,
    issuer: "visa",
    name: "Soy Paisanx",
    expDate: "2027-03-20",
    lastDigits: 1234,
    balance: "1000,10",
    currency: "USD",
  },
];

const transactionsArray = [
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
  },
  {
    id: 4,
    title: "Figma",
    amount: "25,00",
    transactionType: "SUS",
    date: "2022-12-01",
  },
  {
    id: 5,
    title: "Alvaro Suarez",
    amount: "20,00",
    transactionType: "CASH_OUT",
    date: "2022-12-01",
  },
  {
    id: 6,
    title: "Angel Echazu",
    amount: "15,00",
    transactionType: "CASH_OUT",
    date: "2022-11-26",
  },
];

const mappedTransactionsArray = transactionsArray.map((el) => {
  let transactionTypeLabel = "";
  let svgFile = null;
  let color = "";

  switch (el.transactionType) {
    case "SUS":
      transactionTypeLabel = "Pago de suscripción";
      svgFile = SuscriptionIcon;
      color = "#B946FF";
      break;
    case "CASH_IN":
      transactionTypeLabel = "Pago recibido";
      svgFile = CashInIcon;
      color = "#74CC9B";
      break;
    case "CASH_OUT":
      transactionTypeLabel = "Pago enviado";
      svgFile = CashOutIcon;
      color = "#EF9C55";
      break;
    // default:
    //   transactionTypeLabel = "Otro"; // Default label for unknown types
    //   svgFile = SuscriptionIcon;
  }

  return { ...el, transactionTypeLabel, svgFile, color };
});

export default function Home(): React.JSX.Element {
  return (
    <SafeAreaContainer>
      <Container>
        <Header />
        <CardsList data={cardsList} />

        <TransactionsList
          data={mappedTransactionsArray}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <SectionTitle title={"Servicios"} />
              <ActionsTabs />
              <SectionTitle title={"Últimas transacciones"} />
            </>
          }
        />
      </Container>
    </SafeAreaContainer>
  );
}
