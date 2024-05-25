import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { OnBoardingScreen } from "./Screens/OnBoardingScreen";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}
