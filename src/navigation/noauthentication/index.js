import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SignInScreen,
} from '../../screens/Auth';

const Stack = createStackNavigator();

export const NoAuthentication = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
