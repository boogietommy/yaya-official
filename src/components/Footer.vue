<template>
  <div class="home-footer">
    <section class="home-contact">
      <div class="container">
        <div class="columns">
          <p class="column is-half is-flex ques is-hidden-touch">有什么问题吗？我们随时欢迎您的咨询</p>
          <div class="column has-text-centered-touch	">
            <p class="is-size-7 has-text-grey" style="margin-bottom:0.75rem;">接听时间 周一至周六 9:00 - 17:00 （法定节日除外）</p>
            <p class="is-size-4"><a href="tel:051483416386" class="has-text-primary">0514 - 83416386</a><small class="is-size-6 has-text-white">（电子商务）</small></p>
            <p class="is-size-4"><a href="tel:051485717508" class="has-text-primary">0514 - 85717508</a><small class="is-size-6 has-text-grey">（电子商务）</small></p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="is-size-7 has-text-grey-dark">
          Copyright © 2019 扬州鸭鸭电器有限公司. All rights reserved.
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32108102010261" class="has-text-grey">苏公网安备 32108102010261号</a>
          <a href="http://www.miibeian.gov.cn/" class="has-text-grey">苏ICP备16021636号-1</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.home-contact {
  margin-top: 5rem;
  padding: 5rem 0;
  border-top: 1px solid hsl(0, 0%, 86%);

  .ques {
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
