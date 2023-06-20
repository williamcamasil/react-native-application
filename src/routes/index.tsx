import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import { ThemeProvider } from '../styles';

const Routes = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
