<template>
  <div class="header-wrapper">
    <router-link v-if="backButton" :to="backButton" class="back-button">
      <img :src="arrowBackIcon" alt="back" class="back-button-image"/>
    </router-link>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
import arrowBackIcon from 'assets/arrow-back.svg'
export default {
  props: {
    title: String,
    backButton: Object,
  },
  data () {
    return {
      arrowBackIcon,
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars.scss';

.header-wrapper {
  align-items: center;
  display: flex;
  padding: $base-pixel 0 $base-pixel $base-pixel;
}
.back-button-image {
  height: 30px;
  width: 30px;
}
.title {
  color: $title-color;
  display: inline-block;
  flex: 1;
  font-size: $base-pixel * 1.953;
}
</style>
