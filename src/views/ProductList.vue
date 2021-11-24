<template>
  <div class="product-list">
    <ProductListing />
  </div>
</template>

<script>
import ProductListing from '../components/ProductListing.vue'
export default {
  name: 'ProductList',
  components: {
    ProductListing
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
  text-align: center
  overflow: scroll
</style>
