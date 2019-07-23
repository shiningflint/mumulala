<template>
  <div class="full-height">
    <layout-header title="レシピー"/>
    <page-content>
      <form @submit.prevent="onSubmit">
        <image-uploader v-model="form.image" />
        <button type="submit">Save</button>
      </form>
    </page-content>
  </div>
</template>

<script>
import ImageUploader from 'components/ImageUploader'
import LayoutHeader from 'components/layout/Header'
import PageContent from 'components/layout/PageContent'

export default {
  components: {
    ImageUploader,
    LayoutHeader,
    PageContent,
  },
  data () {
    return {
      form: {
        image: null,
      },
    }
  },
  methods: {
    onSubmit () {
      console.log('submitting form', { ...this.form, })
    },
  },
}
</script>
