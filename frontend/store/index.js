const state = () => ({
  user: null,
})

const actions = {
  async onAuthStateChangedAction(state, { authUser, claim }) {
    if (!authUser) {
      state.commit('SET_USER', null)
      this.$router.push({
        path: '/student/login',
      })
    } else {
      const { email, uid } = await authUser
      console.log(authUser)
      state.commit('SET_USER', {
        email,
        uid,
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
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}
const getters = {
  getUser(state) {
    return state.user
  },
}

export default { state, actions, mutations, getters }
