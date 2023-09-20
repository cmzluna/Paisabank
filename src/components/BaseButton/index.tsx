import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextComp} from './styles';

interface BaseButtonProps {
  title: string;
  fontSize?: number;
  onPress: () => void;
}

const BaseButton = ({
  title,
  fontSize,
  onPress,
  ...props
}: BaseButtonProps): JSX.Element | null => {
  if (!title) return null;

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} {...props}>
      <TextComp fontSize={fontSize}>{title}</TextComp>
    </TouchableOpacity>
  );
};

export default BaseButton;
