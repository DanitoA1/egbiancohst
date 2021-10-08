<template>
  <div class="container relative w-11/12 mx-auto z-30">
    <div class="flex flex-row justify-between my-6">
      <img src="~/assets/images/Logo.svg" alt="">
      <div class="flex flex-col justify-between text-xl my-2">
        <div class="flex flex-row justify-end text-dark-blue">
          <nuxt-link to='/' class="mr-16">Staff</nuxt-link>
          <nuxt-link to='/student/login' class="mr-16">Student</nuxt-link>
          <nuxt-link to='/' class="mr-16">Alumni</nuxt-link>
          <span class="ml-20 flex flex-row"><svg-icon name="search" class="w-4 h-4 my-1 mr-2"></svg-icon>Search</span>
        </div>
        <div class="flex flex-row space-x-16 mr-48">
          <nuxt-link to='/about' class="font-semibold">About</nuxt-link>
          <nuxt-link to='/admission/registration' class="font-semibold">Admission</nuxt-link>
          <nuxt-link to='/' class="font-semibold">Courses</nuxt-link>
          <nuxt-link to='/news' class="font-semibold">News</nuxt-link>
          <nuxt-link to='/contact' class="font-semibold">Contact</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>