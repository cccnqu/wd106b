<template>
  <div class="center">
    <br/><br/>
    <div class="message">
      <h1>UrSpace</h1>
      <div><img src="../assets/logo.png"></div>
      <br/>
      <p><router-link to="sms">UrSpace</router-link>是一個訊息管理分享系統，有點像 Facebook 但卻又很不同</p>
      <p>您可以透過 UrSpace 寫網誌、寫書、訂閱 RSS 或其他人的訊息，然後組織這些資訊進行搜尋</p>
      <br/>
      目前僅支援 <router-link to="/login">以 Google 帳號登入</router-link> !
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
