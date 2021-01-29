<template>
  <div
    class="featured-apps flex flex-col lg:flex-row items-center lg:justify-center"
  >
    <div class="custom-slide w-full">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </VueSlickCarousel>
    </div>

    <div class="slide-meta flex flex-col lg:w-auto hover:bg-blue-500">
      <div>
        <div class="game-title">Red Dead Redemption 2</div>
        <div class="game-description">
          Red Dead Redemption 2, the critically acclaimed open world epic from
          Rockstar Games and the highest rated game of the console generation,
          now enhanced for PC with new Story Mode content, visual upgrades and
          more.
        </div>
      </div>

      <button class="my-4 py-4 btn-buy bg-transparent rounded">Buy Now</button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

const imageLink =
  'https://steamcdn-a.akamaihd.net/steam/apps/883710/ss_153bd5afa0b45e74b0242a3805dc29aab9f1685e.600x338.jpg?t=1556224097'
const imageLink2 =
  'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fred-dead-redemption-2%2Fspecial-edition%2FRDR2PC1339_EditionOverview_PC_Stadia_SE_V02-1920x1080-e67610cc2943654bab80d751fcf88a64dabc1b1a.jpg'
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      },
      carouselData: [
        { id: 0, imageLink },
        { id: 1, imageLink: imageLink2 },
        { id: 2, imageLink },
      ],
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },
  },
}
</script>

<style lang="scss" scoped>
.featured-apps {
  min-height: 420px;
  padding-top: 16px;

  .custom-slide {
    max-width: 600px;
    max-height: 337px;
    min-width: 400px;
  }

  .slide-meta {
    padding: 26px;
    width: 400px;
    color: white;
    text-align: left;

    .game-title {
      font-size: 27px;
      font-family: 'Google Sans';
      font-weight: bold;
      margin-bottom: 28px;
    }

    .game-description {
      font-size: 14px;
      font-family: 'Google Sans';
    }

    .btn-buy {
      background-color: $color-green-leaf;

      &:hover {
        background-color: $color-green-semidark;
      }
    }
  }
}
</style>
