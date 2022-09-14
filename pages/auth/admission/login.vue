<!-- eslint-disable -->
<template>
  <div class="">
    <UILoader v-if="loading" />
    <div class="flex lg:flex-row flex-col">
      <!-- Dark Blue Half Section -->
      <div
        class="h-screen w-1/3 hidden bg-dark-blue lg:flex flex-col py-40 pl-16 pr-10 text-white space-y-7 relative top-0 bottom-0"
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
              <div>Registered account</div>
              <div class="font-bold text-lg">
                Egbian College of Sciences and Technology
              </div>
            </div>
          </div>
          <!-- username -->

          <div class="mt-4">
            <label class="text-gray-600 font-bold"> Username </label>
            <input
              v-model.trim="username"
              class="mt-1 mr-5 overflow-ellipsis outline-none border w-full rounded-md p-3.5"
              type="text"
              name="username"
              placeholder="egb22020000017"
            />
            <small
              v-if="!$v.username.required && $v.username.$dirty"
              class="text-red-500"
              >Username is required!</small
            >
          </div>

          <!-- Phone Number -->

          <!-- Password -->

          <div class="mt-4">
            <label class="text-gray-600 font-bold"> Password </label>
            <div
              class="flex items-center space-x-1 mt-1 mr-5 overflow-ellipsis border w-full rounded p-3.5"
            >
              <input
                v-model.trim="password"
                class="outline-none bg-transparent flex-1"
                :type="type1"
                name="password"
                placeholder="*********"
              />
              <div
                class="cursor-pointer text-sm font-medium text-blue-500"
                @click="showPassword1"
              >
                <span v-if="type1 === 'password'">SHOW</span>
                <span v-else>HIDE</span>
              </div>
            </div>
            <small
              v-if="!$v.password.required && $v.password.$dirty"
              class="me-auto text-red-500"
            >
              Password is required!
            </small>
            <small v-if="!$v.password.minLength" class="me-auto text-red-500">
              Password must be between 8 characters and above
            </small>
          </div>

          <!-- Submit input -->
          <button
            :disabled="loading"
            class="bg-dark-blue text-white text-center mt-8 overflow-ellips border w-full rounded p-3.5"
            @click="submitForm"
          >
            Login
          </button>

          <div class="text-center mt-8 mb-20 space-x-4">
            <span class="text-gray-600"> Dont have an account ? </span>
            <span class="font-bold text-dark-blue mr-3"
              ><nuxt-link to="/auth/admission/registration"
                >Start Application</nuxt-link
              ></span
            >
            |<span class="font-bold text-dark-blue"
              ><nuxt-link to="/">Homepage</nuxt-link></span
            >
          </div>
        </div>

        <!-- Right Section -->
        <div class="lg:w-4/12 px-5 order-first lg:order-last w-full mt-4 mr-8">
          <div
            class="flex justify-end items-center text-dark-blue font-bold text-sm"
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
import getUser from '@/Utils/getUser'

import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'ApplicationRegistration',
  middleware: 'guest',
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  props: {},
  data() {
    return {
      username: '',
      password: '',

      type1: 'password',
      loading: false,
    }
  },
  // mounted() {
  //   this.$auth.logout()
  // },
  methods: {
    async login() {
      const auth = {
        username: this.username,
        password: this.password,
      }
      if (!navigator.onLine) {
        this.$toast.error('Check your internet connection')
      }
      try {
        this.loading = true
        await this.$axios.post('/account/auth/applicant/', auth).then((res) => {
          const { id } = res.data.data
          const { user_type } = res.data.data.user
          const token = res.data.data.token
          this.$store.dispatch('setToken', token)
          this.$cookies.set('token', token)
          this.$cookies.set('user_type', user_type)
          const redirectUrl = this.$cookies.get('redirect')
          getUser(this.$axios, this.$store, this.$cookies, user_type, id)
          if (user_type.toLowerCase().includes('applicant')) {
            if (redirectUrl) {
              this.$router.push(redirectUrl)
            } else {
              this.$router.push('/admission/documentation')
            }

            this.$toast.success('Login Successful')
          } else {
            this.$toast.error('Permission denied, user is not an applicant')
          }
          this.$cookies.remove('redirect')
          this.loading = false
        })
      } catch (error) {
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.data.error)
        }

        this.loading = false
      }
    },
    showPassword1() {
      if (this.type1 === 'password') {
        this.type1 = 'text'
      } else {
        this.type1 = 'password'
      }
    },

    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.login()
      }
    },
  },
}
</script>

<!-- eslint-disable -->
<style scoped>
.reg-container::-webkit-scrollbar {
  display: none;
}
</style>
