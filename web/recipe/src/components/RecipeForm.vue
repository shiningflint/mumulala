<template>
  <div class="dark-curtain" @click="$emit('close')">
    Creating new recipe here
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/mixin';

.dark-curtain {
  @include dark-curtain;
}
</style>
