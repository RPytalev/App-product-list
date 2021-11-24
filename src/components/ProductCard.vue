<template>
  <div class="product-card">
    <input class="delete-checkbox" type="checkbox" :v-bind="product.id">
    <div class="product-description">
      <p>{{ product.SKU }}</p>
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.type }} : {{ product.property }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="sass">
.product-card
  display: flex
  flex-flow: column
  width: calc(25% - 60px)
  height: 16rem
  border: .1rem solid #000
  margin: 2rem

  .delete-checkbox
    display: flex
    align-self: flex-start
    margin-left: 1.5rem
    margin-top: 1.5rem
    background-color: #ff7800

  .product-description
    text-align: center
    line-height: 1.5rem
    vertical-align: middle
</style>
