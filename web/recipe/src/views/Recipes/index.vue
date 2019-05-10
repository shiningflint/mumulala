<template>
  <div class="full-height">
    <layout-header title="レシピー"/>
    <page-content>
      <ul v-if="recipes.length > 0">
        <list-image-small
          v-for="recipe in recipes"
          :key="recipe.id"
          :title="recipe.name"
          :description="recipe.description"
          :image="recipe.image"
          @goToShow="goToShow(recipe.id)"
        />
      </ul>
      <p v-else class="recipe-ul">No Recipes Found</p>
    </page-content>
  </div>
</template>

<script>
import RecipesApi from 'api/recipes'
import ListImageSmall from 'components/ListImageSmall'
import LayoutHeader from 'components/layout/Header'
import PageContent from 'components/layout/PageContent'

export default {
  components: {
    ListImageSmall,
    LayoutHeader,
    PageContent,
  },
  data () {
    return {
      recipes: [],
    }
  },
  methods: {
    goToShow (recipeID) {
      this.$router.push({ name: 'recipeShow', params: { recipeID, }, })
    },
  },
  created () {
    RecipesApi.getAll()
    .then(response => {
      this.recipes = response
    })
  },
}
</script>
