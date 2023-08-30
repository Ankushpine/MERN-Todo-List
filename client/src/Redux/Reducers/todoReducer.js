import {
  ADD_TODO,
  GET_TODO,
  TOOGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../Actions/todoAction";

const intialState = [];

export default function todoReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case GET_TODO:
      return action.payload;

    case TOOGLE_TODO:
      return state.map((value) => value._id === action.payload._id ? { ...value, done: !value.done }: value);

    case UPDATE_TODO:
      return state.map((value) => value._id === action.payload._id ? { ...value, data: action.payload.data }: value);

    case DELETE_TODO:
      return state.filter((value) => value._id !== action.payload._id);

    default:
      return state;
  }
}
