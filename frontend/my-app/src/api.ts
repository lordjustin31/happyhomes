// src/api.ts
import axios, { AxiosRequestConfig } from "axios";
import { getToken, logout } from "./utils/auth";
import API_URL from "./utils/config";

// Helper to get headers with JWT token
const getAuthHeaders = (): AxiosRequestConfig => {
  const token = getToken();
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
};

// Example GET request
export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}/`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout(); // Token invalid or expired
    }
    throw error.response?.data || error.message;
  }
};

// Example POST request
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}/`, data, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout();
    }
    throw error.response?.data || error.message;
  }
};

// Example PUT request
export const putData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.put(`${API_URL}/${endpoint}/`, data, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout();
    }
    throw error.response?.data || error.message;
  }
};

// Example DELETE request
export const deleteData = async (endpoint: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}/`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout();
    }
    throw error.response?.data || error.message;
  }
};
