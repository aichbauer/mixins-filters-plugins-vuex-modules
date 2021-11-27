// create an Object with one property called install
const MyPlugin = {
  install(Vue) {
    const myVue = Vue;

    // create global methods
    myVue.prototype.myGlobalMethod = () => {
      console.log('Hi global method');
    };

    // create custom directives
    myVue.directive('my-directive', {
      bind() {
        console.log('Hello from plugin directive');
      },
    });

    // create global mixins
    // for stuff needed in every component
    myVue.mixin({
      created() {
        console.log('Hello from the plugins mixin');
      },
    });
  },
};

export default MyPlugin;
