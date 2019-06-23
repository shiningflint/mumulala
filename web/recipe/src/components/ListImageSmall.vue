<template>
  <li class="li-wrap" @click="$emit('goToShow')">
    <div class="item-image" :style="{ backgroundImage: `url('${image}')` }"></div>
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
  border-bottom: 1px solid $border-color;
  display: flex;
  margin-bottom: $base-pixel / 2;
  padding-bottom: $base-pixel / 2;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

.item-image {
  background: no-repeat center center $text-color;
  background-size: cover;
  border-radius: $base-pixel / 4;
  margin-right: $base-pixel;
  height: 60px;
  width: 60px;
}

.item-text {
  > p {
    font-size: $base-pixel * .8;
  }
}
</style>
