<template>
  <div class="product-list">
    <ProductCard
      v-for="product in getProducts"
      :key="product.SKU"
      :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    getProducts () {
      return this.$store.state.products
    }
  }
}
</script>

<style lang="sass">
.product-list
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    width: 100%
    overflow: auto
</style>
