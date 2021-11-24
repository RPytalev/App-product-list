<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <hr align="center" width="90%" size="1" color="#000">
    <main>
      <router-view></router-view>
    </main>
    <hr align="center" width="90%" size="1" color="#000">
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'PageLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
.container
  max-width: 1200px
  margin: 0px auto
  padding: 0px 15px

  header
    width: 100%
    height: 10vh
    padding-top: 4rem
    display: flex
    justify-content: space-between
    align-items: flex-end

    h1
      margin: 0
      padding-left: 7rem

    .btn-area
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: .5rem
      margin-right: 6rem

      .btn
        height: 2.5rem
        padding: .2rem .6rem
        border: .1rem solid #000
        margin: 0 1rem
        line-height: 2rem
        vertical-align: middle
        text-align: center
        cursor: pointer

      .btn:hover
        background-color: #000
        color: #fff

  main
    box-sizing: border-box
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    width: 100%
    text-align: center
    overflow: scroll

  footer
    height: 4vh
    text-align: center
    line-height: 4vh
    vertical-align: middle
</style>
