<template>
  <div class=" ">
    <div class="grid grid-cols-3">
      <!-- Dark Blue Half Section -->
      <div
        class="
          h-screen
         
          bg-dark-blue
          flex flex-col
          py-40
          pl-16
          pr-10
          text-white
          space-y-7
          relative
          top-0
          bottom-0
        "
      >
        <div class="absolute bottom-0 left-0">
          <img src="~/assets/images/mortarboard-trans.svg" alt="" />
        </div>
        <div>
          <img
            src="~/assets/images/egbian-logo.svg"
            class="h-20 w-20 object-contain"
            alt=""
          />
        </div>
        <div class="text-3xl">Creating Brilliant Learning path ways</div>
        <div class="text-xl">
          An investment in knowledge pays the best interest -
          <i class="font-medium">Benjamin Franklin</i>
        </div>
      </div>

      <!-- Registration Section -->
      <div class="col-span-2 flex  h-screen overflow-scroll reg-container">
        <!-- Left Section -->
        <div class="w-8/12 pl-32 pr-10 mt-12">
          <div class="flex mb-5">
            <div class="pr-4">
              <svg-icon name="mortarboard" class="w-10 h-10"></svg-icon>
            </div>
            <div class="text-dark-blue font-medium text-xl">
              <div>New account</div>
              <div class="font-bold text-lg">
                Egbian College of Science and Technology
              </div>
            </div>
          </div>

          <!-- Email Input -->
          <div class="mb-8">
            <label for="email" class="text-gray-600 font-bold"> Email </label>
            <div>
              <input
                class="
                  mt-3
                  overflow-ellipsis
                  border-2
                  outline-none
                  border-gray-300
                  w-full
                  shadow-md
                  rounded-md
                  p-3.5
                  focus:border-blue-400
                "
                type="email"
                name="email"
                placeholder="example@domain.edu.ng"
              />
            </div>
          </div>
          <!-- Mobile No Input -->

          <div class="mb-8">
            <label for="telephone" class="text-gray-600 font-bold">
              Mobile No
            </label>
            <div>
              <input
                class="
                  mt-3
                  overflow-ellipsis
                  border-2
                  outline-none
                  border-gray-300
                  w-full
                  shadow-md
                  rounded-md
                  p-3.5
                   focus:border-blue-400
                "
                type="telephone"
                name="email"
                placeholder="+234 8123 456 789"
              />
            </div>
          </div>
          <!-- Password Imput -->

          <div class="mb-8">
            <label for="password" class="text-gray-600 font-bold"> Password </label>
            <div>
              <input
                class="
                  mt-3
                  overflow-ellipsis
                  border-2
                  outline-none
                  border-gray-300
                  w-full
                  shadow-md
                  rounded-md
                  p-3.5
                   focus:border-blue-400
                "
                type="password"
                name="email"
                placeholder="Password Input atleast 8 Characters"
              />
            </div>
          </div>

    <!-- Submit input -->

    <button type="submit" class="
                  bg-dark-blue
                  text-white
                  text-center
                  mt-3
                  overflow-ellipsis
                  border
                  outline-none
                  border-gray-300
                  w-full  
                  rounded-md
                  p-3.5
                ">
  Create an account
    </button>

    <div class="text-center mt-8 mb-20">
    <span class='text-gray-600'>  Already have an account ? </span> <span class="font-bold text-dark-blue"><nuxt-link to='/'>Start application</nuxt-link></span>
    </div>


        </div>

        <!-- Right Section -->
        <div class="w-4/12 mt-4 mr-8">
          <div
            class="
              flex
              justify-end
              items-center
              text-dark-blue
              font-bold
              text-sm
            "
          >
            <div class="mr-2">
              <svg-icon name="help" class="w-8 h-8"></svg-icon>
            </div>
            <div>
              <nuxt-link to="/faq">
                <span>Don’t Know where to start check FAQ </span></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',

  props: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
.reg-container::-webkit-scrollbar{
  display: none
}
</style>
