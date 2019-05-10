<template>
  <div class="full-height">
    <layout-header :title="name" :backButton="{ name: 'home' }" />
    <page-content>
      <p>{{ description }}</p>
    </page-content>
  </div>
</template>

<script>
import RecipesApi from 'api/recipes'
import LayoutHeader from 'components/layout/Header'
import PageContent from 'components/layout/PageContent'

export default {
  components: {
    LayoutHeader,
    PageContent,
  },
  data () {
    return {
      id: null,
      name: '',
      description: '',
    }
  },
  created () {
    RecipesApi.getOne(this.$route.params.recipeID)
    .then(response => {
      this.id = response.id
      this.name = response.name
      this.description = response.description
    })
  },
}
</script>
