/*eslint-disable */

const state = () => ({
  userData: null,
  loading: false,
})

const actions = {
  getUserData({ commit }, data) {
    commit('GET_USER_DATA', data)
  },
  logOut({ commit, state }) {
    const { user_type } = state.userData.user
    this.$cookies.remove('token')
    this.$cookies.remove('user_type')
    this.$cookies.remove('redirect')
    commit('LOGOUT', null)
    if (user_type == 'applicant') {
      this.$router.replace('/auth/admission/login')
    }
    if (user_type == 'student') {
      this.$router.push('/auth/student/login')
    }
    if (user_type == 'lecturer') {
      this.$router.replace('/auth/school/login')
    }
    if (user_type == 'admin') {
      this.$router.replace('/auth/registrar/login')
    }
  },
}

const mutations = {
  GET_USER_DATA(state, value) {
    state.userData = value
  },

  LOGOUT(state, value) {
    state.userData = value
  },
}
const getters = {
  userData: (state) => state.userData,
}

export default { state, actions, mutations, getters }
