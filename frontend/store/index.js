/*eslint-disable */

const state = () => ({
  userData: null,
  loading: false,
  allCandidates: [],
})

const actions = {
  getUserData({ commit }, data) {
    commit('GET_USER_DATA', data)
  },
}

const mutations = {
  GET_USER_DATA(state, value) {
    state.userData = value
  },
}
const getters = {
  userData: (state) => state.userData,
}

export default { state, actions, mutations, getters }
