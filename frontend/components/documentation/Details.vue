<template>
  <div>
    <div class="space-y-2">
      <div class="text-xl font-semibold"><p>Student Admission Form</p></div>
      <p class="text-gray-500">Please ensure your fill in correct details</p>
      <div class="font-semibold">
        <span>Registration ID:</span>
        <span class="text-gray-500"> {{ getCurrentCandidate ? getCurrentCandidate.regId : 'Loading...'}} </span>
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

    <div class="flex lg:flex-row flex-col space-y-4 lg:space-y-0 my-10">
      <div class="lg:w-7/12 w-full">
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
      <div class="lg:mx-5 mx-0 lg:w-4/12 w-full">
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

    <div class="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:my-10 my-5">
      <div class="lg:w-7/12 w-full">
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

      <div class="lg:mx-5 mx-0 lg:w-4/12 w-full">
        <label for="dob" class="text-gray-600 font-bold"> Date of Birth </label>

        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
    </div>

    <!-- Local Govt && Gender -->

    <div class="flex lg:flex-row flex-col space-y-4 lg:space-y-0 my-10">
      <div class="lg:w-7/12 w-full">
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

      <div class="lg:mx-5 mx-0 lg:w-4/12 w-full relative">
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
  props : ["getCurrentCandidate"],
  data() {
    return {
      CountryList: countryList,
      selectedCountry: 'Nigeria',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            },
          },
        ],
      },
      value2: '',
    }
  },

  methods: {
    handleSelectedCountry(event) {
      this.selectedCountry = event.target.value
    },
  },
}
</script>

<style>
.centerdot {
  left: 47%;
}
.line {
  height: 2px;
}
.top {
  top: 55%;
}
.el-date-editor.el-input {
  width: 100% !important;
}
body input.el-input__inner {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  height: auto;
  padding: 6px;
  margin-top: 12px;
  margin-right: 20px;
  border: 2px solid rgba(209, 213, 219, 1);
  outline: none;
  width: 100%;
}
.el-input__prefix {
  top: 9px;
  left: 5px;
}
</style>
