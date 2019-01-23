// ACTIONS
import axios from "axios";

export const fetchSoups = () => async dispatch => {
  const res = await axios.get("/api/dailysoups");
  dispatch({ type: "FETCH_SOUPS", payload: res.data });
};

export const allSoups = () => async dispatch => {
  const res = await axios.get("/api/allsoups");
  dispatch({ type: "ALL_SOUPS", payload: res.data });
};

export const updateSoup = (id, update) => async dispatch => {
  const res = await axios.put(`/api/allsoups/${id}`, update);
  dispatch({ type: "UPDATE_SOUP", payload: res.data });
};

export const fetchDate = () => async dispatch => {
  const res = await axios.get("/api/date");
  dispatch({ type: "FETCH_DATE", payload: res.data });
};

export const updateDate = event => async dispatch => {
  event.preventDefault();
  console.log("action", event.target.date.value);
  const update = { date: event.target.date.value };
  const res = await axios.put(`/api/date/change`, update);
  console.log("res.data=", res.data);
  dispatch({ type: "UPDATE_DATE", payload: res.data });
};

export default {
  fetchSoups,
  allSoups,
  updateSoup,
  fetchDate,
  updateDate
};
