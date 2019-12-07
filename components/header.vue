<template>
  <div class="header-main flex content-center">
    <img
      alt="logo"
      class="logo object-center"
      src="@/assets/images/header-logo.png"
    />
    <TopMenuBar />
  </div>
</template>

<script>
import TopMenuBar from '~/components/common/top-menu-bar'

export default {
  components: {
    TopMenuBar
  }
}
</script>

<style lang="scss" scoped>
.header-main {
  background-color: $color-dark;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;

  .logo {
    height: 40px;
  }
}
</style>
