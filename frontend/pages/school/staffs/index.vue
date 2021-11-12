<template>
  <div>
    <BaseAppHeader />
    <div class="container w-11/12 mx-auto px-20 mb-20">
      <div class="my-5 mx-auto text-gray-500 text-base">
        Environmental Health Technicians (EHT)
      </div>

      <div class="bg-black text-white text-base flex justify-between px-2 py-3">
        <div>Name</div>
        <div>Title</div>
        <div>Site</div>
      </div>
      <div
        v-for="i in 10"
        :key="i"
        :class="i % 2 === 0 ? 'bg-gray-100' : 'bg-White'"
        class="text-gray-500 text-base flex justify-between px-2 py-3"
      >
        <div>Dr Jane Doe</div>
        <div>HOD</div>
        <div><span class="underline text-blue-500"> View here </span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
