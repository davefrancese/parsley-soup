export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_DATE":
      return action.payload || false;
    case "UPDATE_DATE":
      console.log("reducer payload return=", action.payload);
      return action.payload;
    default:
      return state;
  }
}
