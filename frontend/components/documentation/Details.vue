<template>
  <div>
    <div class="space-y-2">
      <div class="text-xl font-semibold"><p>Student Admission Form</p></div>
      <p class="text-gray-500">Please ensure your fill in correct details</p>
      <div class="font-semibold">
        <span>Registration ID:</span>
        <span class="text-gray-500">1232032EC</span>
      </div>
    </div>
    <!-- Step -->
    <div class="flex item-center justify-center font-medium z-5">
      <div class="-ml-10 mt-10 w-4/6">
        <div class="w-full line relative bg-black">
          <div class="absolute w-1/2 bg-dark-blue line"></div>

          <div
            class="
              absolute
              -left-1
              w-8
              -mt-4
              h-8
              rounded-full
              bg-dark-blue
              grid
              place-content-center
              text-white
            "
          >
            1
          </div>
          <div
            class="
              absolute
              centerdot
              w-8
              -mt-4
              h-8
              rounded-full
              bg-gray-300
              grid
              place-content-center
            "
          >
            2
          </div>
          <div
            class="
              absolute
              -right-1
              w-8
              -mt-4
              h-8
              rounded-full
              bg-gray-300
              grid
              place-content-center
            "
          >
            3
          </div>
        </div>
      </div>
    </div>
    <!-- Step -->

    <!-- Names -->

    <div class="flex my-10">
      <div class="w-7/12">
        <label for="fullName" class="text-gray-600 font-bold">
          Full Name
        </label>

        <input
          class="
            mt-3
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          type="text"
          name="fullName"
          placeholder="Abdur-rasheed Idris"
        />
      </div>
      <div class="mx-5 w-4/12">
        <label for="middleName" class="text-gray-600 font-bold">
          Middle Name
        </label>

        <input
          class="
            mt-3
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          type="text"
          name="middleName"
          placeholder="Negedu"
        />
      </div>
    </div>
    <!-- Names -->

    <!-- Nationality  && DOB -->

    <div class="flex my-10">
      <div class="w-7/12">
        <label for="nationality" class="text-gray-600 font-bold">
          Nationality
        </label>

        <select
          class="
            mt-3
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          name="nationality"
          @change="handleSelectedCountry"
        >
          <option
            v-for="(country, idx) in CountryList"
            :key="idx"
            :value="country"
          >
            {{ country }}
          </option>
        </select>
      </div>

      <div class="mx-5 w-4/12 relative">
        <label for="dob" class="text-gray-600 font-bold"> Date of Birth </label>

        <input
          class="
            mt-3
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          type="text"
          name="dob"
          placeholder="01/02/2021"
        />
        <svg-icon
          name="calendar"
          class="absolute right-3 top cursor-pointer h-6 w-6"
        ></svg-icon>
      </div>
    </div>

    <!-- Local Govt && Gender -->

    <div class="flex my-10">
      <div class="w-7/12">
        <label for="localgovt" class="text-gray-600 font-bold">
          Local Government Area
        </label>

        <select
          class="
            mt-3
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          name="localgovt"
        >
          <option>Ajankara</option>
        </select>
      </div>

      <div class="mx-5 w-4/12 relative">
        <label for="gender" class="text-gray-600 font-bold"> Gender </label>

        <select
          class="
            mt-3
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script>
import { countryList } from './CountryNames'
export default {
  data() {
    return {
      CountryList: countryList,
      selectedCountry: 'Nigeria',
    }
  },

  methods: {
    handleSelectedCountry(event) {
      this.selectedCountry = event.target.value
    },
  },
}
</script>

<style scoped>
.centerdot {
  left: 47%;
}
.line {
  height: 2px;
}
.top {
  top: 55%;
}
</style>
