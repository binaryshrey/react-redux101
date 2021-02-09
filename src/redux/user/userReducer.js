import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
  showResult: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
        showResult: true,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: true,
        users: [],
        error: action.payload,
        showResult: false,
      };
    default:
      return state;
  }
};

export default userReducer;
