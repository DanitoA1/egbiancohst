<template>
  <div  class="m-10">
    <div>
      <h1 class="text-gray-500 font-medium text-base">
        Registration Courses 2021/2022
      </h1>
      <h1 class="text-center text-xl font-bold my-3">Pick courses to register</h1>

      <p class="text-center text-gray-500 text-base">First Semester</p>
    </div>
    <div class="flex items-center space-x-3">
        <div>
            <input type="checkbox">
        </div>
        <div class="py-2 font-semibold border-b border-gray-500 flex flex-1">
            <div class="w-3/12">Course Code</div>
            <div class="w-5/12">Course Title</div>
            <div class="w-2/12">Course Unit</div>
            <div class="w-2/12">Course Nature</div>
        </div>

    </div>
    <div v-for="i in 3" :key="i" class="flex items-center space-x-3">
        <div>
            <input type="checkbox">
        </div>
        <div class="py-2  border-b border-gray-500 flex flex-1">
            <div class="w-3/12">GST 100</div>
            <div class="w-5/12">Introduction to Physical Education</div>
            <div class="w-2/12">2</div>
            <div class="w-2/12">Core</div>
        </div>

    </div>

          <p class="text-center text-gray-500 text-base mt-5 mb-3 ">Second Semester</p>

    <div class="flex items-center space-x-3">
        <div>
            <input type="checkbox">
        </div>
        <div class="py-2 font-semibold border-b border-gray-500 flex flex-1">
            <div class="w-3/12">Course Code</div>
            <div class="w-5/12">Course Title</div>
            <div class="w-2/12">Course Unit</div>
            <div class="w-2/12">Course Nature</div>
        </div>

    </div>
    <div v-for="i in 3" :key="i" class="flex items-center space-x-3">
        <div>
            <input type="checkbox">
        </div>
        <div class="py-2  border-b border-gray-500 flex flex-1">
            <div class="w-3/12">GST 100</div>
            <div class="w-5/12">Introduction to Physical Education</div>
            <div class="w-2/12">2</div>
            <div class="w-2/12">Core</div>
        </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
