import 'react-native';
import React from 'react';
import HomeScreen from '.';

import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import {
  mockErrorBadRequest,
  mockGetUserData,
} from '../../../../service/RequestDefaultService/RequestDefaultService.spec';
import { api } from '../../../../service/RequestDefaultService';
import { Alert } from 'react-native';

jest.mock('@react-navigation/native');

const renderScreen = async () => {
  const result = render(<HomeScreen />);

  await waitFor(() => result.UNSAFE_getByType(HomeScreen));

  return result;
};

describe('HomeScreen', () => {
  it('should render screen correctly', async () => {
    jest.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: mockGetUserData,
      })
    );
    const screen = await renderScreen();
    await screen.findByTestId('first-screen');
    expect(screen.getByText('Tela com funcionalidades')).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText('FIRST NAME: George')).toBeDefined();
    });
  });

  it('should render screen with error', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockErrorBadRequest);
    const alertMock = jest.spyOn(Alert, 'alert');

    const screen = await renderScreen();
    await screen.findByTestId('first-screen');
    expect(screen.getByText('Tela com funcionalidades')).toBeTruthy();

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(`ERRO: ${mockErrorBadRequest.code}`);
    });
  });

  it('should click on button and navigate to another screen', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

    const screen = await renderScreen();
    await screen.findByTestId('first-screen');
    const button = await screen.findByTestId('navigate-button');
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith('Second');
  });
});
