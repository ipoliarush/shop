export default {
  RESIZE (state) {
    if (window.innerWidth < 992) state.isOpen = false
    else state.isMobileMenu = false
  },
  REVERSE (state) {
    state.isOpen = !state.isOpen
  },
  MOBILE_MENU_OPEN (state) {
		state.isMobileMenu = true
  },
  MOBILE_MENU_CLOSE (state) {
		state.isMobileMenu = false
  }
}
