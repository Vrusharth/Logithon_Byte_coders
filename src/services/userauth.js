import axios from 'axios';
import {API_URL, API_URL_AIML} from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function RegisterUser(body) {
  console.log('inside blogs');

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/registeruser/`, body)
      .then(async response => {
        try {
          await AsyncStorage.setItem('userToken', response.data.Authorization);
          console.log(response.data);
          // console.log(response);
          resolve(response);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      .catch(err => {
        console.log(err.response.data);
        reject(err);
      });
  });
}

async function AddInventory(body) {
  console.log('inside blogs');
  const token = await AsyncStorage.getItem('userToken');

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/postinventory/`, body, config)
      .then(async response => {
        try {
          console.log(response.data);
          // console.log(response);
          resolve(response);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      .catch(err => {
        console.log(err.response.data);
        reject(err);
      });
  });
}

async function GstDetails(body) {
  console.log('inside blogs');
  const token = await AsyncStorage.getItem('userToken');

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/postgstdetails/`, body, config)
      .then(async response => {
        try {
          console.log(response.data);
          // console.log(response);
          await AsyncStorage.setItem('profileComplete', 'profileComplete');
          resolve(response);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      .catch(err => {
        console.log(err.response.data);
        reject(err);
      });
  });
}

async function PostAddItem(body) {
  console.log('inside blogs');
  const token = await AsyncStorage.getItem('userToken');

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/postadditem/`, body, config)
      .then(async response => {
        try {
          console.log(response.data);
          // console.log(response);
          resolve(response);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      .catch(err => {
        console.log(err.response.data);
        reject(err);
      });
  });
}

export const userAuth = {RegisterUser, AddInventory, GstDetails, PostAddItem};
