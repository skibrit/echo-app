import ProductList from "../data/dataStore.json";

const initialState = {
  store: ProductList,
};

export default function adminReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
