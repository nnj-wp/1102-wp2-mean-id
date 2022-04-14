import React, { useReducer, useContext } from 'react';
import reducer_51 from './reducer_51';
import { DISPLAY_ALERT, CLEAR_ALERT } from './action_51';

const initialState = {
  isLoading: false,
  showAlert: false,
  alterText: '',
  alterType: '',
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

  return (
    <AppContext_51.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext_51.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_51);
};

export { AppProvider_51, initialState, useAppContext };
