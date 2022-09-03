<!-- eslint-disable -->
<template>
  <!-- <UILoader v-if="loading" /> -->

  <div class="h-screen">
    <header class="fixed z-20 px-2 py-2 flex items-center bg-black w-screen">
      <span class="mr-10">
        <router-link to="/">
          <img
            src="~/assets/images/Logo.svg"
            class="h-10 w-10 object-contain"
            alt="Egbian Logo"
          /> </router-link
      ></span>
      <div
        class="font-medium py-3 text-white text-xl pr-6 border-r-2 border-white mr-6"
      >
        <p class="lg:flex hidden">Egbian College of Health and Technology</p>
        <p class="flex lg:hidden">ECHST</p>
      </div>
      <span class="text-white"> {{ pageTag[`${pageTracker}`] }} </span>
    </header>

    <main class="grid lg:grid-cols-2">
      <div class="overflow-y-scroll form-page bg-white h-screen pt-20 pl-22">
        <div
          class="fixed z-8 h-screen left-0 inset-y-0 pt-20 pl-3 sidebar text-white bg-dark-blue flex flex-col"
        >
          <!-- SideBar Content -->
          <div class="flex justify-content items-center mb-4">
            <img
              :src="
                userData
                  ? userData.picture
                  : require('~/assets/images/user-acct.svg')
              "
              class="h-10 w-10 object-contain mr-4"
              alt=""
            />
            <div class="sidebar-text flex-col">
              <div class="font-meduim text-xl">
                {{
                  userData
                    ? `${userData.first_name}   ${userData.last_name}`
                    : 'Loading'
                }}
              </div>
              <p class="text-xs">
                {{ userData ? userData.email : 'loading...' }}
              </p>
            </div>
          </div>

          <div class="space-y-4 mt-5">
            <div
              v-for="(content, index) in sideabrContents"
              :key="index"
              :class="index + 1 == pageTracker ? 'bg-blue-600' : null"
              class="pl-3 py-3 rounded-l-full"
            >
              <div
                class="flex justify-content items-center cursor-pointer"
                @click="content.link"
              >
                <font-awesome-icon
                  :icon="['fas', `${content.icon}`]"
                  class="w-6 text-white h-6"
                />
                <div
                  :class="[
                    index > 1 ? 'ml-5' : 'ml-6',
                    'sidebar-text text-md font-semibold',
                  ]"
                >
                  {{ content.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- SideBar Content Ends -->
        </div>
        <div class="space-y-2">
          <div class="text-xl font-semibold"><p>Student Admission Form</p></div>
          <p class="text-gray-500">
            Please ensure your fill in correct details
          </p>
          <div class="font-semibold">
            <span>Application Number:</span>
            <span class="text-gray-500">
              {{ userData ? userData.user.username : 'Loading...' }}
            </span>
          </div>
        </div>
        <DocumentationUploadPassport
          v-if="pageTracker === 1"
          :userData="userData"
        />
        <DocumentationMakePayment
          v-if="pageTracker === 2"
          :userData="userData"
        />
        <DocumentationBiodata v-if="pageTracker === 3" :userData="userData" />
        <DocumentationUploadDoc v-if="pageTracker === 4" :userData="userData" />
        <DocumentationAdminStatus
          v-if="pageTracker === 5"
          :userData="userData"
        />
      </div>

      <div class="bg-dark-blue hidden lg:flex justify-center items-end">
        <div class="">
          <img
            src="~/assets/images/new-student.svg"
            class=""
            alt="new student"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex'
export default {
  name: 'documentation',
  middleware: 'auth',
  props: {},
  data() {
    return {
      loadingState: true,
      page: null,
      pageTracker: 1,
      sideabrContents: [
        {
          icon: 'camera',
          name: 'Upload Passport',
          link: this.uploadPassportHandler,
        },
        {
          icon: 'credit-card',
          name: 'Make Payment',
          link: this.makePaymentHandler,
        },
        { icon: 'user-edit', name: 'Biodata', link: this.biodataHandler },
        { icon: 'file', name: 'Upload Document', link: this.uploadDocHandler },
        {
          icon: 'info-circle',
          name: 'Admission Status',
          link: this.adminStatusHandler,
        },
        { icon: 'sign-out-alt', name: 'logout', link: this.logoutHandler },
      ],
      pageTag: {
        1: 'Upload Passport',
        2: 'Make Payement',
        3: 'Biodata',
        4: 'Upload Document',
        5: 'Admission Status',
      },
    }
  },
  computed: {
    ...mapState(['userData']),
  },

  mounted() {
    console.log(this.userData)
  },

  methods: {
    uploadPassportHandler() {
      this.pageTracker = 1
    },
    makePaymentHandler() {
      this.pageTracker = 2
    },
    biodataHandler() {
      this.pageTracker = 3
    },
    uploadDocHandler() {
      this.pageTracker = 4
    },
    adminStatusHandler() {
      this.pageTracker = 5
    },
    ...mapActions(['logOut']),
    logoutHandler() {
      this.logOut()
    },
  },
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  transition: width 0.27s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 15;
}
.sidebar-text {
  display: none;
}
.sidebar:hover .sidebar-text {
  display: flex;
}
.sidebar:hover {
  width: 250px;
}
.form-page::-webkit-scrollbar {
  display: none;
}
.centerImage {
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
