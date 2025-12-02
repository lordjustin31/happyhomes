// src/utils/auth.ts
export const setToken = (token: string) => {
  localStorage.setItem('access', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('access');
};

export const logout = () => {
  localStorage.removeItem('access');
};
