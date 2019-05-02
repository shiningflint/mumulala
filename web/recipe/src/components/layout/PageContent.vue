<template>
  <div class="content-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars';

.content-wrapper {
  padding: $base-pixel;
  padding-bottom: $base-pixel * 3;
}
</style>
