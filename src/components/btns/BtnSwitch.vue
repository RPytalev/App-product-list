<template>
  <div id="productType" class="switch">
    <div class="base-switch-component">
      <div class="switch-title">Type switcher</div>
      <div id="btn-switch" class="btn" role="button"
      @click="toSwitch">&#9660;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnSwitch',
  methods: {
    toSwitch () {
      this.$store.state.isSwitchOn = !this.$store.state.isSwitchOn
    }
  }
}
</script>

<style lang="sass">
.switch
  position: relative

  .base-switch-component
    display: flex
    width: 12rem
    border: .1rem solid
    margin: 1rem

    .switch-title
      display: flex
      flex: 9
      justify-self: center
      align-self: center
      padding: .4rem 1rem
      border: .1rem solid

    #btn-switch
      display: flex
      flex: 1
      justify-self: center
      align-self: center
      padding: .4rem .6rem
      border: .1rem solid
      user-select: none
      cursor: pointer

    #btn-switch:hover
      background-color: #000
      color: #fff
</style>
