import { Alert } from 'react-native';
import Axios from 'axios';

type SupportUserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type DataUserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserType = {
  data: DataUserType;
  support: SupportUserType;
};

const BASE_URL = 'https://reqres.in/';

export const api = Axios.create({ baseURL: BASE_URL });

// TODO: criar um CRUD com json server

const getUserData = async (userNumber: number) => {
  try {
    console.log('entrou aqui_1');
    return (await api.get<UserType>(`api/users/${userNumber}`)).data;
  } catch (error: any) {
    console.log('entrou aqui_2');
    switch (error.code) {
      case 'ERR_BAD_REQUEST':
        Alert.alert(`ERRO: ${error.code}`);
        break;

      default:
        Alert.alert('ERRO DESCONHECIDO');
        break;
    }
  }
};

export const service = { getUserData };
