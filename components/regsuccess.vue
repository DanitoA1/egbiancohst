<template>
  <!-- eslint-disable -->
  <div>
    <div class="welcome text-center px-10">
      <div>
        <img
          src="@/assets/icons/Welcome.svg"
          alt=""
          class="object-center mx-auto"
        />
      </div>
      <div class="mt-10 mb-4 text-xl font-medium">
        Congratulations, registration successful
      </div>
      <h3 class="text-[#201E1ECC]">
        We are excited to have you on board. kindly log on to the email you
        registered with to get your application login details.
      </h3>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/

export default {
  name: 'welcomePage',
  mounted() {},

  methods: {},
}
</script>
<style scoped>
.welcome {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
}
.welcome a {
  cursor: pointer;
}
</style>
