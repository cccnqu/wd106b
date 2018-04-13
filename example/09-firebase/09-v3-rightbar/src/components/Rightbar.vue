<template>
  <div id="rightnav">
    <div class="big-padding">
      <input type="text" :value="query" class="center"/>
      <br/><br/>
      <div class="wide center">
        <button id="search" class="success">類別查詢</button>
        <button id="search" class="success">全文檢索</button>
      </div>
    </div>
<!--    <router-link to="sub" class="captalize"></router-link> -->

  </div>
</template>
<script>
import mixin from '../lib/mixin'

export default {
  name: 'rightbar',
  props: [ 'shared', 'domain' ],
  mixins: [mixin],
  data () {
    return {
      query: ''
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
input { height: 1.6em; text-align: center; }
button { }
</style>
