import 'react-native';
import { service } from '.';
import { api } from '.';
import { Alert } from 'react-native';

export const mockGetUserData = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
];

export const mockErrorBadRequest = { code: 'ERR_BAD_REQUEST' };
const mockErrorNetWork = { code: 'ERR_NETWORK' };
const mockErrorDefault = { code: 'DEFAULT' };

describe('RequestDefaultService', () => {
  it('should call first name one time', async () => {
    const spyFn = jest.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: mockGetUserData,
      })
    );
    const response = await service.getAllUsersData();
    expect(response?.data[0].first_name).toBe('George');
    expect(spyFn).toBeCalledTimes(1);
  });

  it('should return ERR_BAD_REQUEST error', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockErrorBadRequest);
    const alertMock = jest.spyOn(Alert, 'alert');

    await service.getAllUsersData();
    expect(alertMock).toHaveBeenCalledWith(`ERRO: ${mockErrorBadRequest.code}`);
  });

  it('should return ERR_NETWORK error', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockErrorNetWork);
    const alertMock = jest.spyOn(Alert, 'alert');

    await service.getAllUsersData();
    expect(alertMock).toHaveBeenCalledWith(`ERRO: ${mockErrorNetWork.code}`);
  });

  it('should return DEFAULT error', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockErrorDefault);
    const alertMock = jest.spyOn(Alert, 'alert');

    await service.getAllUsersData();
    expect(alertMock).toHaveBeenCalledWith('ERRO DESCONHECIDO');
  });
});
