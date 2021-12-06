<template>
  <div class="">
    <div class="flex lg:flex-row flex-col">
      <!-- Dark Blue Half Section -->
      <div
        class="
          h-screen
          w-1/3
          hidden
          bg-dark-blue
          lg:flex
          flex-col
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
          <nuxt-link to="/">
            <img src="~/assets/images/mortarboard-trans.svg" alt="" />
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/">
            <img
              src="~/assets/images/egbian-logo.svg"
              class="h-20 w-20 object-contain"
              alt=""
          /></nuxt-link>
        </div>
        <div class="text-3xl">Creating Brilliant Learning path ways</div>
        <div class="text-xl">
          An investment in knowledge pays the best interest -
          <i class="font-medium">Benjamin Franklin</i>
        </div>
      </div>

      <!-- Registration Section -->
      <div
        class="flex lg:flex-row flex-col h-screen overflow-scroll reg-container"
      >
        <!-- Left Section -->
        <div class="lg:w-8/12 w-full lg:pl-32 px-8 lg:pr-10 mt-12">
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
                  border
                  outline-none
                  border-gray-300
                  w-full
                  focus:shadow-md
                  rounded-4px
                  p-3.5
                  focus:border-blue-400
                "
                type="email"
                v-model="auth.email"
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
                  border
                  outline-none
                  border-gray-300
                  w-full
                  focus:shadow-md
                  rounded-4px
                  p-3.5
                  focus:border-blue-400
                "
                type="tel"
                v-model="auth.phoneNumber"
                placeholder="+234 8123 456 789"
              />
            </div>
          </div>
          <!-- Password Imput -->

          <div class="mb-8">
            <label for="password" class="text-gray-600 font-bold">
              Password
            </label>
            <div>
              <input
                class="
                  mt-3
                  overflow-ellipsis
                  border
                  outline-none
                  border-gray-300
                  w-full
                  focus:shadow-md
                  rounded-4px
                  p-3.5
                  focus:border-blue-400
                "
                type="password"
                v-model="auth.password"
                placeholder="Password Input atleast 8 Characters"
              />
            </div>
          </div>

          <!-- Submit input -->

          <button
            @click="Register"
            class="
              bg-dark-blue
              text-white text-center
              mt-3
              overflow-ellipsis
              border
              outline-none
              border-gray-300
              w-full
              rounded-4px
              p-3.5
            "
          >
            Create an account
          </button>

          <div class="text-center mt-8 mb-20 space-x-4">
            <span class="text-gray-600"> Already have an account ? </span>
            <span class="font-bold text-dark-blue mr-3"
              ><nuxt-link to="/admission/login">Login</nuxt-link></span
            >
            |
            <span class="font-bold text-dark-blue"
              ><nuxt-link to="/">Homepage</nuxt-link></span
            >
          </div>
        </div>

        <!-- Right Section -->
        <div class="lg:w-4/12 px-5 order-first lg:order-last w-full mt-4 mr-8">
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
  name: 'application-registration',

  props: {},
  data() {
    return {
      auth: {
        email: '',
        password: '',
        phoneNumber: null,
      },
    }
  },
  created() {},
  methods: {
    async Register() {
      const dis = this

      await this.$fire.auth
        .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .then(({ user }) => {
          this.$notify({
            title: 'Registered',
            message: 'Registration Successful',
            type: 'success',
          })

          console.log('Acct Created Successfully')
          console.log(user)
          dis.$store.dispatch('createUser', {
            id: user.uid,
            email: dis.auth.email,
            password: dis.auth.password,
            phoneNumber: dis.auth.phoneNumber,
          })
          dis.$router.push('/admission/login')
        })
        .catch((err) => {
          this.$notify.error({
            title: 'Error',
            message: `${err.message}`,
          })
        })
    },
  },
}
</script>

<style scoped>
.reg-container::-webkit-scrollbar {
  display: none;
}
</style>
