import Vue from 'vue'

const EventBus = new Vue({
  methods: {
    on(event, callback) {
      this.$on(event, callback)
    },
    emit(event, ...args) {
      this.$emit(event, ...args)
    },
    off(event, callback) {
      this.$off(event, callback)
    }
  }
})

export default EventBus
