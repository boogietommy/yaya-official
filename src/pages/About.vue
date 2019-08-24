<template>
  <div class="about">
    <c-header />
    <section class="about-wall hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
        </div>
      </div>
    </section>
    <section class="about-content container">
      <p>扬州鸭鸭电器有限公司是专业生产鸭鸭牌电热毯及其他取暖用品的江苏省民营科技企业，从二十世纪80年代初就致力于电热毯的研究、开发、生产，公司拥有专业的检测设备和完善的测试手段，并拥有一支专业质量管理队伍，建立了质量管理体系，以提供环保的安全性产品为目标，不断提升产品质量，为大众创造温暖、舒适的生活环境贡献出自己的力量。</p>
      <p></p>
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
.about-wall {

}

.about-content {
  padding: 5rem 1rem 2.5rem;
}
</style>
