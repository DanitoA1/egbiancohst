<template>
  <div class="m-5">
    <div class="grid grid-cols-2 gap-14">
      <div
        class="
          border-l-2 border-dark-blue
          space-x-4
          p-3
          flex
          lg:flex-row
          flex-col
          items-center
          bg-gray-200
        "
      >
        <div class="bg-blue-400 w-16 h-16 text-center p-3 rounded-full">
          <p class="font-bold text-base">4.67</p>
          <p class="text-base">CGPA</p>
        </div>
        <div class="font-bold">Semesterial Cumulative Grade Point Average</div>
      </div>
      <div
        class="
          border-l-2 border-dark-blue
          space-x-4
          p-3
          flex
             lg:flex-row
          flex-col
          items-center
          bg-gray-200
        "
      >
        <div class="bg-red-600 p-3 w-16 h-16 text-center rounded-full">
          <p class="font-bold text-base">0</p>
          <p class="text-base">DEF</p>
        </div>
        <div class="font-bold">Defficiency/Carryover</div>
      </div>
    </div>

    <div class="text-dark-blue mt-5 mb-3">2020/2021</div>

    <div class="py-2 border-b border-gray-500 flex flex-1">
      <div class="w-2/12">Course Code</div>
      <div class="w-3/12">Course Title</div>
      <div class="w-1/12">Unit</div>
      <div class="w-2/12">Semester</div>
      <div class="w-2/12">Session</div>
      <div class="w-1/12">Grade</div>
      <div class="w-1/12">GP</div>
    </div>

    <div v-for="i in 10" :key="i" class="flex items-center my-1 space-x-3">
      <div class="py-2 border-b border-gray-500 flex flex-1">
        <div class="w-2/12">HSC 110</div>
        <div class="w-3/12">Intro. to Health Sci</div>
        <div class="w-1/12">3</div>
        <div class="w-2/12">1ST</div>
        <div class="w-2/12">2020/2021</div>
        <div class="w-1/12">B</div>
        <div class="w-1/12">12</div>
      </div>
    </div>

    <div class="text-center mt-5">
      <p>GPA : 4.37</p>
      <p>CGPA : 4.67</p>
    </div>
    <div class="flex justify-end">
      <button
        class="
          py-2
          px-4
          text-center
          shadow-sm
          rounded-sm
          mt-5
          hover:bg-blue-800
          text-white
          bg-dark-blue
        "
      >
        Print Result
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
