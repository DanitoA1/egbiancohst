const state = () => ({
  currentCandidate: null,
  loading : true
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
        
        commit('SET_LOADING', false)
        
      })
  },
}

const mutations = {
  SET_CURRRENT_CANDIDATE(state, data) {
    state.currentCandidate = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}
const getters = {
  getCurrentCandidate(state) {
    return state.currentCandidate
  },
  loadingState(state) {
    return state.loading
  },
}

export default { state, actions, mutations, getters }
