<template>
  <div id="headbar">
    <div class="dropdown" style="float:left">
      <button  @click="menuToggle('left')" class="dropbtn">&#9776;</button>
    </div>
<!--
    <div class="dropdown" style="float:left">
      <router-link v-if="(domain||'all') != 'all'" :to="domainLink" class="captalize">{{mt(domain)}} bbb</router-link>
    </div>

    <div class="dropdown" style="float:left">
      /
      <router-link to="/sms/all">{{mt('all')}} aaa</router-link>
    </div>
-->
    <div class="dropdown" style="float:left">
      <button class="dropbtn">
        <router-link to="/sms/all">{{mt('UrSpace')}}</router-link>
      </button>
      <div class="dropdown-content">
        <router-link to="/" class="captalize">{{mt('home')}}</router-link>
        <router-link to="/help" class="captalize">{{mt('help')}}</router-link>
      </div>
    </div>
    <div class="dropdown" style="float:left">
      <button class="dropbtn">
        <router-link to="/user">{{mt(shared.user ? shared.user.displayName : 'Login')}}</router-link>
      </button>
      <div class="dropdown-content">
        <router-link to="/login">{{mt('login')}}</router-link>
        <router-link to="/login" v-on:click.native="logout">{{mt('logout')}}</router-link>
        <router-link to="/signup">{{mt('signup')}}</router-link>
        <router-link to="/setting">{{mt('setting')}}</router-link>
      </div>
    </div>
    <div class="dropdown" style="width:2em">
      <a id="keepToggle"  @click="menuToggle('right')">&#9776;</a>
    </div>
    <div class="dropdown">
      <button class="dropbtn">繁體中文</button>
      <div class="dropdown-content">
        <router-link :to="toLink(domain, op, 'en')" class="captalize">English</router-link>
        <router-link :to="toLink(domain, op, 'zh-tw')" class="captalize">繁體中文</router-link>
        <router-link :to="toLink(domain, op, 'zh-cn')" class="captalize">简体中文</router-link>
        <router-link :to="toLink(domain, op, 'jp')" class="captalize">日本語</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">{{mt('new')}}</button>
      <div class="dropdown-content">
        <router-link :to="toLink(domain, 'new', to)" class="captalize">{{mt('new')}}</router-link>
        <router-link :to="toLink(domain, 'hot', to)" class="captalize">{{mt('hot')}}</router-link>
        <router-link :to="toLink(domain, 'near', to)" class="captalize">{{mt('near')}}</router-link>
        <router-link :to="toLink(domain, 'my', to)" class="captalize">{{mt('my')}}</router-link>
        <router-link :to="toLink(domain, 'follow', to)" class="captalize">{{mt('follow')}}</router-link>
        <router-link :to="toLink(domain, 'read', to)" class="captalize">{{mt('read')}}</router-link>
        <router-link :to="toLink(domain, 'random', to)" class="captalize">{{mt('random')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../lib/mixin'

export default {
  name: 'headbar',
  props: [ 'shared', 'domain', 'op', 'to' ],
  mixins: [mixin],
  data () {
    return {
    }
  },
  mounted: function () {
    if (window.innerWidth <= 1000) this.menuToggle('right')
    if (window.innerWidth <= 700) this.menuToggle('left')
  },
  computed: {
    domainLink: function () {
      return `/sms/${this.domain || 'all'}`
    }
  },
  methods: {
    toLink: function (domain, op, to) {
      return `/sms/${domain}/${op}/${to}`
    },
    menuToggle: function (menuName) {
      var sidenav = document.getElementById(menuName + 'nav')
      //      var sidebar = document.getElementById(menuName + 'bar')
      sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
      //      sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
    },
    logout: function (event) {
      this.shared.clearUser()
      // this.$router.push({path: '/login'})
    }
  }
}
</script>
<style>
</style>
