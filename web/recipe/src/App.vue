<template>
  <div>
    <navigation/>
    <router-view></router-view>
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
