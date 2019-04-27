<template>
  <div>
    <h3>Navigation</h3>
    <ul class="links">
      <li v-for="link in links">
        <router-link :to="link.to">{{ link.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { to: { name: 'home', }, label: 'Home', },
        { to: { name: 'about', }, label: 'About', },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.links {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
