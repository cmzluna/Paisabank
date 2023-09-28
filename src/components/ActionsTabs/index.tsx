import { Container, Button, TextComp, IconWrapper } from "./styles";
import { SvgXml } from "react-native-svg";

const ActionsTabs = ({ data, ...props }): JSX.Element | null => {
  if (!data) return null;

  return (
    <Container {...props}>
      {data.map(({ title, icon, backgroundColor, ...rest }, id) => {
        return (
          <Button key={id} title={title} {...rest}>
            <IconWrapper backgroundColor={backgroundColor}>
              <SvgXml width="21" height="23" xml={icon} />
            </IconWrapper>
            <TextComp fontSize={16}>{title}</TextComp>
          </Button>
        );
      })}
    </Container>
  );
};

export default ActionsTabs;
