import {
  StyledScrollView,
  StyledText,
  StyledView,
} from "@/components/StyledComponents";

export default function SigninScreen() {
  return (
    <StyledScrollView>
      <StyledView className="flex-1 items-center justify-center bg-red-500">
        <StyledText className="text-white">
          Sign in screen
        </StyledText>
      </StyledView>
    </StyledScrollView>
  );
}
