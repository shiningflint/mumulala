<template>
  <div
    ref="curtain"
    class="dark-curtain"
    @click="$event.target === $event.currentTarget ? $emit('close') : false"
  >
    <form class="content" method="post" @submit.prevent="$emit('submit', { name, description, })">
      <label class="form-item">
        <p>レシピー名</p>
        <p><input v-model="name" type="text" name="name" class="input"></p>
      </label>
      <label class="form-item">
        <p>レシピーの作り方</p>
        <p>
          <textarea v-model="description" name="description" rows="8" class="textarea"></textarea>
        </p>
      </label>
      <button type="submit" class="submit" :class="isLoading ? 'loading' : ''">新規追加</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
  data () {
    return {
      name: '',
      description: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'stylesheets/vars';
@import 'stylesheets/mixin';

.dark-curtain {
  @include dark-curtain;
  display: flex;
  align-items: end;
  justify-content: center;
}
.content {
  background: $light-brown;
  display: block;
  padding: $base-pixel;
  width: 100%;
}
.form-item {
  display: block;
  margin-bottom: $base-pixel;
}
.submit {
  &.loading {
    box-shadow: none;
    cursor: default;
    opacity: .5;
    transform: translate(2px, 4px);
  }
}
</style>
