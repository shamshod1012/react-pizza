const initialState = {
  pizzas: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default reducer;
