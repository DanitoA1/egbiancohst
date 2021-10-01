<template>
  <div class="h-screen">
    <header class="fixed z-10 px-2 py-2 flex items-center bg-black w-screen">
      <span class="mr-10">
        <img
          src="~/../../assets/images/Logo.svg"
          class="h-10 w-10 object-contain"
          alt="Egbian Logo"
        />
      </span>
      <div
        class="
          font-medium
          py-3
          text-white text-xl
          pr-6
          border-r-2 border-white
          mr-6
        "
      >
        Egbian College of Health and Technology
      </div>
      <span class="text-white"> Personal Details</span>
    </header>

    <main class="grid grid-cols-2">
      <div class="relative bg-white h-screen pt-20 pl-40">
        <div class='absolute z-8 h-screen left-0 inset-y-0 w-16 bg-dark-blue flex flex-col'>
              sidebar
        </div>
      </div>
      <div class="bg-dark-blue relative pt-20 h-screen">
        <div class="absolute bottom-0 left-1/2 right-1/2">
          <img
            src="~/../../assets/images/new-student.svg"
            class="object-contain h-5/6"
            alt="new student"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Test',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
