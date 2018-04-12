<template>
  <div>
    <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="message in messages" :key="message.id" class="message" id="{message.id}">
        <div class="messageHeader">id={{message.id}} <a href="#">{{message.by}}</a></div>
        <div class="messageContent" v-html="md2html(message.content)"></div>
        <div class="messageFooter"><button class="btn info">回覆</button>&nbsp;<button class="btn info">編輯</button></div>
      </div>
    </div>
    <div v-if="isend===false" class="center">載入新資料中，請等候 ...</div>
    <div v-else class="center">資料全部載入完畢，已到結尾！</div>
  </div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

/* eslint-disable */
export default {
  name: 'MessageList',
  props: ['db'],
  data () {
    return {
      messages: [],
      isend: false,
      busyLoadMore: false
    }
  },
  methods: {
    md2html: function (md) {
      return marked(md)
    },
    loadMore: function () {
      const step = 10
      if (this.busyLoadMore || this.isend) return
      this.busyLoadMore = true
      setTimeout(() => {
        let self = this
        let beginId = (this.messages.length === 0) ? 0 : this.messages[this.messages.length-1].id + 1
        var ref = this.db.ref('/messages/').orderByChild('id').startAt(beginId).limitToFirst(step)
        ref.once('value').then(function (snapshot) {
          if (snapshot.numChildren() < step) {
            self.isend = true
          }
          snapshot.forEach(function (childSnapshot) {
            let msg = childSnapshot.val()
            self.messages.push(msg)
          })
          // console.log('isend', self.isend)
        })
        this.busyLoadMore = false
      }, 500)
    }
  }
}
</script>

<style>

/* ================= message ==============*/
.message {
  margin:10px;
  padding:10px;
  min-height:100px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  background-color: white;
}

.message .messageContent {
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  display: inline-block;
  width: 100%;
}

.message div {
  padding: 10px;
}

.message h1 { font-size:150%; font-weight:bold; }
.message h2 { font-size:125%; font-weight:bold; }
.message h3 { font-size:100%; font-weight:bold; }
.message h4 { font-size:100%; font-weight:bold; }
.message h5 { font-size:100%; font-weight:bold; }
.message h6 { font-size:100%; font-weight:bold; }

</style>
