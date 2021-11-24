<template>
  <div class="btn" id="btn-delete" role="button"
  @click="getId">MASS DELETE</div>
</template>

<script>
export default {
  name: 'BtnDelete',
  data () {
    return {
      checkedCheckbox: null
    }
  },
  methods: {
    getId () {
      this.checkedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked')
      console.log(this.checkedCheckbox)
      const checkedId = []
      this.checkedCheckbox.forEach(id => {
        checkedId.push(id.getAttribute('v-bind'))
      })
      console.log(checkedId)
    }
  }
}
</script>

<style lang="sass">
#btn-delete
  width: 10rem
</style>
