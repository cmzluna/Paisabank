import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export interface Contact {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  addedDate: string;
}

export interface Card {
  id: number;
  issuer: string;
  name: string;
  expDate: string;
  lastDigits: number;
  balance: string;
  currency: string;
}

export interface Transaction {
  id: number;
  title: string;
  amount: string;
  transactionType: string;
  date: string;
}

export interface ParsedTransaction extends Transaction {
  transactionTypeLabel: string;
  svgFile: FC<SvgProps>;
  color: string;
}
