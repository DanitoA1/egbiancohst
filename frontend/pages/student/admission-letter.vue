<template>
  <div class="h-screen">
    <header
      class="fixed z-50 px-5 py-2 flex items-center bg-dark-blue w-screen"
    >
      <span class="mr-10">
        <img
          src="~/assets/images/Logo.svg"
          class="h-10 w-10 object-contain"
          alt="Egbian Logo"
        />
      </span>
      <div class="font-medium py-3 text-white text-xl pr-6 mr-6">
        Egbian College of Health and Technology
      </div>
    </header>

    <main class="grid pl-48">
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
          <div class="flex pl-3 py-3 items-center bg-profile-blue mb-4">
            <img
              src="~/assets/images/profile-pic.svg"
              class="h-12 w-12 object-contain mr-4"
              alt=""
            />
            <div class="w-auto">
              <div class="font-semibold text-xl">
                Abdur-rasheed Idris Adebayo
              </div>
              <p class="text-md text-gray-300">Reg No: 2343243</p>
            </div>
          </div>

          <div class="space-y-8 mt-5">
            <div
              v-for="(content, index) in sideabrContents"
              :key="index"
              class="flex pl-3 justify-content items-center"
            >

             <font-awesome-icon
                :icon="['fa', `${content.icon}`]"
               
              />
              <font-awesome-icon icon="fa-solid fa-grid-2" />
              
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
          <!-- SideBar Content Ends -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Admission-letter',
  props: {},
  data() {
    return {
      sideabrContents: [
        { icon: 'grid-2', name: 'Dashboard', link: '/student/dashboard' },
        {
          icon: 'envelope-open-text',
          name: 'Admission letter',
          link: '/student/admission-letter',
        },
        { icon: 'address-card', name: 'Bio Data Records', link: '/student/biodata' },
        {
          icon: 'list-check',
          name: 'Course registration',
          link: '/student/course-reg',
        },
        { icon: 'site-map', name: 'Accomodation', link: '/student/accomodation' },
        { icon: 'credit-card', name: 'School Fee', link: '/student/school-fee' },
        { icon: 'book-user', name: 'Result', link: '/student/result/' },
        { icon: 'logout', name: 'Logout', link: '/student/logout' },
      ],
    }
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  transition: width 0.27s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 5;
}
.form-page::-webkit-scrollbar {
  display: none;
}
</style>
