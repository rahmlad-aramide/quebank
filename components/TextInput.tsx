// import { TextInput as Input } from "react-native";
import { NativeSyntheticEvent, StyleProp, TextInputFocusEventData, TextInputProps, TextStyle } from "react-native";
import { StyledTextInput } from "./StyledComponents";
import React from "react";

interface ITextInput {
  placeholder: string | undefined;
  value: string | undefined;
  onChange: ((text: string) => void) | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
    rest?: any;
}
export const TextInput: React.FC<ITextInput> = ({
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  rest
}) => {
  return (
    <StyledTextInput
      className={`border border-primary rounded-[10px] h-10 w-full text-[15px] font-bold text-black/50 px-4 flex items-center`}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
};
