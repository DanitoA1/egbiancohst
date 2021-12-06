export default function ({ app, route, redirect }) {
    //  The Below Codes Helps in Route Protection
  if (route.path !== '/student/login' && route.path.includes('/student/') && route.path !== '/admission/login' && route.path.includes('/admission/' ) ) {
      //  On a Protected Route
  
    if (!app.$fire.auth.currentUser) {
      return redirect('/student/login')
    } 
  } else if (route.path === '/student/login' || route.path === '/admission/login'){
    if (!app.$fire.auth.currentUser) {
        //  Remain in Login Page
    }
    else{
        return redirect('/')
    }
  }
}
