import React from 'react';
import { StyledText, StyledTouchableOpacity, StyledView } from './StyledComponents';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'text' | 'filled' | 'outlined';
  color?: 'black'| 'gold';
  icon?: React.ReactNode;
};

export const TouchableOpacity: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color= 'black',
  icon,
}) => {
  
  const getButtonStyle = () => {
    switch (variant) {
      case 'text':
        return 'bg-transparent';
      case 'outlined':
        return 'border border-primary bg-transparent';
      case 'filled':
      default:
        return 'bg-primary';
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
      className={`h-[42px] w-full rounded-[10px] mt-2.5 flex flex-row items-center justify-center ${getButtonStyle()}`}
    >
      {icon && <StyledView className="mr-2">{icon}</StyledView>}
      <StyledText className={`font-bold text-sm text-center ${getTextStyle()}`}>
        {children}
      </StyledText>
    </StyledTouchableOpacity>
  );
};
