<template>
  <div>
    <div class="login">
      <div
        class="
          bg-gray-100
          h-screen
          w-screen
          flex
          justify-center
          items-center
          inset-0
          bg-opacity-30
        "
      >
        <div class="bg-white rounded-sm shadow-md w-auto h-auto px-16 py-4">
          <p class="text-xl font-bold mb-10">Student Portal</p>

          <div class="mb-10">
            <label for="email" class="text-gray-600 font-semibold">
              Username
            </label>
            <div>
              <input
                class="
                  mt-3
                  overflow-ellipsis
                  border
                  outline-none
                  border-gray-300
                  w-80
                  focus:shadow-md
                  rounded-4px
                  p-3.5
                  focus:border-blue-400
                "
                type="text"
                name="email"
                placeholder="Input Phone no., Reg ID or email"
              />
            </div>
          </div>

          <div class="mb-1">
            <label for="password" class="text-gray-600 font-semibold">
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
                  w-80
                  focus:shadow-md
                  rounded-4px
                  p-3.5
                  focus:border-blue-400
                "
                type="password"
                name="email"
                placeholder="Your Secret Pin"
              />
            </div>
          </div>

          <div class="flex items-center">
            <input type="checkbox" class="mr-2 mt-2 w-4 h-4" name="remember" />
            <span class="mt-1 text-gray-500">Remember me</span>
          </div>

          <button
            type="submit"
            class="
              bg-dark-blue
              text-white text-center
              mt-10
              mb-3
              overflow-ellipsis
              border
              outline-none
              border-gray-300
              w-full
              rounded-4px
              p-3.5
            "
          >
            Login
          </button>

          <div class="text-center">
            <span class="text-gray-600"> Already have an account ? </span>
            <span class="font-bold text-dark-blue"
              ><a href="/admission/registration"> Create account</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
