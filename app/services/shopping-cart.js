import Ember from 'ember';

export default Ember.Service.extend({
  cart: [
    {color: 'red', size: '1 x 1', price: '0.01'},
    {color: 'blue', size: '2 x 4', price: '0.04'},
    {color: 'green', size: '2 x 8', price: '0.08'},
  ],

  getCart() {
    return this.get('cart');
  }

});
