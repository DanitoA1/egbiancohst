const state = () => ({
  currentCandidate: null,
})

const actions = {
 async onAuthStateChangedAction(state, { authUser, claim }) {
    if (!authUser) {
      state.commit('SET_CURRRENT_CANDIDATE', null)
      this.$router.push({
        path: '/student/login',
      })
    } else {
      await this.$fire.firestore
      .collection('users')
      .doc(authUser.uid)
      .onSnapshot((doc) => {
        state.commit('SET_CURRRENT_CANDIDATE', doc.data())
      })
    }
  },
  async createUser({ commit, state, rootState }, user) {
    const ref = this.$fire.firestore.collection('users').doc(user.id)
    try {
      await ref.set(user)
    } catch (error) {
      console.log(error.message)
    }
  },
  async fetchProfile({ commit, state, rootState }, user) {
    await this.$fire.firestore
      .collection('users')
      .doc(user.id)
      .onSnapshot((doc) => {
        commit('SET_CURRRENT_CANDIDATE', doc.data())
      })
  },
}

const mutations = {
  SET_CURRRENT_CANDIDATE(state, data) {
    state.currentCandidate = data
  },
}
const getters = {
  getCurrentCandidate(state) {
    return state.currentCandidate
  },
}

export default { state, actions, mutations, getters }
