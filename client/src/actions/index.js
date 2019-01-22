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
  console.log("reached action - ", id, update);
  // const res = await axios.put(`/api/allsoups/${id}`, update);
  const res = axios({
    method: "put",
    url: `/api/allsoups/${id}`,
    body: update
  });
  console.log("after action -> to dispatch");
  dispatch({ type: "UPDATE_SOUP", payload: res.data });
};

export default {
  fetchSoups,
  allSoups,
  updateSoup
};
