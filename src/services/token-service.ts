import { decodeToken } from "react-jwt";

function saveToken<T>(tokenKey: string, token: T) {
  window.localStorage.setItem(tokenKey, JSON.stringify(token));
}

function getToken<T>(tokenKey: string) {
  const token = window.localStorage.getItem(tokenKey);
  return token ? (JSON.parse(token) as T) : null;
}

function clearToken(tokenKey: string) {
  window.localStorage.removeItem(tokenKey);
}

function hasToken(tokenKey: string) {
  return !!getToken(tokenKey);
}

function parseJwt<T>(jwt: string) {
  return decodeToken<T>(jwt);
}

export default {
  saveToken,
  getToken,
  clearToken,
  hasToken,
  parseJwt,
};
