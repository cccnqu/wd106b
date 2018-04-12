<template>
  <div>
    <message-new/>
    <message-list :db="db"/>
  </div>
</template>

<script>
import MessageNew from './MessageNew.vue'
import MessageList from './MessageList.vue'

export default {
  name: 'mainContent',
  props: ['db'],
  data () {
    return {
    }
  },
  components: {
    MessageNew,
    MessageList
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
