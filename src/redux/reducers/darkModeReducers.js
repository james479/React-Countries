import { TOOGLE_DARK_MODE } from "../constants/toggleDarkModeConstants";

export const darkModeReducer = (state = { darkMode: true }, { type }) => {
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
