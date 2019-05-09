<template>
  <div class="full-height">
    <layout-header title="レシピー"/>
    <page-content>
      <ul v-if="recipes.length > 0">
        <list-image-small
          v-for="recipe in recipes"
          :key="recipe.id"
          :title="recipe.title"
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
import Api from 'api/fetch'
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
      recipes: [
        { id: '2', title: 'スパゲッティハンバーグ', description: 'Delicious spaghetti hamburger with demi glase sauce and parmesan cheese', },
        { id: '3', title: 'チャハン', description: '美味しいインドネシア風のチャハン。辛いですよ！', },
        { id: '4', title: '餃子', description: '牛肉ときのこ入りのまぼろしい餃子', },
      ],
    }
  },
  methods: {
    goToShow (recipeID) {
      console.log('going to the detail page', recipeID)
      this.$router.push({ name: 'recipeShow', params: { recipeID, }, })
    },
  },
  created () {
    console.log('fetching', Api.getData(`http://localhost:9292/recipes`))
  },
}
</script>
