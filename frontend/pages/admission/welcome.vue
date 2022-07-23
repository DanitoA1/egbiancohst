<!-- eslint-disable -->
<template>
  <div class="">
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
      <regsuccess />
      <!-- Registration Section -->
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'WelcomeMessage',

  props: {},

  created() {},
  methods: {},
}
</script>

<style scoped>
.reg-container::-webkit-scrollbar {
  display: none;
}
</style>
