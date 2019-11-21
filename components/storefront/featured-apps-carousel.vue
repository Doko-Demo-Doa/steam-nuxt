<template>
  <siema :options="flickityOptions" class="custom-slide">
    <div
      v-for="item in carouselData"
      v-bind:key="item.id"
      class="carousel-cell"
    >
      <img v-bind:src="item.imageLink" />
    </div>
  </siema>
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
.custom-slide {
  width: 400px;
  height: 300px;
}
</style>
