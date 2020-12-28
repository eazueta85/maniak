import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key) =>
  await AsyncStorage.getItem(key).then((item) => JSON.parse(item));

export const setStorage = async (key, value) =>
  await AsyncStorage.setItem(key, JSON.stringify(value)).then((item) => item);

export const removeStorage = async (key) =>
  await AsyncStorage.removeItem(key).then((item) => item);
