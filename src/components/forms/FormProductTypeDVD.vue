<template>
  <div id="DVD" class="form">
    <label><p>Size (MB)</p><input id="size" type="text"
    @change.prevent="saveProperty"></label>
    <p class="note">"Please, provide size in MB"</p>
    <p>"Product description"</p>
  </div>
</template>

<script>
export default {
  name: 'FormProductTypeDVD',
  methods: {
    saveProperty (event) {
      const value = event.target.value
      const str = value.match(/^[0-9]+$/g)
      if (value.length > 0) {
        if (!str) {
          alert('Please, provide the data of indicated type')
        }
      } else {
        alert('Please, submit required data')
      }
      this.$store.state.newProduct.property = value
    }
  }
}
</script>

<style lang="sass">

</style>
