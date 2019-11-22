<template>
  <div class="featured-apps block md:flex md:w-full lg:3/4 xl:w-2/3 mx-auto">
    <siema
      :options="flickityOptions"
      class="custom-slide w-3/4 sm:w-full md:w-full mx-auto"
    >
      <div
        v-for="item in carouselData"
        v-bind:key="item.id"
        class="carousel-cell"
      >
        <img v-bind:src="item.imageLink" />
      </div>
    </siema>

    <div class="slide-meta">
      <div>Test</div>
      <div>
        Red Dead Redemption 2, the critically acclaimed open world epic from
        Rockstar Games and the highest rated game of the console generation, now
        enhanced for PC with new Story Mode content, visual upgrades and more.
      </div>
    </div>
  </div>
</template>

<script>
// https://sainf.github.io/vue2siema/
const imageLink =
  'https://steamcdn-a.akamaihd.net/steam/apps/883710/ss_153bd5afa0b45e74b0242a3805dc29aab9f1685e.600x338.jpg?t=1556224097'
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      },
      carouselData: [
        { id: 0, imageLink },
        { id: 1, imageLink },
        { id: 2, imageLink }
      ]
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    }
  }
}
</script>

<style lang="scss" scoped>
.featured-apps {
  .custom-slide {
    max-width: 600px;
    max-height: 337px;
    min-width: 400px;
  }

  .slide-meta {
    padding: 16px;
  }
}
</style>
