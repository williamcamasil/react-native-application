import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../features/validations-app/screens/HomeScreen';
import Second from '../features/validations-app/screens/SecondScreen';

import NavigatorParamList from './types';

const Stack = createNativeStackNavigator<NavigatorParamList>();

function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
