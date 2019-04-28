<template>
  <div class="recipe-page">
    <h1 class="title">レシピー</h1>
    <ul class="recipe-ul" v-if="recipes.length > 0">
      <list-image-small
        v-for="recipe in recipes"
        :key="recipe.id"
        :title="recipe.title"
        :description="recipe.description"
        :image="recipe.image"
      />
    </ul>
    <p v-else class="recipe-ul">No Recipes Found</p>
  </div>
</template>

<script>
import ListImageSmall from 'components/ListImageSmall'
export default {
  components: {
    ListImageSmall,
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
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars.scss';

.recipe-page {
  height: 100%;
}
.title {
  background: $dark-brown;
  color: $light-brown;
  font-size: $base-pixel * 1.953;
  padding: $base-pixel;
}
.recipe-ul {
  padding: $base-pixel;
  padding-bottom: $base-pixel * 3;
}
</style>
