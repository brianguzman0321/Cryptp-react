const initialState = {
  currencyDetails: [],
};
// Home Page's Reducer
export default function ownersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHCURRENCYDETAILS':
      return {
        ...state,
        currencyDetails: action.payload,
      };

    default:
      return { ...state };
  }
}
