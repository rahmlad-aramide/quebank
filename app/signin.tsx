import {
  StyledKeyboardAvoidingView,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from "@/components/StyledComponents";
import { GoogleIcon } from "@/components/SVG";
// import { GoogleIcon } from "@/components/SVG";
import { TextInput } from "@/components/TextInput";
import { TouchableOpacity } from "@/components/TouchableOpacity";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Platform, StatusBar } from "react-native";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Signup logic here (e.g., API call)

    // On successful signup
    try {
      await AsyncStorage.setItem("isSignedUp", "true");
      // Navigate to the sign-in screen or main app screen
    } catch (error) {
      console.log("Error saving sign-up status:", error);
    }
  };
  return (
    <StyledKeyboardAvoidingView
      className={`flex-1 items-center justify-center`}
      style={{ marginTop: StatusBar.currentHeight }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StatusBar barStyle={"dark-content"} />
      <StyledScrollView
        keyboardDismissMode="on-drag"
        className="w-full px-8"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StyledView className="flex-1 items-center justify-center">
          <StyledText className="text-black font-bold text-2xl mb-[30px]">
            Login
          </StyledText>
          <StyledView className="w-full mb-4">
            <TextInput
              placeholder="Email address"
              value={email}
              onChange={setEmail}
            />
          </StyledView>
          <StyledView className="w-full mb-1">
            <TextInput
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
          </StyledView>
          <StyledView className="flex self-end">
            <TouchableOpacity variant="text" color="gold">
              Forgot password?
            </TouchableOpacity>
          </StyledView>
          <TouchableOpacity>Login</TouchableOpacity>
          <StyledView className="flex flex-row items-center w-full mt-[30px]">
            <StyledView className="flex w-auto flex-grow h-0.5 bg-black/30"></StyledView>
            <StyledText className="w-auto mx-2.5 -mt-1">or</StyledText>
            <StyledView className="flex w-auto flex-grow h-0.5 bg-black/30"></StyledView>
          </StyledView>
          <TouchableOpacity variant="outlined" icon={<GoogleIcon />}>
            Continue with Google
          </TouchableOpacity>
          <StyledView className="flex flex-row items-center justify-start w-full mt-3">
            <StyledText className="text-xs font-bold">
              Don't have an account yet?
            </StyledText>
            <TouchableOpacity variant="text" wfit={true} color="gold">
              Sign up
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  );
}
