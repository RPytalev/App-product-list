<template>
  <header>
    <h1 v-if="getDisplayStatus">Product list</h1>
    <h1 v-if="!getDisplayStatus">Product Add</h1>
    <div class="btn-area">
      <BtnAdd v-if="getDisplayStatus" />
      <BtnDelete v-if="getDisplayStatus" />
      <BtnSave v-if="!getDisplayStatus" />
      <BtnCancel v-if="!getDisplayStatus" />
    </div>
  </header>
</template>

<script>
import BtnAdd from './btns/BtnAdd.vue'
import BtnDelete from './btns/BtnDelete.vue'
import BtnSave from './btns/BtnSave.vue'
import BtnCancel from './btns/BtnCancel.vue'
export default {
  name: 'Header',
  components: {
    BtnAdd,
    BtnDelete,
    BtnSave,
    BtnCancel
  },
  computed: {
    getDisplayStatus () {
      return this.$store.state.isProductList
    }
  }
}
</script>

<style lang="sass">

</style>
