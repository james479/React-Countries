import axios from "axios";
import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
} from "../constants/countryConstants";

export const listCountries = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_LIST_REQUEST });
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    dispatch({
      type: COUNTRY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
