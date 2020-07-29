<template>
  <div class="top-menu-bar flex flex-row">
    <div v-for="item in menuItems" :key="item.id" class="menu-item">
      {{ item.name }}
    </div>

    <div class="glowing-underline" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Store', id: 0 },
        { name: 'Community', id: 1 },
        { name: 'Profile', id: 2 },
        { name: 'Chat', id: 3 },
        { name: 'Support', id: 4 },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top-menu-bar {
  .menu-item {
    margin-right: 30px;
    color: $color-gray;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 3px;
    border-bottom: 2px solid $color-dark-teal;
  }

  .glowing-underline {
    width: 100%;
  }
}
</style>
