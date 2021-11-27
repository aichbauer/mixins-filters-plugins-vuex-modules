// you can use eveything from a component
// as a property in a mixin
// e.g.
// data, methods, created, etc...
// use mixins for stuff that you use in
// multiple components
const myMixin = {
  methods: {
    hello() {
      // eslint-disable-next-line
      alert('Hello from the mixin!');
    },
  },
};

export default myMixin;
