<template>
  <div class="header-main">
    <TopMenuBar />
  </div>
</template>

<script>
import TopMenuBar from '~/components/common/top-menu-bar'

export default {
  components: {
    TopMenuBar,
  },
}
</script>

<style lang="scss" scoped>
.header-main {
  background-color: $color-dark;
  width: 100%;
  height: 80px;
}
</style>
