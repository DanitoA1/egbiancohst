/*eslint-disable */
const getUser = async (axios, store, cookies, id) => {
  const token  = cookies.get('token')
  await axios
    .get(`/api/v1/applicant/${id}/`, {
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
