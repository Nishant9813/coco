
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBoardingScreen } from '../Screens/OnBoardingScreen';
import { StatusBar } from 'expo-status-bar';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='home' component={OnBoardingScreen} options={{headerShown : false}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigation;
