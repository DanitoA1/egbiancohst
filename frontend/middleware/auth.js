/*eslint-disable */

export default function ({ app, route, store, redirect }) {
  const user_type  = store.state.userData?.user.user_type || null
  store.dispatch('handleRedirectUrl', route.fullPath)
  const token = app.$cookies.get('token')
  if (!token) {
    if (route.fullPath.includes('admission')) {
      redirect('/admission/login')
    } else if (route.fullPath.includes('student')) {
      redirect('/student/login')
    } else if (route.fullPath.includes('registrar')) {
      redirect('/registrar/login')
    } else {
      redirect('/')
    }
  }

  if (
    (token && route.fullPath.includes('login')) ||
    route.fullPath.includes('registration')
  ) {
    if (user_type === 'applicant') {
      this.$router.push('/admission/documentation')
    }
    if (user_type === 'student') {
      this.$router.push('/student/dashboard')
    }
    if (user_type === 'lecturer') {
      this.$router.push('/school/staffs')
    }
    if (user_type === 'admin') {
      this.$router.push('/registrar/admin')
    }
  }
}
