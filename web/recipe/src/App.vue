<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import Navigation from 'components/layout/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars.scss';

.wrapper {
  height: 100%;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 600px;
}
</style>
