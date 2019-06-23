<template>
  <li class="li-wrap" @click="$emit('goToShow')">
    <div class="item-image"></div>
    <div class="item-text">
      <h3>{{ title }}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
  },
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars';

.li-wrap {
  margin-bottom: $base-pixel;
  padding-bottom: $base-pixel;
  border-bottom: 1px solid $border-color;
  &:last-child {
    border-bottom: none;
  }
}
.item-text {
  > p {
    font-size: $base-pixel * .8;
  }
}
</style>
