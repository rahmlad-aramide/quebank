import React from 'react';
import { StyledText, StyledTouchableOpacity, StyledView } from './StyledComponents';
import { GestureResponderEvent } from 'react-native';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'text' | 'filled' | 'outlined';
  color?: 'black'| 'gold';
  icon?: React.ReactNode;
  wfit?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined
};

export const TouchableOpacity: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color= 'black',
  icon,
  wfit = false,
  onPress
}) => {
  
  const getButtonStyle = () => {
    switch (variant) {
      case 'text':
        return `bg-transparent mt-1 h-fit ${wfit? 'mt-0 ml-1': 'mt-1'}`;
      case 'outlined':
        return 'border border-primary bg-transparent h-[42px] mt-2.5';
      case 'filled':
      default:
        return 'bg-primary h-[42px] mt-2.5';
    }
  };

  const getTextStyle = () => {
    switch (color) {
      case 'gold':
        return 'text-tertiary font-bold text-xs';
      case 'black':
        return 'text-black font-bold text-sm';
      default:
        return 'text-black';
    }
  };

  return (
    <StyledTouchableOpacity
    onPress={onPress}
      className={`${wfit? 'w-fit': 'w-full'} rounded-[10px] flex flex-row items-center justify-center ${getButtonStyle()}`}
    >
      {icon && <StyledView className="mr-2">{icon}</StyledView>}
      <StyledText className={`font-bold text-sm text-center ${getTextStyle()}`}>
        {children}
      </StyledText>
    </StyledTouchableOpacity>
  );
};
