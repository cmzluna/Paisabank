/* eslint-disable react-native/no-inline-styles */
import { Container, Input, SearchIconWrapper } from "./styles";
import SearchIcon from "../../../assets/icons/search.svg";

interface InputSearchProps {
  value: string;
  onChangeText: (text: string) => void;
}
const InputSearch = ({ value, onChangeText, ...props }: InputSearchProps): React.JSX.Element => {
  return (
    <Container {...props}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={"Ingresa un nombre o un número"}
      />

      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Container>
  );
};

export default InputSearch;
