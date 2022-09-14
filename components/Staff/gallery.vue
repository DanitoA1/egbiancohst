<template>
  <div class="m-10">
      <h1 class="text-xl text-center my-10 font-bold">Gallery</h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div v-for="i in 9" :key="i" class="flex justify-center items-center flex-col space-y-3">
            <img src="@/assets/images/people-laptop.png" class="h-40 w-10/12 mx-auto" alt="">
            <div>Standford -US</div>
            <div>2009 -2019</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>