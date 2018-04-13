const MT = {
  to: 'tw'
}

export default MT

const dict = {
  all: {tw: '全部'},
  people: {tw: '人群'},
  object: {tw: '物品'},
  article: {tw: '文章'},
  image: {tw: '圖像'},
  video: {tw: '影片'},
  music: {tw: '音樂'},
  book: {tw: '書籍'},
  place: {tw: '地點'},
  login: {tw: '登入'},
  logout: {tw: '登出'},
  signup: {tw: '註冊'},
  setting: {tw: '設定'},
  new: {tw: '最新'},
  hot: {tw: '人氣'},
  near: {tw: '鄰近'},
  my: {tw: '我的'},
  follow: {tw: '追蹤'},
  read: {tw: '已讀'},
  random: {tw: '隨機'},
  friends: {tw: '朋友'},
  family: {tw: '家人'},
  followby: {en: 'followBy', tw: '跟隨者'},
  sale: {tw: '想買'},
  buy: {tw: '想賣'},
  news: {tw: '新聞'},
  scene: {tw: '景物'},
  portrait: {tw: '人像'},
  movie: {tw: '電影'},
  tv: {tw: '電視'},
  sport: {tw: '運動'},
  mtv: {tw: '音樂節目'},
  voice: {tw: '語音'},
  science: {tw: '科學'},
  math: {tw: '數學'},
  novel: {tw: '小說'},
  classic: {tw: '經典'},
  asia: {tw: '亞洲'},
  europe: {tw: '歐洲'},
  america: {tw: '美洲'},
  africa: {tw: '非洲'},
  home: {tw: '首頁'},
  help: {tw: '說明'},
  rss: {en: 'RSS'}
}

export function mt (e) {
  const word = dict[e.toLowerCase()] || {}
  return word[MT.to] || e
}

MT.mt = mt
