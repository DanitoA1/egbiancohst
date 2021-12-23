<template>
  <div class="h-screen">
    <header class="fixed z-50 px-2 py-2 flex items-center bg-black w-screen">
      <span class="mr-10">
        <router-link to="/">
          <img
            src="~/assets/images/Logo.svg"
            class="h-10 w-10 object-contain"
            alt="Egbian Logo"
          /> </router-link
      ></span>
      <div
        class="
          font-medium
          py-3
          text-white text-xl
          pr-6
          border-r-2 border-white
          mr-6
        "
      >
        <p class="lg:flex hidden">Egbian College of Health and Technology</p>
        <p class="flex lg:hidden">ECHST</p>
      </div>
      <span class="text-white"> {{ pageTag[`${pageTracker}`] }} </span>
    </header>

    <main class="grid lg:grid-cols-2">
      <div class="overflow-y-scroll form-page bg-white h-screen pt-20 pl-22">
        <div
          class="
            fixed
            z-8
            h-screen
            left-0
            inset-y-0
            pt-20
            pl-3
            sidebar
            text-white
            bg-dark-blue
            flex flex-col
          "
        >
          <!-- SideBar Content -->
          <div class="flex justify-content items-center mb-4">
            <img
              src="~/assets/images/user-acct.svg"
              class="h-8 w-8 object-contain mr-4"
              alt=""
            />
            <div class="sidebar-text flex-col">
              <div class="font-meduim text-xl"> {{  getCurrentCandidate ? getCurrentCandidate.fullname : 'loading...'  }}  </div>
              <p class="text-xs">
                {{
                  getCurrentCandidate ? getCurrentCandidate.email : 'loading...'
                }}
              </p>
            </div>
          </div>

          <div class="space-y-8 mt-5">
            <div v-for="(content, index) in sideabrContents" :key="index">
              <div
                class="flex justify-content items-center cursor-pointer"
                @click="content.link"
              >
                <img
                  :src="require(`~/assets/images/${content.icon}.svg`)"
                  :alt="content.icon"
                  :class="[index === 1 ? 'ml-0' : 'ml-1', 'object-contain']"
                />
                <div
                  :class="[
                    index > 1 ? 'ml-5' : 'ml-6',
                    'sidebar-text text-md font-normal',
                  ]"
                >
                  {{ content.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- SideBar Content Ends -->
        </div>

        <DocumentationDetails
          v-if="pageTracker === 1"
          :getCurrentCandidate="getCurrentCandidate"
        />
        <DocumentationPSCertificate
          v-if="pageTracker === 2"
          :getCurrentCandidate="getCurrentCandidate"
        />
        <DocumentationBCertificate
          v-if="pageTracker === 3"
          :getCurrentCandidate="getCurrentCandidate"
        />

        <div class="flex justify-between text-center mb-20 mr-7">
          <button
            :disabled="pageTracker == 1"
            :class="
              pageTracker == 1
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-dark-blue'
            "
            class="w-auto rounded-sm p-3 px-5 text-white"
            @click="pageTrackerHandlerBack"
          >
            <div class="lg:flex hidden text-center">Back</div>
            <div class="lg:hidden block">
              <font-awesome-icon
                :icon="['fas', 'angle-double-left']"
                class="w-6 text-white h-6"
              />
            </div>
          </button>
      
          <button
            :class="
              pageTracker == 3
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-dark-blue'
            "
            :disabled="pageTracker == 3"
            class="w-auto rounded-sm p-3 px-5 text-white"
            @click="pageTrackerHandlerNext"
          >
            <div class="lg:flex hidden text-center">Next</div>
            <div class="lg:hidden block">
              <font-awesome-icon
                :icon="['fas', 'angle-double-right']"
                class="w-6 text-white h-6"
              />
            </div>
          </button>
        </div>
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
import { mapGetters } from 'vuex'
export default {
  name: 'documentation',
  props: {},
  data() {
    return {
      page: null,
      pageTracker: 1,
      sideabrContents: [
        {
          icon: 'profile',
          name: 'Personal Details',
          link: this.personalDetailHandler,
        },
        {
          icon: 'badge',
          name: 'Certificates',
          link: this.certificateHandler,
        },
        { icon: 'draft', name: 'Draft', link: this.draftHandler },
        { icon: 'mail', name: 'Contact us', link: this.contactHandler },
        { icon: 'logout', name: 'logout', link: this.logoutHandler },
      ],
      pageTag: {
        1: 'Personal Details',
        2: 'Certificates',
        3: 'Certificates',
      },
    }
  },
  computed: {
    ...mapGetters(['getCurrentCandidate']),
  },
  mounted() {},
  methods: {
    // pageSelector() {
    //   switch (this.pageTracker) {
    //     case 1:
    //       return ( <DocumentationDetails />)
    //     case 2:
    //       return (<PSCertificates />)
    //     default:
    //       ;<DocumentationDetails />
    //   }
    // },

    pageTrackerHandlerBack() {
      this.pageTracker = this.pageTracker - 1
    },
    pageTrackerHandlerNext() {
      this.pageTracker = this.pageTracker + 1
    },
    personalDetailHandler() {
      this.pageTracker = 1
    },
    certificateHandler() {
      this.pageTracker = 2
    },
    draftHandler() {
      this.pageTracker = 1
    },
    contactHandler() {
      this.$router.push('/contact')
    },
    async logoutHandler() {
      await this.$fire.auth.signOut()
      this.$router.push('/admission/login')
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
  z-index: 30;
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
