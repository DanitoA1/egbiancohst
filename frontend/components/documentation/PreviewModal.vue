<template>
  <div>
    <div
      class="
        bg-black
        h-screen
        w-screen
        flex
        justify-center
        items-center
        inset-0
        bg-opacity-50
        px-10
        cursor-pointer
        fixed
        z-20
      "
      @click="handleClose"
    >
      <div
        id="printMe"
        class="
          bg-white
          flex flex-col
          rounded-sm
          shadow-md
          w-full
          h-full
          px-16
          lg:m-20
          my-20
          py-4
          z-50
          overflow-y-auto
        "
      >
        <div
          class="
            flex flex-col
            items-center
            justify
            space-y-4
            border-b border-gray-400
            pb-3
            mb-4
            text-center
          "
        >
          <div class="py-2 text-4xl uppercase flex">
            <div>
              <img
                src="~/assets/images/Logo.svg"
                class="h-10 w-10 mr-3"
                alt="Egbian Logo"
              />
            </div>
            <div>Egbian College of Health and Technology</div>
          </div>
          <h2 class="text-xl">
            Admission Application into Undergraduate Programmes For 2022/2023
            Academic Session
          </h2>
        </div>

        <div class="flex justify-between">
          <!-- credential  -->
          <div class="flex flex-col space-y-5 text-lg font-meduim">
            <div>Application No : {{ previewData.regId }}</div>
            <div>Surname : {{ previewData.surname }}</div>
            <div>Middlename : {{ previewData.middlename }}</div>
            <div>Lastname : {{ previewData.lastname }}</div>
            <div>Course : {{ previewData.selectedCourse }}</div>
            <div>Nationality : {{ previewData.selectedCountry }}</div>
            <div>State : {{ previewData.selectedState }}</div>
            <div>LGA : {{ previewData.selectedLga }}</div>
            <div>Gender : {{ previewData.selectedGender }}</div>
          </div>
          <!-- passport  -->
          <div>
            <img
              :src="previewData.passportUrl"
              class="object-center h-52 w-52"
              alt=""
            />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <button
            class="
              bg-blue-600
              hover:bg-dark-blue
              text-white text-center
              my-6
              border
              outline-none
              border-gray-300
              rounded-4px
              p-3.5
            "
            @click="handlePrint"
          >
            Print
          </button>
          <button
            class="
              bg-blue-600
              hover:bg-dark-blue
              text-white text-center
              my-6
              border
              outline-none
              border-gray-300
              rounded-4px
              p-3.5
            "
            @click="handleClose"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiodataPreview',
  props: ['previewData', 'handleClose'],
  data() {
    return {}
  },

  methods: {
    async handlePrint() {
      // Pass the element id here
      await this.$htmlToPaper('printMe')
    },
  },
}
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100%;
  background: url('~assets/images/login-bg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
