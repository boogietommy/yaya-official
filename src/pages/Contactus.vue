<template>
  <div class="">
    <c-header />
    <section class="contact-wall hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
        </div>
      </div>
    </section>
    <section class="contact-content container">
      <p class="has-text-centered is-size-4 is-size-6-touch">工厂地址：江苏省扬州市仪征市真州镇胥浦工业区天恒路99号</p>
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
.contact-wall {
  background-image: url('../assets/wall-11.jpg');
  background-position: center;
  background-size: cover;
}
.contact-content {
  padding: 3rem 1rem 2.5rem;
}
</style>
