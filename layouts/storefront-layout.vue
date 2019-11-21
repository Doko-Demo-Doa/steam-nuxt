<template>
  <div class="layout storefront-layout">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/header'

export default {
  components: {
    Header
  }
}
</script>
