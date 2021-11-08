<template>
  <div class="container relative w-11/12 mx-auto z-30">
    <div class="flex flex-row justify-between my-6">
      <nuxt-link to="/">
        <img src="~/assets/images/Logo.svg" alt=""
      /></nuxt-link>
      <div class="flex flex-col items-center justify-between text-xl my-2">
        <div class="hidden lg:flex flex-row justify-end text-dark-blue">
          <nuxt-link to="/" class="mr-16">Staff</nuxt-link>
          <nuxt-link to="/student/login" class="mr-16">Student</nuxt-link>
          <nuxt-link to="/" class="mr-16">Alumni</nuxt-link>
          <span class="ml-20 flex flex-row"
            ><svg-icon name="search" class="w-4 h-4 my-1 mr-2"></svg-icon
            >Search</span
          >
        </div>
        <div class="hidden lg:flex flex-row space-x-16 mr-48">
          <nuxt-link to="/about" class="font-semibold">About</nuxt-link>
          <nuxt-link to="/admission/registration" class="font-semibold"
            >Admission</nuxt-link
          >
          <nuxt-link to="/" class="font-semibold">Courses</nuxt-link>
          <nuxt-link to="/news" class="font-semibold">News</nuxt-link>
          <nuxt-link to="/contact" class="font-semibold">Contact</nuxt-link>
        </div>
        <div class="flex mt-3 justify-center items-center lg:hidden">
          <el-button @click="drawer = true">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 6.70215H27V8.70215H5V6.70215Z" fill="black" />
              <path d="M5 15.7021H27V17.7021H5V15.7021Z" fill="black" />
              <path d="M5 24.7021H27V26.7021H5V24.7021Z" fill="black" />
            </svg>
          </el-button>

          <el-drawer :visible.sync="drawer" :direction="direction">
            <nav class='px-5 text-xl font-semibold text-blue-600 '>
              <ul class='space-y-5 text-black'>
                <li divided class='hover:text-blue-600'><router-link  to='/about'> About  </router-link></li>
              <li divided class='hover:text-blue-600'> <router-link to='/admission/registration'>  Admission  </router-link> </li>
             <li divided class='hover:text-blue-600'>   <router-link to='/'> Courses  </router-link> </li>
             <li divided class='hover:text-blue-600'>  <router-link to='/news'>  News   </router-link> </li>
              <li divided class='hover:text-blue-600'> <router-link to='/contact'>  Contact  </router-link> </li>
              <li divided class='hover:text-blue-600'> <router-link to='/staff'>  Staff  </router-link> </li>
              <li divided class='hover:text-blue-600'> <router-link to='/student/login'>  Students  </router-link> </li>
              <li divided class='hover:text-blue-600'> <router-link to='/admission'>  Alumni  </router-link> </li>
              </ul>
            </nav>
          </el-drawer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    }
  },
}
</script>
