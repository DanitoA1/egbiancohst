<!-- eslint-disable -->
<template>
  <section class="bg-[#00000050] grid place-content-center relative h-screen overflow-y-auto">
    <div class="absolute right-5 top-5">X</div>
    <img :src="imgSrc" class="h-full w-full object-contain" alt="">
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
