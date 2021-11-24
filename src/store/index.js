import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 101,
        SKU: 1,
        type: 'DVD',
        name: 'Acme DISC',
        price: '1.00 $',
        property: '700 MB'
      },
      {
        id: 102,
        SKU: 2,
        type: 'DVD',
        name: 'Acme DISC',
        price: '1.00 $',
        property: '700 MB'
      },
      {
        id: 103,
        SKU: 3,
        type: 'DVD',
        name: 'Acme DISC',
        price: '1.00 $',
        property: '700 MB'
      },
      {
        id: 104,
        SKU: 4,
        type: 'DVD',
        name: 'Acme DISC',
        price: '1.00 $',
        property: '700 MB'
      },
      {
        id: 105,
        SKU: 5,
        type: 'Book',
        name: 'War and Peace',
        price: '20.00 $',
        property: '2 KG'
      },
      {
        id: 106,
        SKU: 6,
        type: 'Book',
        name: 'War and Peace',
        price: '20.00 $',
        property: '2 KG'
      },
      {
        id: 107,
        SKU: 7,
        type: 'Book',
        name: 'War and Peace',
        price: '20.00 $',
        property: '2 KG'
      },
      {
        id: 108,
        SKU: 8,
        type: 'Book',
        name: 'War and Peace',
        price: '20.00 $',
        property: '2 KG'
      },
      {
        id: 109,
        SKU: 9,
        type: 'Furniture',
        name: 'Chair',
        price: '40.00 $',
        property: '24x45x15'
      },
      {
        id: 110,
        SKU: 10,
        type: 'Furniture',
        name: 'Chair',
        price: '40.00 $',
        property: '24x45x15'
      },
      {
        id: 111,
        SKU: 11,
        type: 'Furniture',
        name: 'Chair',
        price: '40.00 $',
        property: '24x45x15'
      },
      {
        id: 112,
        SKU: 12,
        type: 'Furniture',
        name: 'Chair',
        price: '40.00 $',
        property: '24x45x15'
      }
    ],
    newProduct: {
      id: '',
      SKU: '',
      type: '',
      name: '',
      price: '',
      property: ''
    },
    isProductList: true,
    isSwitchOn: false,
    isSelectDVD: false,
    isSelectBook: false,
    isSelectFurniture: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
