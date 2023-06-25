import 'react-native';
import { service } from '.';
import { api } from '.';
import { Alert } from 'react-native';

const mockGetUserData = {
  data: {
    id: 1,
    email: 'testewill.bluth@reqres.in',
    first_name: 'Will Test',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

// TODO: criar testes dos serviços de api
describe('RequestDefaultService', () => {
  it('should call first name one time', async () => {
    const spyFn = jest.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: mockGetUserData,
      })
    );
    const response = await service.getUserData(1);
    expect(response?.data.first_name).toBe('Will Test');
    expect(spyFn).toBeCalledTimes(1);
  });
  
  it('should return ERR_BAD_REQUEST error', async () => {
    const error = { code: 'ERR_BAD_REQUEST' };
    jest.spyOn(api, 'get').mockRejectedValueOnce(error);

    const alertMock = jest.spyOn(Alert, 'alert');

    await service.getUserData(1);

    expect(alertMock).toHaveBeenCalledWith(`ERRO: ${error.code}`);
  });

  it('should return DEFAULT error', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce({ code: 'DEFAULT' });

    const alertMock = jest.spyOn(Alert, 'alert');

    await service.getUserData(1);

    expect(alertMock).toHaveBeenCalledWith('ERRO DESCONHECIDO');
  });
});
