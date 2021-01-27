import { createContext, useReducer } from 'react';
import { authTypes } from '../utils';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
};

if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN:
      return {
        ...state,
        user: payload,
      };
    case authTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem('jwtToken', userData.token);
    dispatch({
      type: authTypes.LOGIN,
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem('jwtToken');
    dispatch({ type: authTypes.LOGOUT });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
