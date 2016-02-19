import Ember from 'ember';

export default Ember.Service.extend({
  cart: [],

  addToCart(color, size, price) {
    this.get('cart').push({color: color, size: size, price: price});
  },

  getCart() {
    return this.get('cart');
  }

});
