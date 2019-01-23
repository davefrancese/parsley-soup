export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_DATE":
      return action.payload || false;
    case "SAVE_DATE":
      return action.payload || "sup";
    default:
      return state;
  }
}
