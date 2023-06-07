const initialState = {
  allPizzas: [],
  orders: [],
  allCount: 0,
  allPrice: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_COUNT":
      return { ...state, allCount: payload };
    case "SAVE_PRICE":
      return { ...state, allPrice: payload };
    default:
      return state;
  }
};
export default reducer;
