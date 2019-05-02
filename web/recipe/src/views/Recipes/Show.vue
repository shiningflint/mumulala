<template>
  <div class="full-height">
    <layout-header :title="title" :backButton="{ name: 'home' }" />
    <page-content>
      <p>{{ description }}</p>
    </page-content>
  </div>
</template>

<script>
import LayoutHeader from 'components/layout/Header'
import PageContent from 'components/layout/PageContent'

export default {
  components: {
    LayoutHeader,
    PageContent,
  },
  data () {
    return {
      id: '2',
      title: 'スパゲッティハンバーグ',
      description: 'Delicious spaghetti hamburger with demi glase sauce and parmesan cheese',
    }
  },
}
</script>
