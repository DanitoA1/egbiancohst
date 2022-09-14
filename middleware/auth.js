/*eslint-disable */

export default function ({ app, route, redirect }) {
  const user_type = app.$cookies.get('user_type')
  const publicRoutes = [
    '/auth/admission/login',
    '/auth/admission/registration',
    '/auth/student/login',
    '/auth/school/login',
    '/auth/registrar/login',
  ]
  const token = app.$cookies.get('token')
  if (!token && !publicRoutes.includes(route.fullPath)) {
    if (!route.fullPath.includes('login')) {
      //Prevent storing login routes
      app.$cookies.set('redirect', route.fullPath)
    }

    if (route.fullPath.includes('admission')) {
      redirect('/auth/admission/login')
    } else if (route.fullPath.includes('student')) {
      redirect('/auth/student/login')
    } else if (route.fullPath.includes('registrar')) {
      redirect('/auth/registrar/login')
    } else {
      redirect('/auth/')
    }
  } 
  if (token && !publicRoutes.includes(route.fullPath)) {
    app.$cookies.remove('redirect')
    if (user_type != 'applicant' && route.fullPath.includes('/admission/')) {
      redirect('/auth/admission/login')
    }
    if (user_type != 'student' && route.fullPath.includes('/student/')) {
      redirect('/auth/student/login')
    }
    if (user_type != 'lecturer' && route.fullPath.includes('/school/')) {
      redirect('/school/staffs')
    }
    if (user_type != 'staff' && route.fullPath.includes('/registrar/')) {
      redirect('/auth/registrar/login')
    }
  }
}
