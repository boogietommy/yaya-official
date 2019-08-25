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
      <h1 class="has-text-centered is-size-4 is-size-5-touch">荣誉墙</h1>
      <p class="has-text-centered">...</p>
      <br>
      <p class="has-text-centered">
        <ul>
          <li>
            <span class="is-italic has-text-grey-light">2019</span> 扬州市放心消费创建活动领导小组 诚信品牌企业
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2013</span> 扬州市知名商标 （ 2013 - 2017 ）
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2011</span> 扬州市知名商标 （ 2011 - 2014 ）
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2009</span> 仪征市2008年度工业创优创新 先进单位
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2008</span> 扬州市知名商标 （ 2008 - 2011 ）
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2004</span> 全国家用电器标准化技术委员会取暖熨烫器具分技术委员会 通讯委员单位
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2002</span> 江苏省民营科技企业
          </li>
          <li>
            <span class="is-italic">2002</span> 扬州市职工二次创业 示范基地
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2001</span> 扬州市 光彩之星
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2000</span> 私营企业“双爱双评”活动 先进单位
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2000</span> 扬州市 光彩之星
          </li>
          <li>
            <span class="is-italic has-text-grey-light">2000</span> 中国专利十五年成就展 最佳项目
          </li>
          <li>
            <span class="is-italic has-text-grey-light">1998</span> 中国高新技术新产品博览会 金奖
          </li>
        </ul>
      </p>
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
  background-image: url('../assets/wall-6.jpg');
  background-position: center;
  background-size: cover;
}

.about-content {
  padding: 3rem 1rem 2.5rem;

  h1 {
    margin: 3rem 0 0.5rem;
  }
  li {
    margin-bottom: 0.75rem;
  }
}
</style>
