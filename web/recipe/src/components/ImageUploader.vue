<template>
  <input
    accept="image/*"
    capture="camera"
    type="file"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
