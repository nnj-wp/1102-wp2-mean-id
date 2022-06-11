import React, { useReducer, useContext } from 'react';
import reducer_51 from './reducer_51';
import axios from 'axios';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './action_51';

const initialState = {
  isLoading: false,
  showAlert: false,
  alterText: '',
  alterType: '',
  user: '',
  token: '',
  location: '',
};

const AppContext_51 = React.createContext();

const AppProvider_51 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_51, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/auth_51/${endPoint}`,
        currentUser
      );
      // console.log('register data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/auth_51/${endPoint}`,
        currentUser
      );
      // console.log('login data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const data = await axiosRegister({
        currentUser,
        endPoint,
        alertText,
      });
      console.log('register data', data);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const data = await axiosLogin({
        currentUser,
        endPoint,
        alertText,
      });
      console.log('login data', data);
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext_51.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext_51.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_51);
};

export { AppProvider_51, initialState, useAppContext };
