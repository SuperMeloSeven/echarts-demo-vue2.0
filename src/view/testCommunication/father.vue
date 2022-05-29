<template>
  <div>
    <p>这里是父组件</p>
    <son-camp :content.sync="obj.content">
      这里是子组件
    </son-camp>
  </div>
</template>

<script>
import SonComp from './son-comp.vue';

export default {
  name: 'Father',
  components: {
    'son-camp': SonComp
  },
  watch: {
    'obj.content': function (val) {
      console.log(val);
    }
  },
  data () {
    return {
      obj: {
        content: ''
      }
    }
  },
  methods: {
    handleContent ($event) {
      console.log($event);
    }
  }
}
</script>

<style>

</style>