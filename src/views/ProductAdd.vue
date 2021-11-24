<template>
  <div class="product-add">
    <form name="product_form">
      <label><input name="product_form" id="product_form" type="text"
    @change.prevent="saveId"></label>
    </form>
    <div class="form">
      <label><p>SKU</p><input id="sku" type="text"
      @change.prevent="saveSKU"></label>
      <label><p>Name</p><input id="name" type="text"
      @change.prevent="saveName"></label>
      <label><p>Price ($)</p><input id="price" type="text"
      @change.prevent="savePrice"></label>
    </div>
    <div class="dropdown">
      <p>Type switcher</p>
      <BtnSwitch />
      <div class="dropdown-menu" v-show="this.$store.state.isSwitchOn">
        <a class="dropdown-item" href="#" @click="toSelectForm">DVD</a>
        <a class="dropdown-item" href="#" @click="toSelectForm">Furniture</a>
        <a class="dropdown-item" href="#" @click="toSelectForm">Book</a>
      </div>
    </div>
    <div class="types-forms-display">
      <FormProductTypeDVD v-show="this.$store.state.isSelectDVD" />
      <FormProductTypeFurniture v-show="this.$store.state.isSelectFurniture" />
      <FormProductTypeBook v-show="this.$store.state.isSelectBook" />
    </div>
  </div>
</template>

<script>
import FormProductTypeDVD from '../components/forms/FormProductTypeDVD'
import FormProductTypeFurniture from '../components/forms/FormProductTypeFurniture'
import FormProductTypeBook from '../components/forms/FormProductTypeBook'
import BtnSwitch from '../components/btns/BtnSwitch'
export default {
  name: 'ProductAdd',
  components: {
    FormProductTypeDVD,
    FormProductTypeFurniture,
    FormProductTypeBook,
    BtnSwitch
  },
  // data () {
  //   return {
  //     newProduct: {
  //       id: '',
  //       SKU: '',
  //       type: '',
  //       name: '',
  //       price: '',
  //       property: ''
  //     }
  //   }
  // },
  methods: {
    toSelectForm (event) {
      const type = event.target.innerText
      if (type === 'DVD') {
        this.$store.state.isSelectDVD = !this.$store.state.isSelectDVD
        this.$store.state.newProduct.type = type
      } else if (type === 'Furniture') {
        this.$store.state.isSelectFurniture = !this.$store.state.isSelectFurniture
        this.$store.state.newProduct.type = type
      } else if (type === 'Book') {
        this.$store.state.isSelectBook = !this.$store.state.isSelectBook
        this.$store.state.newProduct.type = type
      }
      this.$store.state.isSwitchOn = !this.$store.state.isSwitchOn
    },
    saveId (event) {
      const value = event.target.value
      if (value.length > 0) {
        this.$store.state.newProduct.id = value
      } else {
        alert('Please, change required data')
      }
    },
    saveSKU (event) {
      const value = event.target.value
      if (value.length > 0) {
        this.$store.state.newProduct.SKU = value
      } else {
        alert('Please, change required data')
      }
    },
    saveName (event) {
      const value = event.target.value
      if (value.length > 0) {
        this.$store.state.newProduct.name = value
      } else {
        alert('Please, change required data')
      }
    },
    savePrice (event) {
      const value = event.target.value
      if (value.length > 0) {
        this.$store.state.newProduct.price = value
      } else {
        alert('Please, change required data')
      }
    }
  }
}
</script>

<style lang="sass">
.product-add
  display: flex
  width: 100%
  flex-flow: column
  justify-content: center
  align-items: center

  p
    padding-top: .5rem

  input
    width: 30rem
    height: 2.5rem
    margin: 1rem

  .note
    color: red

  input:focus,
  input:active
    outline: none
    border: .1rem solid #ff7800
    caret-color: #ff7800

  .form
    display: flex
    flex-flow: column
    padding-left: 1rem
    margin: 1rem
    text-align: left
    background-color: #c4c4c4

    label
      display: flex
      justify-content: space-between

  .dropdown
    position: relative
    display: flex

    .dropdown-menu
      position: absolute
      top: 3.3rem
      left: 7.89rem
      display: flex
      flex-flow: column
      width: 9.6rem
      border: .1rem solid
      user-select: none

      a
        padding: .4rem 1rem
        text-decoration: none
        color: #000

      a:hover
        background-color: #000
        color: #fff

  .types-forms-display
    margin-top: 6.3rem
</style>
