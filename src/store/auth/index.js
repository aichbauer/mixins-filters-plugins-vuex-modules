// create a store object for a module
const auth = {
  // namespace it so you can use the same methods
  // in multiple modules
  namespaced: true,
  // create the state for the module
  state: {
    loading: true,
    user: {
      id: null,
      username: null,
    },
  },
  // create the mutations for the module
  mutations: {
    login(state, payload) {
      state.loading = false;
      state.user = payload;
    },
  },
  // create the actions for the module
  actions: {},
};

export default auth;
