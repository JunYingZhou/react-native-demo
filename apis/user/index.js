// api.js
import axiosClient from '../../utils/axiosClient';

export const getUser = (userId) => {
  return axiosClient.get(`/users/${userId}`);
};

export const createUser = (userData) => {
  return axiosClient.post('/users', userData);
};

export const updateUser = (userId, userData) => {
  return axiosClient.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axiosClient.delete(`/users/${userId}`);
};

export const login = (userData) => {
    return axiosClient.post('/api/auth/login', userData);
}
