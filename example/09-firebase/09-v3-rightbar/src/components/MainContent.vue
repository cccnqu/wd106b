<template>
  <div v-if="page==='login'">
    <login-form :shared="shared"/>
  </div>
  <div v-else>
    <sms :shared="shared" :domain="domain" :op="op" :to="to"/>
  </div>
</template>

<script>
import Sms from './Sms.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'mainContent',
  props: ['shared', 'page', 'domain', 'op', 'to'],
  data () {
    return {
    }
  },
  components: {
    Sms,
    LoginForm
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
