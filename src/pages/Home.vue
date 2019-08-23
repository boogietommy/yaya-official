<template>
  <div class="home">
    <c-header />
    <section class="hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-medium">
            始创于1982年，我们传递温暖。
          </h1>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    'c-header': Header,
  }
}
</script>

<style lang="scss" scoped>
</style>
