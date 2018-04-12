<template>
  <div class="messageNew">
    <div class="message">
      <div class="messageHeader"><a href="#">user</a></div>
      <textarea class="messageContent" v-model="message" placeholder="新增貼文" id="messageNewContent"></textarea>
      <div class="messageFooter"><button class="btn info" @click="postMessage">發佈</button>&nbsp;<button class="btn info">清除</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageNew',
  props: ['messages'],
  data () {
    return {
      message: ''
    }
  },
  methods: {
    postMessage () {
      this.messages.push({
        by: sessionStorage.loginUser.uid,
        content: this.message
      })
    }
  }
}
</script>

<style>

</style>
