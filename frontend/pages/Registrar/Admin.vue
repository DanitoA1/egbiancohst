<!-- eslint-disable -->
<template>
  <div class="flex min-h-screen">
    <!-- <div
          class="toggle-menu px-4 bg-white fixed top-0 inset-x-0 flex justify-between items-center"
        >
          <a href="/dashboard" class="font-bold text-[#0192ED]">
            <img src="@/assets/Middey_Horizontal.png" class="logo" />
          </a>
          <div class="space-x-6 flex items-center">
            <button class=" ">
              <i class="fa-solid text-xl fa-bell"></i>
            </button>
    
            <button @click="toggle" class=" ">
              <i class="fa-solid text-xl fa-bars"></i>
            </button>
          </div>
        </div> -->

    <div
      class="md:ml-[300px] px-4 py-3 bg-[#f7f7f7] shadow-md text-[#000000] fixed top-0 inset-x-0 flex justify-between items-center"
    >
      <div class="font-bold capitalize flex gap-4 items-center">
        <button @click="toggle" class="md:hidden block">
          <font-awesome-icon :icon="['fas', `bars`]" />
        </button>
        <button
          class="outline-none font-bold text-blue-500 flex items-center gap-4"
          @click="$router.go(-1)"
        >
          <font-awesome-icon :icon="['fas', `arrow-left`]" />
          <h2>Back</h2>
        </button>
      </div>
      <div class="space-x-6 flex items-center">
        <button class=" ">
          <font-awesome-icon :icon="['fas', `bell`]" />
        </button>

        <div class="flex items-center gap-4">
          <h3 class="text-base font-medium">{{ loginUser }}</h3>
          <img
            src="@/assets/Svg/user.svg"
            class="object-fit md:h-10 h-8 md:w-10 w-8"
          />
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="inset-0 bg-[#00000090] z-[3] absolute"
      @click="toggle"
    ></div>
    <div
      :class="[isMobile ? 'isOpen' : null, 'sidebar']"
      class="sidebar text-gray-400 transform duration-500 md:w-[300px] w-[280px] z-10 h-screen md:flex flex-col justify-between bg-white pb-10"
    >
      <div>
        <div class="ml-7 my-5 text-white text-3xl font-bold">ECHST ADMIN</div>

        <div
          class="flex items-center mt-14 mx-5 bg-[#95959533] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
        >
          <span class="w-2/12">
            <img src="@/assets/Svg/search_admin.svg" alt="" />
          </span>
          <div class="w-10/12">
            <input
              type="search"
              name="search"
              placeholder="Search.."
              class="bg-transparent outline-none px-2 py-1"
            />
          </div>
        </div>

        <div class="mt-4 px-5 space-y-2" @click="isMobile = false">
          <!-- Dashboard -->

          <nuxt-link
            to="/registrar/admin/dashboard"
            class="flex items-center mt-14 hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('/dashboard')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/home.svg" alt="" />
            </span>
            <div class="w-10/12">Dashboard</div>
          </nuxt-link>

          <!-- Applicant -->

          <nuxt-link
            to="/registrar/admin/applicant"
            class="flex items-center hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('applicant')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/kyc.svg" alt="" />
            </span>

            <div class="w-10/12">Applicant</div>
          </nuxt-link>

          <!-- Student -->

          <nuxt-link
            to="/registrar/admin/student"
            class="flex items-center hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('student')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/users.svg" alt="" />
            </span>
            <div class="w-10/12">Student</div>
          </nuxt-link>
          <!-- Faculty -->

          <nuxt-link
            to="/registrar/admin/faculty"
            class="flex items-center hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('faculty')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/monitor.svg" alt="" />
            </span>
            <div class="w-10/12">Faculty</div>
          </nuxt-link>
          <nuxt-link
            to="/registrar/admin/department"
            class="flex items-center hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('department')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/monitor.svg" alt="" />
            </span>
            <div class="w-10/12">Department</div>
          </nuxt-link>
          <!-- Department -->

          <nuxt-link
            to="/registrar/admin/staff/"
            class="flex items-center hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              isActiveRoute('staff')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/users.svg" alt=""
            /></span>
            <div class="w-10/12">Staff</div>
          </nuxt-link>

          <!-- Bursary -->

          <nuxt-link
            to="/registrar/admin/Bursary"
            class="flex items-center mb-4 hover:bg-[#0092EC] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 mt-6 py-2"
            :class="
              isActiveRoute('transaction')
                ? 'bg-[#0092EC] text-[#ffffffdb]'
                : 'text-gray-400'
            "
          >
            <span class="w-2/12">
              <img src="@/assets/Svg/transaction.svg" alt=""
            /></span>
            <div class="w-10/12">Bursary</div>
          </nuxt-link>
        </div>
      </div>

      <div
        @click="logout"
        class="flex items-center transform duration-500 transition-all font-medium text-base rounded-md bg-[#0092EC33] text-[#0092EC] mx-5 px-5 mt-10 py-2 cursor-pointer"
      >
        <span class="w-2/12">
          <i class="fa-solid fa-arrow-right-from-bracket"></i
        ></span>
        <div class="w-10/12">Logout</div>
      </div>
    </div>
    <div class="main">
      <div class="w-full py-16 px-4">
        <div
          class="flex flex-col items-center justify space-y-4 border-b border-gray-400 pb-3 text-center"
        >
          <div class="py-2 text-4xl uppercase">
            Egbian College of Health and Technology
          </div>
          <div class="">
            <img
              src="~/assets/images/Logo.svg"
              class="lg:w-40 lg:h-40 w-20 h-20"
              alt=""
            />
          </div>
          <div class="text-2xl">OFFICE OF THE REGISTRAR</div>

          <h2 class="text-xl">
            Admission into Undergraduate Programmes For 2022/2023 Academic
            Session
          </h2>
        </div>
        <nuxt-child />
        <!-- <div class="text-center ">Copyright &copy; 2022</div> -->
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'admin',
  data() {
    return {
      isMobile: false,
      isIntegrationActive: false,
      loginUser: '',
    }
  },
  watch: {
    // checkActivity() {
    //   if (this.checkActivity) {
    //     this.logout();
    //     this.$swal("Timeout, Your session has expired");
    //   }
    // },
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    pageHeader() {
      return this.$route.name
    },
    checkMobile() {
      return this.isMobile
    },
    //   checkActivity() {
    //     return this.$store.state.idleVue.isIdle;
    //   },
    ...mapGetters(['userData']),
  },
  mounted() {
    // console.log(this.userData)
    this.loginUser = `${this.userData?.first_name} ${this.userData?.last_name}`
  },
  methods: {
    ...mapActions(['logOut']),
    logout() {
      this.logOut()
    },
    toggle() {
      this.isMobile = !this.isMobile
    },
    toggleIntegration() {
      this.isIntegrationActive = !this.isIntegrationActive
    },
    isActiveRoute(route) {
      if (this.currentPath.toLowerCase().includes(route)) {
        return true
      }
    },
  },
}
</script>
<!-- eslint-disable -->

<!-- eslint-disable -->
<style scoped>
.toggle-menu {
  display: none;
}
.sidebar {
  position: fixed;
  min-width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background: #343b4a;
  @apply overflow-x-hidden shadow-sm;
}
.sidebar::-webkit-scrollbar {
  width: 4px;
}
.sidebar::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background: #999;
}
.main {
  margin-left: 300px;
  width: 100%;
  background: #f7f7f7;
}

.logo {
  width: 200px;
  height: 40px;
  object-fit: contain;
}
@media screen and (max-width: 640px) {
  .logo {
    width: 100px;
    height: 20px;
    object-fit: contain;
  }
  .toggle-menu {
    display: flex;
  }

  .main {
    margin-left: 0;
  }

  .sidebar {
    left: -100vw;
    transition: all 0.2s linear;
  }
  .sidebar.isOpen {
    left: 0;
  }
}
</style>
<!-- eslint-disable -->
