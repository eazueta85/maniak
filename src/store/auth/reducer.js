import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_GET_TOKEN,
  LOGIN_TOKEN_ERROR,
  LOGOUT_SUCCESS,
} from './types';

const initState = {
  loading: false,
  isLoggedIn: false,
  error: false,
  errorToken: false,
  user: null,
  token: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        ...{loading: true},
        ...{isLoggedIn: false},
        user: null,
        token: null,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...{loading: false},
        ...{isLoggedIn: true},
        ...{user: action.payload.data},
        ...{token: action.payload.token},
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        ...{loading: false},
        ...{isLoggedIn: false},
        user: null,
        token: null,
        error: true,
      };
    case LOGIN_GET_TOKEN:
      return {
        ...state,
        ...{loading: true},
        ...{token: action.payload.token},
      };
    case LOGIN_TOKEN_ERROR:
      return {
        ...state,
        ...{loading: false},
        ...{isLoggedIn: false},
        user: null,
        token: null,
        error: false,
        errorToken: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...{loading: false},
        ...{isLoggedIn: false},
        user: null,
        token: null,
        error: false,
      };
    default:
      return state;
  }
}

export default reducer;
