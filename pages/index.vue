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
  components: {
    SearchBar,
    FeaturedAppCarousel,
    SpecialOffers,
  },
  layout: 'storefront-layout',
}
</script>

<style lang="scss">
.storefront-container {
  height: 100%;
  background-color: $color-charcoal;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('https://steamstore-a.akamaihd.net/public/images/v6/colored_body_top2.png?v=2');
}
</style>
