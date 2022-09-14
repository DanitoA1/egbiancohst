<!-- eslint-disable -->

<template>
  <div>
    <div class="my-4 px-5">
      <div class="py-3 text-2xl font-semibold">Pesrsonal Data</div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Full Name
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              :value="fullname"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Middle Name
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""

            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Place of Birth
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Date of Birth
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Blood Group
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Gender
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Marital Status
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Religion
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Phone Number
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="text-gray-600 font-semibold">
            Permanent Address
          </label>
          <div>
            <input
              class="mt-3 overflow-ellipsis border outline-none border-gray-300 w-full focus:shadow-md rounded-4px p-3.5 focus:border-blue-400"
              type="text"
              name="email"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="py-2 px-4 text-center shadow-sm rounded-sm mt-3 hover:bg-blue-800 text-white bg-dark-blue"
        >
          Save Bio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'StudentBiodata',
  props: ['userData'],
  computed:{
    fullname(){
      return `${this.userData?.first_name} ${this.userData?.last_name}`
    }
  }
}
</script>

<style></style>
