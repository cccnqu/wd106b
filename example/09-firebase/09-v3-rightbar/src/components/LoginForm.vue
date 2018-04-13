<template>
  <div class="message center" style="height:80vh">
    <div style="top:20px; position:relative;">
      <p v-if="shared.isLogin()" class="big-padding">
        您已經登入了，身分是： {{shared.user.displayName}}
      </p>
      <p>如果您已經登入了 Google 帳號，請按以下按鈕登入 UrSpace！</p>
      <p>如果還沒有，請 <a href="https://accounts.google.com/">登入 Google 帳號</a> 後，再按下列按鈕！</p>
      <br/>
      <button @click="googleLogin" class="center big big-padding danger" >Google 登入</button>
      <br/><br/>
      <p>本網站目前僅支援 Google 帳號登入！</p>
    </div>
  </div>
</template>

<script>
import service from '../lib/service'

export default {
  name: 'loginForm',
  props: ['shared'],
  data () {
    return {
    }
  },
  created: function () {
  },
  methods: {
    googleLogin: function () {
      const self = this
      service.googleLogin().then(function (user) {
        self.shared.setUser({ displayName: user.displayName, email: user.email, uid: user.uid })
        self.$router.push({path: '/sms'})
      }).catch(function (error) {
        alert('登入失敗！' + error)
      })
    }
  }
}
</script>

<style>
</style>
