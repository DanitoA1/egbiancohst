<!-- eslint-disable -->

<template>
  <div>
    <div class="my-4 px-8">
      <h1 class="text-2xl font-medium">Dashboard</h1>
      <div class="my-4 p-3 rounded-sm bg-blue-400 w-full p3">
        <div class="text-blue-700">
          Hello Welcome Back!
          <span class="font-bold capitalize">
            {{ userData ? userData.first_name : 'Loading..' }}
          </span>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5">
        <div
          class="flex text-center rounded-sm flex-col justify-center items-center p-10 bg-reg-blue"
        >
          <div class="">
            <img src="@/assets/images/registration.png" class="w-10 h-10" />
          </div>
          <h1 class="text-red-600">
            <p>Registration</p>
            <p>Yes</p>
          </h1>
        </div>
        <div
          class="flex text-center rounded-sm flex-col justify-center items-center p-10 bg-adm-purple"
        >
          <div class="">
            <img src="@/assets/images/admission.png" class="w-10 h-10" />
          </div>
          <h1 class="text-red-600">
            <p>Admission</p>
            <p>Yes</p>
          </h1>
        </div>
        <div
          class="flex text-center rounded-sm flex-col justify-center items-center p-10 bg-acc-yellow"
        >
          <div class="">
            <img src="@/assets/images/room-key.png" class="w-10 h-10" />
          </div>
          <h1 class="text-red-600">
            <p>Accomodation</p>
            <p>Yes</p>
          </h1>
        </div>
      </div>
      <div class="border border-dark-blue rounded-sm capitalize">
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
              class="border px-6 py-4"
            >
              {{ item.key }}
            </div>
            <div
              :class="id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'"
              class="border px-6 py-4"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  name: 'StudentDashboard',
  props: ['userData'],
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
          value:
            `${this.userData?.first_name} ${this.userData?.last_name}` ||
            'Loading',
        },
        {
          key: 'Gender',
          value: this.userData?.gender || 'Loading...',
        },
        {
          key: 'Department',
          value: this.userData?.department.name || 'Loading...',
        },
      ],
    }
  },
}
</script>

<style></style>
