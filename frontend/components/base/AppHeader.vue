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
        <div class="flex mt-5 justify-center items-center lg:hidden">
          
     

          <el-button
            @click="drawer = false"
            
           
          >
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

          <el-drawer
            title="I am the title"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <span>Hi, there!</span>
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
      };
   },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
