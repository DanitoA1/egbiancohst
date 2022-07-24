/*eslint-disable */

const state = () => ({
  userData: null,
  redirectUrl: '/',
  loading: false,
})

const actions = {
  getUserData({ commit }, data) {
    commit('GET_USER_DATA', data)
  },
  handleRedirectUrl({ commit }, data) {
    commit('REDIRECT_URL', data)
  },
  logOut({ commit, state }, {}) {
    const { user_type } = state.userData.user
    commit('LOGOUT', {})
    if (user_type === 'applicant') {
      this.$router.push('/admission/login')
    }
    if (user_type === 'student') {
      this.$router.push('/student/login')
    }
    if (user_type === 'lecturer') {
      this.$router.push('/school/login')
    }
    if (user_type === 'admin') {
      this.$router.push('/registrar/login')
    }
  },
}

const mutations = {
  GET_USER_DATA(state, value) {
    state.userData = value
  },
  REDIRECT_URL(state, value) {
    state.redirectUrl = value
  },
  LOGOUT(state, value) {
    state = value
  },
}
const getters = {
  userData: (state) => state.userData,
}

export default { state, actions, mutations, getters }
