<template>
  <div>
    <headbar :shared="shared" :domain="domain" :op="op" :to="to"/>
    <div>
      <leftbar :shared="shared" :domain="domain"/>
      <rightbar :shared="shared" :domain="domain"/>
      <div>
        <div id="content">
          <main-content :shared="shared" :page="page" :domain="domain" :op="op" :to="to"/>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from './Headbar.vue'
import Leftbar from './Leftbar.vue'
import Rightbar from './Rightbar.vue'
import MainContent from './MainContent.vue'
import shared from '../lib/shared'

export default {
  name: 'mainPage',
  props: ['page', 'domain', 'op'],
  data () {
    return {
      shared: shared
    }
  },
  components: {
    Headbar,
    Leftbar,
    Rightbar,
    MainContent
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('page=', this.page, 'domain=', this.domain, 'op=', this.op, 'to=', this.to)
      /*
      shared.to = this.to
      shared.domain = this.domain
      shared.to = this.orderBy
      shared.sort = this.sort
      */
    }
  },
  methods: {
  }
}
</script>

<style scoped>
html, body {
  background-color: #336699;
}
</style>
