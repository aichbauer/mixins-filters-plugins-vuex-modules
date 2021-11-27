// create a store object for a module
const products = {
  // namespace it so you can use the same methods
  // in multiple modules
  namespaced: true,
  // create the state for the module
  state: {
    loading: true,
    list: [],
  },
  // create the mutations for the module
  mutations: {
    add(state, payload) {
      state.list = [
        ...state.list,
        payload,
      ];
    },
    remove(state, payload) {
      state.list = state.list.filter((product) => product.id !== payload.id);
    },
  },
  // create the actions for the module
  actions: {
  },
};

export default products;
