import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get('window');

export const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/message.json")}
                autoPlay
                loop
              />
            ),
            title: "Onboarding 1",
            subtitle: "Done with React Native Onboarding Swiper 1",
          },
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/security.json")}
                autoPlay
                loop
              />
            ),
            title: "Onboarding 2",
            subtitle: "Done with React Native Onboarding Swiper 2",
          },
          {
            backgroundColor: "#000",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/likeShare.json")}
                autoPlay
                loop
              />
            ),
            title: "Onboarding 3",
            subtitle: "Done with React Native Onboarding Swiper 3",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  lottie: {
    width: width * 0.9,
    height: width
  },
});