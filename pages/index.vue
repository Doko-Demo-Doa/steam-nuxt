<template>
  <div class="storefront-container">
    <FeaturedAppCarousel />
  </div>
</template>

<script>
import FeaturedAppCarousel from '~/components/storefront/featured-apps-carousel'

export default {
  layout: 'storefront-layout',
  components: {
    FeaturedAppCarousel
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.storefront-container {
  height: 100%;
  background-color: $color-charcoal;
}
</style>
