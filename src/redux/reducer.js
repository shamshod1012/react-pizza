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
    case "SAVE_ALL_PIZZAS":
      return { ...state, allPizzas: payload };
    default:
      return state;
  }
};
export default reducer;
