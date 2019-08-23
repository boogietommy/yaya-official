<template>
  <div class="header container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              首页
            </a>

            <a class="navbar-item">
              企业简介
            </a>

            <a class="navbar-item">
              产品展示
            </a>

            <a class="navbar-item">
              联系我们
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button is-primary is-rounded is-outlined">天猫旗舰店</a>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar-start {
  flex-grow: 1;
  justify-content: center !important;

  .navbar-item {
    padding: 0.5rem 2rem;
  }
}
</style>
