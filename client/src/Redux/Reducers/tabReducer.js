import { TOOGLE_TAB, ALL_TODO } from "../Actions/todoAction";

export const tabReducer = (state = ALL_TODO, action) => {
  switch (action.type) {
    case TOOGLE_TAB:
      return action.filter;

    default:
      return state;
  }
};
