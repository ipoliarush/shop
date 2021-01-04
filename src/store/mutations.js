export default {
  RESIZE (state) {
    if (window.innerWidth < 992) state.isOpen = false
  },
  REVERSE (state) {
    state.isOpen = !state.isOpen
  },
}