import 'react-native';
import React from 'react';
import Home from '.';

import { NavigationContainer } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';

const renderScreen = async () => {
  const result = render(
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );

  await waitFor(() => result.UNSAFE_getByType(Home));

  return result;
};

it('renders correctly', () => {
  const screen = render(<Home />);
  screen.getByText('Testes');
});