<template>
  <div class="home">
    <c-header />
    <section class="hero is-light is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-medium is-size-6-touch">
            始创于1982年，我们传递温暖。
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
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 has-text-weight-normal is-marginless">双螺旋发热丝</h3>
                <p class="has-text-grey-dark">
                  新型发热元件，采用新型合金织丝，低阻值、高导率、高热效率的发热元件，升温迅速，断线不起弧，杜绝火宅。表面耐高温温度达105度左右。鸭鸭电热毯发热均匀，预热升温快，使用寿命长。
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box is-radiusless is-shadowless column">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 has-text-weight-normal is-marginless">安全保护控制器</h3>
                <p class="has-text-grey-dark">
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
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 has-text-weight-normal is-marginless">双螺旋发热丝</h3>
                <p class="has-text-grey-dark">
                  新型发热元件，采用新型合金织丝，低阻值、高导率、高热效率的发热元件，升温迅速，断线不起弧，杜绝火宅。表面耐高温温度达105度左右。鸭鸭电热毯发热均匀，预热升温快，使用寿命长。
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box is-radiusless is-shadowless column">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3 class="title is-5 has-text-weight-normal is-marginless">安全保护控制器</h3>
                <p class="has-text-grey-dark">
                  安全保护控制器，外壳采用ABS耐高温环保材料，采用PA自润滑滑触片，防电狐，阻燃PCB板，有效实现安全保护。电源线加粗加长，最宽达到15mm左右，3C认证电源插头，坚固耐用，有效实现安全保护。
                </p>
              </div>
            </div>
          </article>
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
.home-ad {
  padding: 2.5rem 0;
}

.home-detail {
  // flex-flow: row wrap;
  // justify-content: center;

  .media {
    align-items: center;
  }

  p {
    margin-top: 0.75rem;
  }
}
</style>
