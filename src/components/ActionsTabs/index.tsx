import { Container, Button, TextComp, IconWrapper } from "./styles";
import WalletIcon from "../../../assets/icons/wallet.svg";
import TransferIcon from "../../../assets/icons/transfer.svg";
import PaymentIcon from "../../../assets/icons/payment.svg";
import RechargeIcon from "../../../assets/icons/recharge.svg";
import { SvgXml } from "react-native-svg";

const buttonsData = [
  {
    id: 1,
    title: "Billetera",
    icon: WalletIcon,
    backgroundColor: "#E4FFF0",
  },
  {
    id: 2,
    title: "Transferir",
    icon: TransferIcon,
    backgroundColor: "#FEEAD4",
  },
  {
    id: 3,
    title: "Pagar",
    icon: PaymentIcon,
    backgroundColor: "#EEE3FF",
  },
  {
    id: 4,
    title: "Recargar",
    icon: RechargeIcon,
    backgroundColor: "#CAF0FF",
  },
];

const ActionsTabs = ({ ...props }): JSX.Element | null => {
  return (
    <Container>
      {buttonsData.map(({ title, icon, backgroundColor, ...rest }, id) => {
        return (
          <Button key={id} title={title} {...rest}>
            <>
              <IconWrapper backgroundColor={backgroundColor}>
                <SvgXml width="21" height="23" xml={icon} />
              </IconWrapper>
              <TextComp fontSize={16}>{title}</TextComp>
            </>
          </Button>
        );
      })}
    </Container>
  );
};

export default ActionsTabs;
