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
              <div>New account</div>
              <div class="font-bold text-lg">
                Egbian College of Sciences and Technology
              </div>
            </div>
          </div>
          <!-- Email -->

          <div class="mt-4">
            <label class="text-gray-600 font-bold"> Email </label>
            <input
              v-model.trim="email"
              class="mt-1 mr-5 overflow-ellipsis outline-none border w-full rounded-md p-3.5"
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <small
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required!</small
            >
            <small v-if="!$v.email.email" class="text-red-500"
              >Invalid email address
            </small>
          </div>

          <!-- Phone Number -->

          <div class="mt-4">
            <label class="text-gray-600 font-bold"> Phone Number </label>
            <input
              v-model.trim="phoneNumber"
              class="mt-1 mr-5 overflow-ellipsis outline-none border w-full rounded-md p-3.5"
              type="phone"
              name="email"
              placeholder="+234 81XX XXX XXXX"
            />
            <small
              v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
              class="text-red-500"
              >Phonenumber is required!</small
            >
            <small v-if="!$v.phoneNumber.numeric" class="text-red-500"
              >Phonenumber must be a number</small
            >
          </div>

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
          <!-- Repeat Password -->

          <div class="mt-4">
            <label class="text-gray-600 font-bold"> Repeat Password </label>
            <div
              class="flex items-center space-x-1 mt-1 mr-5 overflow-ellipsis border w-full rounded p-3.5"
            >
              <input
                v-model.trim="confirmPassword"
                class="outline-none bg-transparent flex-1"
                :type="type2"
                name="password"
                placeholder="*********"
              />
              <div
                class="cursor-pointer text-sm font-medium text-blue-500"
                @click="showPassword2"
              >
                <span v-if="type2 === 'password'">SHOW</span>
                <span v-else>HIDE</span>
              </div>
            </div>
            <small
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="me-auto text-red-500"
            >
              Confirm Password is required!
            </small>
            <small
              v-if="!$v.confirmPassword.sameAsPassword"
              class="me-auto text-red-500"
            >
              Passwords does not tally
            </small>
          </div>

          <!-- Submit input -->
          <div v-if="!successReg" class="w-full mt-4">
            <button
              :disabled="loading"
              class="bg-dark-blue text-white text-center mt-3 overflow-ellips border w-full rounded p-3.5"
              @click="submitForm"
            >
              Start Application
            </button>
          </div>
          <div v-else class="success">
            Congrats 🎊 your account is ready, please check your mail to find
            your login details and further instructions
          </div>

          <div class="text-center mt-8 pb-20 space-x-4">
            <span class="text-gray-600"> Already have an account ? </span>
            <span class="font-bold text-dark-blue mr-3"
              ><nuxt-link to="/auth/admission/login">Login</nuxt-link></span
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
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  email,
  sameAs,
  numeric,
} from 'vuelidate/lib/validators'
export default {
  name: 'ApplicationRegistration',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    phoneNumber: { required, numeric },
    password: {
      required,
      minLength: minLength(8),
    },
    confirmPassword: {
      required,
      minLength: minLength(8),
      sameAsPassword: sameAs('password'),
    },
  },
  props: {},
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: null,
      successReg: false,
      type1: 'password',
      type2: 'password',
      loading: false,
    }
  },
  // mounted() {
  //   this.$auth.logout()
  // },
  methods: {
    async register() {
      const auth = {
        email: this.email,
        password: this.password,
        phone: this.phoneNumber,
      }
      if (!navigator.onLine) {
        this.$toast.error('Check your internet connection')
      }
      try {
        this.loading = true
        await this.$axios.post('/api/v1/applicant/', auth).then((res) => {
          console.log(res)

          this.$toast.success('Registration Successful')
          this.loading = false
          this.successReg = true
        })
      } catch (error) {
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.message)
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
    showPassword2() {
      if (this.type2 === 'password') {
        this.type2 = 'text'
      } else {
        this.type2 = 'password'
      }
    },

    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.register()
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
.success {
  margin: 16px 0;
  padding: 16px;
  background: #e6ffe9;
  border: 2px solid #07b128;
  border-radius: 9px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #49cb5c;
}
</style>
