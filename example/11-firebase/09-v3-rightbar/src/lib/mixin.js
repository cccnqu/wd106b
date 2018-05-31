import MT from './mt'

const mixin = {
  methods: {
    mt (e) {
      return MT.mt(e)
    },
    toLanguage (to) {
      MT.to = to
    }
  }
}

export default mixin
