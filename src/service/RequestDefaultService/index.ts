import { Alert } from 'react-native';
import Axios from 'axios';

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const BASE_URL = 'http://10.0.2.2:3001';

export const api = Axios.create({ baseURL: BASE_URL });

// TODO: criar um CRUD com json server

const getAllUsersData = async () => {
  try {
    return await api.get<UserType[]>('/users');
  } catch (error: any) {
    switch (error.code) {
      case 'ERR_BAD_REQUEST':
        Alert.alert(`ERRO: ${error.code}`);
        break;

      case 'ERR_NETWORK':
        Alert.alert(`ERRO: ${error.code}`);
        break;

      default:
        Alert.alert('ERRO DESCONHECIDO');
        break;
    }
  }
};

const getUserData = async (user: number) => {
  try {
    return await api.get<UserType>(`/users/${user}`);
  } catch (error: any) {
    switch (error.code) {
      case 'ERR_BAD_REQUEST':
        Alert.alert(`ERRO: ${error.code}`);
        break;

      case 'ERR_NETWORK':
        Alert.alert(`ERRO: ${error.code}`);
        break;

      default:
        Alert.alert('ERRO DESCONHECIDO');
        break;
    }
  }
};

// POST
// const addNewUserData = async (user: UserType) => {
//   try {
//     return await api.post<UserType>(`/users/${user}`);
//   } catch (error: any) {
//     switch (error.code) {
//       case 'ERR_BAD_REQUEST':
//         Alert.alert(`ERRO: ${error.code}`);
//         break;

//       case 'ERR_NETWORK':
//         Alert.alert(`ERRO: ${error.code}`);
//         break;

//       default:
//         Alert.alert('ERRO DESCONHECIDO');
//         break;
//     }
//   }
// };

// PUT

export const service = { getAllUsersData, getUserData };
