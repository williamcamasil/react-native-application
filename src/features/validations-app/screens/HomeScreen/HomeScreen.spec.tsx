import 'react-native';
import React from 'react';
import Home from '.';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

const renderScreen = async () => {
  const result = render(
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );

  await waitFor(() => result.UNSAFE_getByType(Home));

  return result;
};

describe('HomeScreen', () => {
  it('should render correctly', async () => {
    const screen = await renderScreen();
    await screen.findByTestId('first-screen');
    expect(screen.getByText('Tela com funcionalidades')).toBeTruthy();
  });

  it('should click on button and navigate to another screen', async () => {
    // const screen = await renderScreen();
    // await screen.findByTestId('first-screen');
    // const button = await screen.findByTestId('navigate-button');
    // fireEvent.press(button);
    // expect(fakeNavigation.navigate).toBeCalledWith('Second');
  });
});
