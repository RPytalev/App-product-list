<template>
  <div class="btn" id="btn-cancel" role="button" @click="goToPrevPage">Cancel</div>
</template>

<script>
export default {
  name: 'BtnCancel',
  methods: {
    goToPrevPage () {
      this.$router.push({ name: 'ProductList' })
      this.$store.state.isProductList = !this.$store.state.isProductList
    }
  }
}
</script>

<style lang="sass">
#btn-cancel
  width: 6rem
</style>
