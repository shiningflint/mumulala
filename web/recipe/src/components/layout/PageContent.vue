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
  background: $light-brown;
  border-radius: $base-pixel / 4;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color: $text-color;
  margin: $base-pixel / 2;
  margin-top: 0;
  padding: $base-pixel;
}
</style>
