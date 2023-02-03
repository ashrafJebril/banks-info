const Example = {
  name: "example",
  state: {
    user: "ashraf",
  },
  reducers: {
    user(state, payload) {
      return { ...state, user: payload };
    },
  },
  effects: (dispatch) => ({}),
};

export default Example;
