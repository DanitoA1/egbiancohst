<template>
  <div>
    <div class="my-4 px-8">
      <h1 class="text-2xl font-medium">Dashboard</h1>
      <div class="my-4 p-3 rounded-sm bg-blue-400 w-full p3">
        <div class="text-blue-700">
          Hello Welcome Back! <span class="font-bold"> John Doe</span>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 my-5">
        <div
          class="
            flex
            text-center
            rounded-sm
            flex-col
            justify-center
            items-center
            p-10
            bg-reg-blue
          "
        >
          <div class=""><svg-icon name="regfee" class="w-10 h-10" ></svg-icon> </div>
          <h1 class="text-red-600">
            <p>Registration</p>
            <p>Yes</p>
          </h1>
        </div>
        <div
          class="
            flex
            text-center
            rounded-sm
            flex-col
            justify-center
            items-center
            p-10
            bg-adm-purple
          "
        >
          <div class=""><svg-icon name="admissionfee" class="w-10 h-10" ></svg-icon></div>
          <h1 class="text-red-600">
            <p>Admission</p>
            <p>Yes</p>
          </h1>
        </div>
        <div
          class="
            flex
            text-center
            rounded-sm
            flex-col
            justify-center
            items-center
            p-10
            bg-acc-yellow
          "
        >
          <div class=""><svg-icon name="accomodation" class="w-10 h-10"></svg-icon></div>
          <h1 class="text-red-600">
            <p>Accomodation</p>
            <p>Yes</p>
          </h1>
        </div>
      </div>
      <div class="border border-dark-blue rounded-sm">
        <div class="bg-dark-blue w-full p-3">
          <div class="text-white font-bold">Admission Data</div>
        </div>
        <div class="p-3">
          <div
            v-for="(item, id) in admissionData"
            :key="id"
            class="grid grid-cols-2"
          >
            <div
              :class="id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'"
              class="border text-center py-4"
            >
              {{ item.key }}
            </div>
            <div
              :class="id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'"
              class="border text-center py-4"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admissionData: [
        {
          key: 'Jamb Registration Number',
          value: 2343243,
        },
        {
          key: 'Matriculation Number',
          value: '2017/1/2333ek',
        },
        {
          key: 'Candidate Name',
          value: 'John Doe',
        },
        {
          key: 'Gender',
          value: 'M',
        },
        {
          key: 'Department',
          value: 'Health Sci',
        },
      ],
    }
  },
}
</script>

<style></style>
