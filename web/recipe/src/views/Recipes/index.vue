<template>
  <div class="full-height">
    <layout-header title="レシピー"/>
    <page-content>
      <ul v-if="recipes.length > 0">
        <list-image-small
          v-for="recipe in recipes"
          :key="recipe.id"
          :title="recipe.name"
          :image="recipe.image"
          @goToShow="goToShow(recipe.id)"
        />
      </ul>
      <p v-else class="recipe-ul">レシピー無し</p>
      <div>
        <button type="button" class="add-recipe" @click="showCreate = true">
          レチピー新規追加
        </button>
      </div>
    </page-content>
    <recipe-form
      v-if="showCreate"
      :isLoading="isLoading"
      @close="showCreate = false"
      @submit="addNewRecipe"
    />
  </div>
</template>

<script>
import RecipesApi from 'api/recipes'
import ListImageSmall from 'components/ListImageSmall'
import LayoutHeader from 'components/layout/Header'
import PageContent from 'components/layout/PageContent'
import RecipeForm from 'components/RecipeForm'

export default {
  components: {
    ListImageSmall,
    LayoutHeader,
    PageContent,
    RecipeForm,
  },
  data () {
    return {
      isLoading: false,
      showCreate: false,
      recipes: [],
    }
  },
  methods: {
    addNewRecipe ({ name, description, }) {
      if (this.isLoading) return
      this.isLoading = true
      RecipesApi.create({ name, description, })
      .then(response => {
        this.isLoading = false
        this.showCreate = false
        this.recipes.push(response)
      })
    },
    goToShow (recipeID) {
      this.$router.push({ name: 'recipeShow', params: { recipeID, }, })
    },
  },
  created () {
    RecipesApi.index()
    .then(response => {
      this.recipes = response
    })
  },
}
</script>
