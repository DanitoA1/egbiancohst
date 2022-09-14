/*eslint-disable */
const getUser = async (axios, store, cookies, user_type, id) => {
  const token  =store.state.token
  await axios
    .get(`/api/v1/${user_type}/${id}/`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      store.dispatch('getUserData', res.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default getUser
