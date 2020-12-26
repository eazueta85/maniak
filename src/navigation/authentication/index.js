import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/HomeScreen';
//import LogoutScreen from '../../../screens/Home/HomeScreen';

const Stack = createStackNavigator();

export const NoAuthentication = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
