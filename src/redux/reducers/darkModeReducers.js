import { TOOGLE_DARK_MODE } from "../constants/toggleDarkModeConstants";

const initialState = {
  darkMode: true,
};

export const darkModeReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOOGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
