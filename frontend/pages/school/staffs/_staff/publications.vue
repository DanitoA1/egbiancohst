<template>
  <div class="h-screen">
    <header
      class="
        fixed
        z-50
        px-5
        py-2
        flex
        justify-between
        items-center
        bg-dark-blue
        w-screen
      "
    >
      <div class="flex items-center">
        <span class="mr-10">
          <nuxt-link to="/">
            <img
              src="~/assets/images/Logo.svg"
              class="h-12 w-12 object-contain"
              alt="Egbian Logo"
          /></nuxt-link>
        </span>
        <div class="font-medium py-3 text-white text-base lg:xl pr-6 mr-6">
          Egbian College of Health and Technology
        </div>
      </div>

      <div class="cursor-pointer" @click="drawer = !drawer">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 6.70215H27V8.70215H5V6.70215Z" fill="#fff" />
          <path width="26" d="M5 15.7021H27V17.7021H5V15.7021Z" fill="#fff" />
          <path width="18" d="M5 24.7021H27V26.7021H5V24.7021Z" fill="#fff" />
        </svg>
      </div>
    </header>

    <main class="grid">
      <div class="overflow-y-scroll form-page bg-white h-screen pt-20 pl-20">
        <div
                 :class="[
            drawer ? 'openAside' : '',
            'fixed z-8 h-screen left-0 inset-y-0 sm:pt-16 pt-20 sidebar text-white bg-dark-blue flex flex-col',
          ]"
        >
          <!-- SideBar Content -->
          <div
            class="flex lg:flex-col pl-5 py-3 items-center bg-profile-blue mb-4"
          >
            <img
              src="~/assets/images/profile-pic.svg"
              class="lg:h-32 lg:w-10/12 h-12 w-12 object-contain mx-auto"
              alt=""
            />
            <div class="w-auto ml-4">
              <div class="font-semibold text-xl">Abdur-rasheed Idris</div>
              <p class="text-md text-gray-300">Reg No: 2343243</p>
            </div>
          </div>
          <div class="pl-4 space-y-8 mt-5">
            <div v-for="(content, index) in sideabrContents" :key="index">
              <nuxt-link
                :to="content.link"
                class="flex pl-3 justify-content items-center"
              >
                <font-awesome-icon
                  :icon="[`${content.type}`, `${content.icon}`]"
                  class="w-6 h-6"
                />
                <div :class="['sidebar-text ml-7 text-xl font-medium']">
                  {{ content.name }}
                </div></nuxt-link
              >
            </div>
          </div>

          <!-- SideBar Content Ends -->
        </div>
        <!-- Main Begin -->

        <StaffPublication />

        <!-- Main End -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Template',
  props: ['data'],
  data() {
    return {
      drawer: false,

      sideabrContents: [
        {
          icon: 'home',
          name: 'Home',
          type: 'fas',
          link: '/school/staffs/1',
        },
        {
          icon: 'search-plus',
          name: 'Research Area',
          type: 'fas',
          link: '/school/staffs/1/research',
        },
        {
          icon: 'book',
          name: 'Publications',
          type: 'fas',
          link: '/school/staffs/1/publications',
        },
        {
          icon: 'images',
          type: 'fas',
          name: 'Gallery',
          link: '/school/staffs/1/gallery',
        },
        {
          icon: 'address-card',
          name: 'Bio Data',
          type: 'fas',
          link: '/school/staffs/1/biodata',
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
  width: 70px;
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
.sidebar.openAside .sidebar-text {
  display: flex;
}
.form-page::-webkit-scrollbar,
.sidebar::-webkit-scrollbar {
  display: none;
}
.sidebar:hover,
.openAside {
  width: 288px;
}
a:hover,
a.nuxt-link-exact-active {
  @apply text-gray-400;
}
</style>
