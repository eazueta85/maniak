import {
    LOGIN_REQUEST,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_TOKEN_VALID,
    LOGIN_GET_TOKEN,
    LOGOUT,
    LOGOUT_SUCCESS,
  } from './types';
  
  export function loginRequest(request) {
    return {type: LOGIN_REQUEST, request};
  }
  
  export function loginStart() {
    return {type: LOGIN_START};
  }
  
  export function loginSuccess(data, token) {
    return {type: LOGIN_SUCCESS, payload: {data, token}};
  }
  
  export function loginError() {
    return {type: LOGIN_ERROR};
  }
  
  export function loginTokenValid() {
    return {type: LOGIN_TOKEN_VALID};
  }
  
  export function loginGetToken(token) {
    return {type: LOGIN_GET_TOKEN, payload: {token}};
  }
  
  export function logOut() {
    return {type: LOGOUT};
  }
  
  export function logOutSuccess() {
    return {type: LOGOUT_SUCCESS};
  }
  