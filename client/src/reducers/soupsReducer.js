export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_SOUPS":
      return action.payload;
    case "ALL_SOUPS":
      return action.payload;
    case "UPDATE_SOUP":
      return {
        ...state,
        isDaily: action.payload.isDaily,
        isLow: action.payload.isLow,
        isOut: action.payload.isOut
      };
    case "UPDATE_DATE":
      return {
        ...state,
        date: action.payload.date
      };
    default:
      return state;
  }
}
