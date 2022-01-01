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
      
        fixed
      "
    >
      <div
        class="
          bg-white
          flex flex-col
          rounded-sm
          shadow-md
          w-full
          h-full
          px-16
          lg:m-72
          my-32
          py-4
        "
      >
        <div class="ml-auto py-4 cursor-pointer" @click="handleClose">
          <font-awesome-icon
            :icon="['fas', `power-off`]"
            class="w-6 text-red-500 h-6 mr-4"
          />
        </div>
        <div class="mx-auto flex justify-center items-center">
          <img v-if="modalImage" :src="modalImage" alt="document" class="object-contain" />
            <div v-else class="text-red-500"> Empty Doc  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocModal',
  props: ['modalImage', 'handleClose'],
  data() {
    return {}
  },

  methods: {},
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
