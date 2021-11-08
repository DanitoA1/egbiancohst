<template>
  <div class="h-screen">
    <header
      class="fixed z-50 px-5 py-2 flex items-center bg-dark-blue w-screen"
    >
      <span class="mr-10">
       <nuxt-link to="/"> <img
          src="~/assets/images/Logo.svg"
          class="h-12 w-12 object-contain"
          alt="Egbian Logo"
        /></nuxt-link>
      </span>
      <div class="font-medium py-3 text-white text-xl pr-6 mr-6">
        Egbian College of Health and Technology
      </div>
    </header>

    <main class="grid">
      
      <div class="overflow-y-scroll form-page bg-white h-screen pt-20 pl-22">
        <div
          class="
            fixed
            z-8
            h-screen
            left-0
            inset-y-0
            pt-16
            sidebar
            text-white
            bg-dark-blue
            flex flex-col
          "
        >
          <!-- SideBar Content -->
          <div class="flex pl-5 py-3 items-center bg-profile-blue mb-4">
            <img
              src="~/assets/images/profile-pic.svg"
              class="h-12 w-12 object-contain mr-4"
              alt=""
            />
            <div class="w-auto ml-4">
              <div class="font-semibold  text-xl">
                Abdur-rasheed Idris
              </div>
              <p class="text-md text-gray-300">Reg No: 2343243</p>
            </div>
          </div>
           <div class="pl-4 space-y-8 mt-5">
            <div v-for="(content, index) in sideabrContents" :key="index">
              <nuxt-link
                :to="content.link"
                class="flex pl-3 justify-content items-center"
              >
                <font-awesome-icon :icon="[`${content.type}`, `${content.icon}`]" class="w-6 h-6" />
                <div
                  :class="[
                    
                    'sidebar-text ml-7 text-xl font-medium',
                  ]"
                >
                  {{ content.name }}
                </div></nuxt-link
              >
            </div>
          </div>

         
          <!-- SideBar Content Ends -->
        </div>
         
      </div>
  
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdmissionLetter',
  props: {},
  data() {
    return {
      sideabrContents: [
        {
          icon: 'th-large',
          name: 'Dashboard',
          type: 'fas',
          link: '/student/dashboard',
        },
        {
          icon: 'envelope-open-text',
          name: 'Admission letter',
          type: 'fas',
          link: '/student/admission-letter',
        },
        {
          icon: 'address-card',
          name: 'Bio Data Records',
          type: 'fas',
          link: '/student/biodata',
        },
        {
          icon: 'list-alt',
          type: 'fas',
          name: 'Course registration',
          link: '/student/course-reg',
        },
        {
          icon: 'sitemap',
          name: 'Accomodation',
          type: 'fas',
          link: '/student/accomodation',
        },
        {
          icon: 'credit-card',
          name: 'School Fee',
          type: 'fas',
          link: '/student/school-fee',
        },
        { icon: 'book', name: 'Result', type: 'fas', link: '/student/result/' },
        {
          icon: 'sign-out-alt',
          name: 'Logout',
          type: 'fas',
          link: '/student/logout',
        },
      ],
    }
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
.sidebar {
  width: 285px;
  transition: width 0.27s;
  z-index: 5;
  overflow-y : scroll;
}
.form-page::-webkit-scrollbar,
.sidebar::-webkit-scrollbar {
  display: none;
}
</style>
