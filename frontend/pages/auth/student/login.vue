<!-- eslint-disable -->

<template>
  <div>
    <UILoader v-if="loading" />
    <div class="login">
      <div
        class="bg-gray-100 h-screen w-screen flex justify-center items-center inset-0 bg-opacity-30 px-10"
      >
        <div
          class="bg-white rounded-sm shadow-md w-auto h-auto px-16 mx-5 py-4"
        >
          <p class="text-xl font-bold mb-10 text-center">Student Portal</p>

          <div class="mb-10">
            <label for="email" class="text-gray-600 font-semibold">
              Username
            </label>
            <div>
              <input
                v-model.trim="username"
                class="mt-1 mr-5 overflow-ellipsis outline-none border w-full rounded-md p-3.5"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <small
              v-if="!$v.username.required && $v.username.$dirty"
              class="text-red-500"
              >Username is required!</small
            >
          </div>

          <div class="mt-2">
            <label class="text-gray-600 font-medium"> Password </label>
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

          <div class="flex items-center">
            <input type="checkbox" class="mr-2 mt-2 w-4 h-4" name="remember" />
            <span class="mt-1 text-gray-500">Remember me</span>
          </div>

          <button
            @click="submitForm"
            class="bg-dark-blue text-white text-center mt-10 mb-3 overflow-ellipsis border outline-none border-gray-300 w-full rounded-4px p-3.5"
          >
            Login
          </button>

          <div class="text-center">
            <span class="font-bold text-dark-blue"
              ><a href="/"> Homepage </a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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
        await this.$axios.post('/account/auth/student/', auth).then((res) => {
          console.log(res.data)
          const { user_type } = res.data.data.user
          const token = res.data.data.token
          this.$store.dispatch('setToken', token)
          this.$cookies.set('token', token)
          this.$cookies.set('user_type', user_type)
          const redirectUrl = this.$cookies.get('redirect')
          this.$store.dispatch('getUserData', res.data.data)
          if (user_type.toLowerCase().includes('student')) {
            if (redirectUrl) {
              this.$router.push(redirectUrl)
            } else {
              this.$router.push('/student/dashboard')
            }

            this.$toast.success('Login Successful')
          } else {
            this.$toast.error('Permission denied, user is not  student')
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
.input-box {
  background: #fff;
  border: 0.718412px solid #2f80ed;
  box-sizing: border-box;
  box-shadow: 2px 3px 7px rgba(47, 128, 237, 0.18);
  border-radius: 3.59206px;
}
</style>
