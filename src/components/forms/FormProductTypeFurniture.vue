<template>
  <div id="Furniture" class="form">
    <label><p>Height (CM)</p><input id="height" type="text"
    @change.prevent="saveHeight"></label>
    <label><p>Width (CM)</p><input id="width" type="text"
    @change.prevent="saveWidth"></label>
    <label><p>Length (CM)</p><input id="length" type="text"
    @change.prevent="saveLength"></label>
    <p class="note">"Please, provide dimensions in HxWxL format"</p>
    <p>"Product description"</p>
  </div>
</template>

<script>
export default {
  name: 'FormProductTypeFurniture',
  data () {
    return {
      height: null,
      width: null,
      length: null,
      property: null
    }
  },
  methods: {
    saveHeight (event) {
      const value = event.target.value
      const str = value.match(/^[0-9]+$/g)
      if (value.length > 0) {
        if (!str) {
          alert('Please, provide the data of indicated type')
        }
      } else {
        alert('Please, submit required data')
      }
      this.height = value
    },
    saveWidth (event) {
      const value = event.target.value
      const str = value.match(/^[0-9]+$/g)
      if (value.length > 0) {
        if (!str) {
          alert('Please, provide the data of indicated type')
        }
      } else {
        alert('Please, submit required data')
      }
      this.width = value
    },
    saveLength (event) {
      const value = event.target.value
      const str = value.match(/^[0-9]+$/g)
      if (value.length > 0) {
        if (!str) {
          alert('Please, provide the data of indicated type')
        }
      } else {
        alert('Please, submit required data')
      }
      this.length = value
      this.property = this.height + 'x' + this.width + 'x' + this.length
      this.$store.state.newProduct.property = this.property
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  display: flex
  flex-flow: column
</style>
