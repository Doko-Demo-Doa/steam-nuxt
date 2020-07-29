<template>
  <div class="storefront-container flex flex-col">
    <SearchBar />
    <FeaturedAppCarousel />
    <SpecialOffers />
  </div>
</template>

<script>
import SearchBar from '~/components/storefront/search-bar'
import FeaturedAppCarousel from '~/components/storefront/featured-apps-carousel'
import SpecialOffers from '~/components/storefront/special-offers'

export default {
  layout: 'storefront-layout',
  components: {
    SearchBar,
    FeaturedAppCarousel,
    SpecialOffers,
  },
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
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('https://steamstore-a.akamaihd.net/public/images/v6/colored_body_top2.png?v=2');
}
</style>
