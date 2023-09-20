import styled from 'styled-components/native';

interface TextCompProps {
  fontSize?: number;
}

const TextComp = styled.Text`
  color: #fff;
  font-size: ${({fontSize}: TextCompProps) => fontSize ?? 12}px;
  font-family: 'AvenirLTStd-Black';
`;

export {TextComp};
