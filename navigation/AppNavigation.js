
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBoardingScreen } from '../Screens/OnBoardingScreen';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Onboarding' component={OnBoardingScreen} options={{headerShown : false}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigation;
