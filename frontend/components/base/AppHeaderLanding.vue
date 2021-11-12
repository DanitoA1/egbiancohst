<template>
  <div class="fixed top-0 left-0 z-20 right-0">
    <div class="hidden
          lg:flex bg-dark-blue py-2 w-full">
      <div
        class="
          flex
          flex-row
          mb-1
          mx-auto
          container
          w-11/12
          justify-end
          space-x-8
          text-base text-white
        "
      >
        <nuxt-link to="#staff" class="">Staff</nuxt-link>
        <nuxt-link to="/student/login" class="">Student</nuxt-link>
        <nuxt-link to="#alumni" class="">Alumni</nuxt-link>
        <!-- <span class="ml-20 flex flex-row"
            ><svg-icon name="search" class="w-4 h-4 my-1 mr-2"></svg-icon
            >Search</span
          > -->
      </div>
    </div>
    <div class="w-full py-2 lg:bg-white bg-dark-blue">
      <div class="container w-11/12 mx-auto z-30">
        <div class="flex flex-row items-center justify-between">
          <div class="flex items-center">
            <a href="/">
              <img src="~/assets/images/Logo.svg" class="w-16 h-16 mr-5" alt=""
            /></a>
            <div class=" flex flex-col   mr-3">
              <h1 class="font-semibold text-white lg:text-black lg:text-2xl text-base ">
                <div class="lg:flex hidden">Egbian College of Science and Technology</div>
                <div class="lg:hidden flex tracking-widest">ECHST</div>
              </h1>
              <p class="text-gray-500 lg:text-lg text-sm">Minna, Nigeria</p>
            </div>
          </div>
          <div
            class="
              header
              flex flex-col
              items-end
              space-y-4
              justify-between
              text-xl
              my-2
            "
          >
            <div class="hidden lg:flex flex-row items-end space-x-8">
              <nuxt-link to="/about" class="font-semibold">About</nuxt-link>
              <nuxt-link to="/admission/registration" class="font-semibold"
                >Admission</nuxt-link
              >
              <nuxt-link to="/school/departments" class="font-semibold"
                >Courses</nuxt-link
              >
              <nuxt-link to="/news" class="font-semibold">News</nuxt-link>
              <nuxt-link to="/contact" class="font-semibold">Contact</nuxt-link>
            </div>
            <div class="flex justify-center items-center lg:hidden">
              <div @click="drawer = true">
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
              </div>

              <el-drawer :visible.sync="drawer" :direction="direction">
                <nav class="px-5 text-xl font-semibold text-blue-600">
                  <ul class="space-y-5 text-black">
                    <li divided class="">
                      <router-link to="/about"> About </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="/admission/registration">
                        Admission
                      </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="/school/departments">
                        Courses
                      </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="/news"> News </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="/contact"> Contact </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="#staff"> Staff </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="/student/login"> Students </router-link>
                    </li>
                    <li divided class="">
                      <router-link to="#alumni"> Alumni </router-link>
                    </li>
                  </ul>
                </nav>
              </el-drawer>
            </div>
          </div>
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
<style scoped>
.header a:hover,
.header a.nuxt-link-exact-active {
  color: white;
  padding: 2px 8px;
  border-radius: 0 8px 0 8px;
  @apply bg-dark-blue;
}
</style>
