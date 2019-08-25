<template>
  <div class="home">
    <c-header />
    <section class="home-wall hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-medium is-size-6-touch">
            始创于1982年，我们一直传递温暖。
          </h1>

        </div>
      </div>
    </section>
    <section class="home-ad container has-text-centered">
      <h1 class="title is-4 has-text-weight-normal is-size-6-touch">
        安全可靠，高品质赢得信赖!
      </h1>
      <h2 class="subtitle is-6 is-size-7-touch has-text-grey has-text-weight-light">鸭鸭电热毯采用以下技术保障客户安全</h2>
    </section>
    <section class="home-detail container">
      <div class="columns">
        <div class="box is-radiusless is-shadowless column">
          <article class="media is-flex">
            <div class="media-left is-hidden">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 is-size-6-touch has-text-weight-normal is-marginless">双螺旋发热丝</h3>
                <p class="has-text-grey-dark is-size-7-touch">
                  新型发热元件，采用新型合金织丝，低阻值、高导率、高热效率的发热元件，升温迅速，断线不起弧，杜绝火宅。表面耐高温温度达105度左右。鸭鸭电热毯发热均匀，预热升温快，使用寿命长。
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box is-radiusless is-shadowless column">
          <article class="media is-flex">
            <div class="media-left is-hidden">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 is-size-6-touch has-text-weight-normal is-marginless">安全保护控制器</h3>
                <p class="has-text-grey-dark is-size-7-touch">
                  安全保护控制器，外壳采用ABS耐高温环保材料，采用PA自润滑滑触片，防电狐，阻燃PCB板，有效实现安全保护。电源线加粗加长，最宽达到15mm左右，3C认证电源插头，坚固耐用，有效实现安全保护。
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="columns">
        <div class="box is-radiusless is-shadowless column">
          <article class="media is-flex">
            <div class="media-left is-hidden">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 is-size-6-touch has-text-weight-normal is-marginless">高品质原材料</h3>
                <p class="has-text-grey-dark is-size-7-touch">
                  采用好的单面印花的毛呢面料，透气性佳，易保持表面干爽。性能稳定，不助燃，安全环保。只选择大厂原料，坚决杜绝任何回料。鸭鸭电热毯更厚实，更耐用。
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box is-radiusless is-shadowless column">
          <article class="media is-flex">
            <div class="media-left is-hidden">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 is-size-6-touch has-text-weight-normal is-marginless">国标3C强制认证</h3>
                <p class="has-text-grey-dark is-size-7-touch">
                  2018年电热毯启用国家强制认证，鸭鸭电器是率先获得3C强制认证的国内生产企业之一。国家认可，产品品质有保障。
                </p>
              </div>
            </div>
          </article>
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
.home-wall {
  background-image: url('../assets/wall1.jpg');
  background-position: center;
  background-size: cover;
}

.home-ad {
  padding: 3rem 0 3rem;
}

.home-detail {
  // flex-flow: row wrap;
  // justify-content: center;
  .columns {
    margin-bottom: 1.5rem;
  }

  .media {
    align-items: center;

    .content {
      margin-left: 1rem;
    }
  }

  p {
    margin-top: 0.75rem;
    padding-right: 1rem;
  }
}
</style>
