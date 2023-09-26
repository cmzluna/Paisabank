import React from "react";
import { TouchableOpacity } from "react-native";

interface BaseButtonProps {
  fontSize?: number;
  onPress?: () => void;
  children?: JSX.Element;
}

const BaseButton = ({
  fontSize,
  onPress,
  children,
  ...props
}: BaseButtonProps): JSX.Element | null => {
  if (!children) return null;

  return (
    <TouchableOpacity activeOpacity={0.45} onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;
