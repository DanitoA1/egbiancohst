<template>
  <div class="bg-dark-blue w-full">
    <div class="mx-auto container w-11/12">
      <div class="grid lg:grid-cols-3 gap-x-32 justify-between py-14">
        <div class="flex flex-col text-white roboto space-y-8">
          <h3 class="font-bold text-3xl">About Egbian</h3>
          <nuxt-link to="/about" class="font-light text-xl">About</nuxt-link>
          <nuxt-link to="/news" class="font-light text-xl">News</nuxt-link>
          <nuxt-link to="/" class="font-light text-xl">Accreditation</nuxt-link>
        </div>
        <div class="flex flex-col lg:mt-0 mt-10 text-white roboto space-y-8">
          <h3 class="font-bold text-3xl">Get in Touch</h3>
          <nuxt-link to="/contact" class="font-light text-xl"
            >Contact Egbian</nuxt-link
          >
          <nuxt-link to="/contact" class="font-light text-xl"
            >Map &amp; Directions</nuxt-link
          >
          <nuxt-link to="/news" class="font-light text-xl">Opportunities</nuxt-link>
        </div>
        <div class="flex flex-col lg:mt-0 mt-10 text-white roboto space-y-8">
          <h3 class="font-bold text-3xl">Admission</h3>
          <nuxt-link to="/student/login" class="font-light text-xl">Undergraduate</nuxt-link>
          <nuxt-link to="/student/login" class="font-light text-xl">Graduate</nuxt-link>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col justify-between text-white roboto py-16">
        <p class="font-light text-xl self-center lg:mt-0 mt-10 order-last   lg:order-first">
          {{ currentYear }} Egbian College of Sciences  and Technology
        </p>
        <div class="flex flex-row ">
          <svg-icon name="facebook" class="w-8 h-8"></svg-icon>
          <svg-icon name="twitter" class="w-8 h-8 ml-20"></svg-icon>
          <svg-icon name="youtube" class="w-8 h-8 ml-20"></svg-icon>
          <svg-icon name="instagram" class="w-8 h-8 ml-20"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: null,
    }
  },
  mounted() {
    this.getCurrentYear()
  },
  methods: {
    // Function to Dynamically Determine Current Year
    getCurrentYear() {
      let year = null
      year = new Date().getFullYear()
      this.currentYear = year
    },
  },
}
</script>
