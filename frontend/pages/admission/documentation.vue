<template>
  <div class="h-screen">
    <header class="fixed z-50 px-2 py-2 flex items-center bg-black w-screen">
      <span class="mr-10">
        <img
          src="~/assets/images/Logo.svg"
          class="h-10 w-10 object-contain"
          alt="Egbian Logo"
        />
      </span>
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
        Egbian College of Health and Technology
      </div>
      <span class="text-white"> {{ pageTag[`${pageTracker}`] }} </span>
    </header>

    <main class="grid grid-cols-2">
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
              <div class="font-meduim text-xl">Abdur-rasheed Idris</div>
              <p class="text-xs">Idrisrash2017@gmail.com</p>
            </div>
          </div>

          <div class="space-y-8 mt-5">
            <div
              v-for="(content, index) in sideabrContents"
              :key="index"
              class="flex justify-content items-center"
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
          <!-- SideBar Content Ends -->
        </div>

        <DocumentationDetails v-if="pageTracker === 1" />
        <DocumentationPSCertificate v-if="pageTracker === 2" />
        <DocumentationBCertificate v-if="pageTracker === 3" />

        <div class="flex justify-between text-center mb-20 mr-7">
          <button
            class="w-32 rounded-sm bg-dark-blue p-3 text-white"
            @click="pageTrackerHandlerBack"
          >
            Back
          </button>
          <button
            class="
              font-semibold
              rounded-sm
              text-dark-blue
              border border-dark-blue
              p-3
              mr-5
              hover:bg-dark-blue hover:text-white
            "
          >
            Save to draft
          </button>
          <button
            class="w-32 rounded-sm bg-dark-blue p-3 text-white"
            @click="pageTrackerHandlerNext"
          >
            Next
          </button>
        </div>
      </div>

      <div class="bg-dark-blue flex justify-center items-end">
        <div class=" ">
          <img
            src="~/assets/images/new-student.svg"
            class=" "
            alt="new student"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {},
  data() {
    return {
      page: null,
      pageTracker: 1,
      sideabrContents: [
        { icon: 'profile', name: 'Personal Details', link: '/' },
        { icon: 'badge', name: 'Certificates', link: '/' },
        { icon: 'draft', name: 'Draft', link: '/' },
        { icon: 'mail', name: 'Contact us', link: '/' },
        { icon: 'logout', name: 'logout', link: '/' },
      ],
      pageTag : {
        1 : 'Personal Details',
        2 : 'Certificates',
        3 : 'Certificates',
      }
    }
  },
  created() {},
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
      this.pageTracker = this.pageTracker - 1;

      console.log(this.pageTracker)
    },
    pageTrackerHandlerNext() {
      this.pageTracker = this.pageTracker + 1;
      
      console.log(this.pageTracker)

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
.centerImage{
  left : 50%;
  transform : translate(-50%, 0%);
}
</style>
