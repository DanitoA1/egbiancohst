<!-- eslint-disable -->
<template>
  <section class="fixed inset-0 bg-[#00000050] z-10 grid place-content-center py-10 h-screen overflow-y-auto">
    <button class="fixed right-5 top-5" @click="closeModal">   <font-awesome-icon
            class="text-3xl text-red-500 transform rotate-45"
            :icon="['fas', `plus`]"
          /> </button>
    <img :src="imgSrc" class="h-10/12 w-full" alt="">
  </section>
</template>

<script>
/*eslint-disable*/
export default {
  props: ['closeModal', 'imgSrc'],
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    openModal() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.booknow {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
}
.overlay {
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.back {
  background: #ed3237;
  padding: 10px 1rem;
  border-radius: 25px;
  color: #fff;
  font-weight: 500;
  outline: none;
  border: 0;
  text-align: center;
  font-size: 12px;
}
</style>
