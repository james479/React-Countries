import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
} from "../constants/countryConstants";

export const countryListReducer = (
  state = { countries: [] },
  { type, payload }
) => {
  switch (type) {
    case COUNTRY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: payload,
      };
    default:
      return state;
  }
};
