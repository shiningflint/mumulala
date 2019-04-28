<template>
  <li class="li-wrap">
    <div class="item-image"></div>
    <div class="item-text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
  },
}
</script>
