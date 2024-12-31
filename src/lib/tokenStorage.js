import SecureStore from 'react-native-secure-store';
import jwtDecode from 'jwt-decode';

// Save token securely
export const saveToken = async (token) => {
  await SecureStore.setItemAsync('token', token);
};

// Get token securely
export const getToken = async () => {
  return await SecureStore.getItemAsync('token');
};

// Remove token
export const removeToken = async () => {
  await SecureStore.deleteItemAsync('token');
};

export const isTokenExpired = async () => {
    const token = await getToken();
    if (!token) return true;
    
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  };
