<template>
<div>
  <div>
    <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-if="shared.isLogin()" class="message">
        <div><a href="#">{{shared.user.displayName}}</a></div>
        <div class="messageContent">
          <textarea v-model="messageContent" placeholder="新增貼文"></textarea>
        </div>
        <div>
          <button class="info" @click="postMessage">發佈</button>&nbsp;
          <button class="info">清除</button>
        </div>
      </div>
      <div v-for="message in messages" :key="message.id" class="message">
        <div><a href="#">{{message.by}}</a><label class="right">{{timeToIso(message.time)}}</label></div>
        <div class="messageContent" v-html="md2html(message.content)"></div>
        <div><button>回覆</button>&nbsp;<button>編輯</button></div>
      </div>
    </div>
    <div v-if="isEnd===false" class="center">載入新資料中，請等候 ...</div>
    <div v-else class="center">資料全部載入完畢，已到結尾！</div>
  </div>
</div>
</template>

<script>
import markdown from '../lib/markdown'
import service from '../lib/service'

var db = service.db

var opMap = {
  'new': {orderBy: 'time', sort: 'desc'},
  'hot': {orderBy: 'priority'},
  'near': {},
  'my': {},
  'follow': {},
  'read': {},
  'random': {}
}

export default {
  name: 'Sms',
  props: ['shared', 'domain', 'op', 'to'],
  data () {
    return {
      messageContent: '',
      messages: [],
      isEnd: false,
      busyLoadMore: false
    }
  },
  methods: {
    postMessage () {
      var self = this
      var user = self.shared.user
      var record = {
        uid: user.uid,
        by: user.displayName,
        content: self.messageContent,
        time: db.TIMESTAMP
      }
      db.add('messages', record).then(function () {
        record.time = Date.now()
        self.messages.unshift(record)
        self.messageContent = ''
      }).catch(function (err) {
        if (err) alert('新增訊息失敗：' + err)
      })
    },
    md2html (md) {
      return markdown.toHtml(md)
    },
    loadMore () {
      const self = this
      const step = 10

      if (this.busyLoadMore || this.isEnd) return
      this.busyLoadMore = true
      if (self.isEnd) return
      console.log('this.op=', this.op)
      let toOp = opMap[this.op]
      let sort = ''
      let orderBy = 'time'
      if (toOp != null) {
        sort = toOp.sort
        orderBy = toOp.orderBy
      }
      console.log('orderBy=', orderBy, ' sort=', sort)
      // let sort = this.shared.sort || ''
      // let orderBy = this.shared.orderBy || 'time'
      setTimeout(() => {
        let start = (this.messages.length === 0 || sort === 'desc') ? null : this.messages[this.messages.length - 1].time + 1
        let end = (this.messages.length === 0 || sort !== 'desc') ? null : this.messages[this.messages.length - 1].time - 1
        let q = { table: 'messages', orderBy: orderBy, start: start, end: end, limit: step, sort: sort }
        console.log('q=', q)
        db.query(q).then(function (list) {
          self.messages.push(...list)
          self.isEnd = (list.length < step)
        })
        this.busyLoadMore = false
      }, 500)
    },
    timeToIso (timestamp) {
      return new Date(timestamp).toISOString()
    }
  }
}
</script>

<style scoped>
.messageContent {
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  width: 100%;
}
textarea {
  margin-left:auto;
  margin-right:auto;
  width: 95%;
  display: inline-block;
  height: 100px;
}
</style>
