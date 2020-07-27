<template>
  <div class="search-bar sm:w-4/5 sm:mx-16 md:mx-24 lg:mx-32 w-full">
    <div class="flex" />
    <div class="search-bar-meta flex sm:hidden md:hidden lg:flex">
      <div v-for="menuItem in items" :key="menuItem.id" class="meta-button">
        {{ menuItem.name }}
      </div>
    </div>

    <div class="input-section">
      <input class="search-input" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, name: 'Your Store' },
        { id: 1, name: 'Point Shop' },
        { id: 2, name: 'News' },
        { id: 3, name: 'Steam Labs' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  align-items: center;
  align-self: center;
  background-color: $color-dark-teal;
  display: flex;
  height: 42px;
  justify-content: space-between;
  margin-top: 36px;
  max-width: 1000px;
  padding-right: 12px;

  .search-bar-meta {
    height: 100%;
    flex-direction: row;
    transition: 0.3s all linear;

    .meta-button {
      cursor: pointer;
      user-select: none;
      padding: 0 14px;
      display: flex;
      align-items: center;
      color: $color-white;
      transition: background-color 0.35s ease-in-out;

      &:hover {
        background-color: $color-green-semidark;
      }
    }
  }

  .search-input {
    background-color: $color-charcoal;
    color: white;
    padding: 0 8px;
  }
}
</style>
