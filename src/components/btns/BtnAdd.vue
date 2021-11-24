<template>
  <div class="btn" id="btn-add" role="button"
  @click="goToNextPage">ADD</div>
</template>

<script>
export default {
  name: 'BtnAdd',
  methods: {
    goToNextPage () {
      this.$router.push({ name: 'ProductAdd' })
      this.$store.state.isProductList = !this.$store.state.isProductList
    }
  }
}
</script>

<style lang="sass">
#btn-add
  width: 4rem
</style>
