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
import { Link, router } from "expo-router";
import { useState } from "react";
import { Platform, StatusBar } from "react-native";

export default function SignupScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


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
            Sign Up
          </StyledText>
          <StyledView className="w-full mb-4">
            <TextInput
              placeholder="Full name"
              value={fullName}
              onChange={setFullName}
            />
          </StyledView>
          <StyledView className="w-full mb-4">
            <TextInput
              placeholder="Email address"
              value={email}
              onChange={setEmail}
            />
          </StyledView>
          <StyledView className="w-full mb-4">
            <TextInput
              placeholder="Password"
              value={password}
              onChange={setPassword}
              secureTextEntry={true}
            />
          </StyledView>
          <StyledView className="w-full mb-1">
            <TextInput
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              secureTextEntry={true}
            />
          </StyledView>
          <StyledView className="flex self-end">
            <TouchableOpacity variant="text" color="gold">
              Forgot password?
            </TouchableOpacity>
          </StyledView>
          <TouchableOpacity onPress={()=>router.navigate('/(tabs)')}>Login</TouchableOpacity>
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
              Already have an account?
            </StyledText>
            <TouchableOpacity onPress={()=>router.navigate('/signin')} variant="text" wfit={true} color="gold">
              Sign in
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  );
}
