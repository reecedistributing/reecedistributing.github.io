
export default {
  namespaced: true,

  state: _ => ({
    queue: []
  }),

  actions: {
    notify ({ state }, { text, color = 'primary', duration = 1000, multiline = false }) {
      let notif = {
        text,
        color,
        multiline
      }
      state.queue.push(notif)
    }

  }
}
