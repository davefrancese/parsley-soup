export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_SOUPS":
      return action.payload;
    case "ALL_SOUPS":
      return action.payload;
    case "UPDATE_SOUP":
      return action.payload;
    default:
      return state;
  }
}
