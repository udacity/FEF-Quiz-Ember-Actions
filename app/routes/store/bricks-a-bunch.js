import Ember from 'ember';

export default Ember.Route.extend({
  warehouse: Ember.inject.service('brick-warehouse'),

  actions: {
    addToCart: function(color, size, price) {
      console.log(color, size, price);
    }
  },

  model() {
    return this.get('warehouse').getRedBricks();
  }
});
