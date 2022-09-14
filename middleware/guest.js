/*eslint-disable */

export default function ({ app, route, redirect }) {
  const user_type = app.$cookies.get('user_type')
  const publicRoutes = [
    '/admission/login',
    '/admission/registration',
    '/student/login',
    '/school/login',
    '/registrar/login',
  ]
  const token = app.$cookies.get('token')

  if (token && publicRoutes.includes(route.fullPath)) {
    if (user_type == 'applicant') {
     redirect('/admission/documentation')
    }
    if (user_type == 'student') {
     redirect('/student/dashboard')
    }
    if (user_type == 'lecturer') {
     redirect('/school/staffs')
    }
    if (user_type == 'admin') {
     redirect('/registrar/admin')
    }
  }
}
