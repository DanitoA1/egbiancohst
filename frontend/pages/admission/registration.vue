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
          <!-- FullName -->

          <InputForm
            v-model="auth.surname"
            :type="`text`"
            :label="`Surname*`"
            :placeholder="`Abdullah`"
          />
          <InputForm
            v-model="auth.middlename"
            :type="`text`"
            :label="`Middle Name`"
            :placeholder="`Ndako`"
          />
          <InputForm
            v-model="auth.lastname"
            :type="`text`"
            :label="`Last Name*`"
            :placeholder="`Chinedu`"
          />

          <!-- Email Input -->
          <InputForm
            v-model="auth.email"
            :type="`email`"
            :label="`Email*`"
            :placeholder="`example@mail.co`"
          />
          <!-- Mobile No Input -->

          <InputForm
            v-model="auth.phoneNumber"
            :type="`tel`"
            :label="`Phone Number`"
            :placeholder="`+234 81XX XXX XXXX`"
          />
          <!-- Password Imput -->

          <InputForm
            v-model="auth.password"
            :type="`password`"
            :label="`Password*`"
            :placeholder="`Password`"
          />
          <InputForm
            v-model="auth.confirmpassword"
            :type="`password`"
            :label="`Confirm Password*`"
            :placeholder="`Password`"
          />

          <!-- Submit input -->

          <button
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
            @click="Register"
          >
            Start Application
          </button>

          <div class="text-center mt-8 pb-20 space-x-4">
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
/* eslint-disable */
export default {
  name: 'application-registration',

  props: {},
  data() {
    return {
      auth: {
        email: '',
        password: '',
        confirmpassword: '',
        surname: '',
        middlename: '',
        lastname: '',
        phoneNumber: null,
      },
      passwordChecker: null,
      filledField: null,
      errorMessage: '',
    }
  },
  created() {},
  methods: {
    formValidator() {
      this.passwordChecker =
        this.auth.password === this.auth.confirmpassword ? true : false
      this.filledField =
        this.auth.password.length > 0 &&
        this.auth.confirmpassword.length > 0 &&
        this.auth.surname.length > 0 &&
        this.auth.lastname.length > 0 &&
        this.auth.phoneNumber.length > 0 &&
        this.auth.email.length > 0
          ? true
          : false

      if (this.passwordChecker === false) {
        this.errorMessage = 'Password Does Not Match'
      } else if (this.filledField === false) {
        this.errorMessage = 'Fill all required field'
      }

      if (this.passwordChecker && this.filledField) {
        return true
      } else {
        return false
      }
    },

    async Register() {
      console.log(this.auth.surname)
      this.formValidator()
      const dis = this
      if (this.formValidator()) {
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
              surname: dis.auth.surname,
              middlename: dis.auth.middlename,
              lastname: dis.auth.lastname,
              phoneNumber: dis.auth.phoneNumber,
              passportUrl: 'https://www.pikpng.com/pngl/m/5-52254_png-file-user-profile-icon-svg-clipart.png'
            })
            dis.$router.push('/admission/login')
          })
          .catch((err) => {
            this.$notify.error({
              title: 'Error',
              message: `${err.message}`,
            })
          })
      } else {
        this.$notify.error({
          title: 'Error',
          message: `${this.errorMessage}`,
        })
      }
    },
  },

}
</script>

<style scoped>
.reg-container::-webkit-scrollbar {
  display: none;
}
</style>
