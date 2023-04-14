import React, { useState, createContext, useReducer } from 'react';
import { setAuthToken } from '../config/Api';


export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
}

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // add case "USER_SUCCESS" here ..
    case 'LOGIN_SUCCESS':
      // Set localstorage item with key "token" here ...
      localStorage.setItem("id", payload.id)
      localStorage.setItem("token", payload.token)
      localStorage.setItem("role", payload.role)

      return {
        isLogin: true,
        user: payload,
      }
    // add case "AUTH_ERROR" here ..
    case 'LOGOUT':
      // Remove localstorage item with key "token" here ...
      localStorage.removeItem("id")
      localStorage.removeItem("token")
      localStorage.removeItem("role")

      return {
        isLogin: false,
        user: {},
      }
    default:
      throw new Error();
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}