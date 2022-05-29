<template>
  <div>
    <p>这里是子组件</p>
    <slot></slot>
    <button @click="handleSendContent">给到内容</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handleSendContent() {
      this.$emit('update:content', 'hahahah')
    }
  }
}
</script>

<style>

</style>