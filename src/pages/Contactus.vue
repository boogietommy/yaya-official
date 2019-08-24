<template>
  <div class="">
    <c-header />
    <section class="about-wall hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
        </div>
      </div>
    </section>
    <c-footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    'c-header': Header,
    'c-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
