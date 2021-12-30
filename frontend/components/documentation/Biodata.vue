<template>
  <div class="w-95">
    <!-- Names -->

    <div class="grid lg:grid-cols-2 gap-4 mt-10">
      <div class="w-full">
        <InputForm
          v-model="surname"
          :type="`text`"
          :label="`Surname`"
          :placeholder="`Abdullah`"
        />
      </div>
      <div class="w-full">
        <InputForm
          v-model="middleName"
          :type="`text`"
          :label="`Middle Name`"
          :placeholder="`Ndako`"
        />
      </div>
      <div class="w-full">
        <InputForm
          v-model="lastName"
          :type="`text`"
          :label="`Last Name`"
          :placeholder="`Chinedu`"
        />
      </div>

      <!-- Names -->

      <!-- Course  -->

      <div class="w-full">
        <label for="nationality" class="text-gray-600 font-bold">
          Course of Study
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
          @change="handleSelectedCourse"
        >
          <option
            v-for="(course, idx) in courseList"
            :key="idx"
            :value="course"
          >
            {{ course }}
          </option>
        </select>
      </div>

      <!-- Nationality   && DOB-->
      <div class="w-full">
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

      <!-- Local Govt && Gender -->

      <div class="w-full">
        <label for="localgovt" class="text-gray-600 font-bold"> State </label>

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
          v-model="selectedState"
          @change="pickedState"
        >
          <option>Please Choose a State</option>
          <option v-for="(state, idx) in states" :key="idx" :value="state">
            {{ state }}
          </option>
        </select>
      </div>
      <div class="w-full">
        <label for="localgovt" class="text-gray-600 font-bold">
          Local Government Area
        </label>

        <select
          v-model="selectedCity"
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
        >
          <option v-for="(city, idx) in correspondingCities" :key="idx">
            {{ city }}
          </option>
        </select>
      </div>

      <div class="w-full">
        <label for="dob" class="text-gray-600 font-bold"> Date of Birth </label>

        <el-date-picker
          v-model="dob"
          type="date"
          placeholder="Pick a day"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>

      <div class="w-full relative">
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
          name="nationality"
          @change="handleSelectedGender"
        >
          <option
            v-for="(gender, idx) in genderList"
            :key="idx"
            :value="gender"
          >
            {{ gender }}
          </option>
        </select>
      </div>
    </div>

    <button
      class="
        bg-blue-600
        hover:bg-dark-blue
        text-white text-center
        my-6
        border
        outline-none
        border-gray-300
        w-full
        rounded-4px
        p-3.5
      "
      @click="handleUpdate"
    >
      Update
    </button>
  </div>
</template>

<script>
import { countryList } from './CountryNames'
import Cities from './Cities'
export default {
  props: ['getCurrentCandidate'],
  data() {
    return {
      surname: this.getCurrentCandidate ? this.getCurrentCandidate.surname : '',
      middleName: this.getCurrentCandidate
        ? this.getCurrentCandidate.middlename
        : '',
      lastName: this.getCurrentCandidate
        ? this.getCurrentCandidate.lastname
        : '',
      CountryList: countryList,
      courseList: [
        'Environmental Health Technicians (EHT)',
        'Community Health Extension Workers (CHEW)',
        'Health Information Management (HIM)',
        'X-Ray Technician (XRT)',
        'Health Education and Promotion (HEP)',
        'Pharmacy Technician (PT)',
        'Dental Technician (DT)',
        'Medical Laboratory Technology (MLT)',
      ],
      genderList: ['male', 'female'],
      selectedCountry: this.getCurrentCandidate
        ? this.getCurrentCandidate.country
        : '',
      selectedGender: this.getCurrentCandidate
        ? this.getCurrentCandidate.gender
        : 'Select Your Gender',
      selectedCourse: '',
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
      dob: this.getCurrentCandidate
        ? this.getCurrentCandidate.dob
        : 'loading...',
      selectedCity: '',
      selectedState: '',
      correspondingCities: [],
      cities: Cities,
      states: [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'FCT - Abuja',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
      ],
    }
  },

  mounted() {},

  methods: {
    pickedState(event) {
      this.correspondingCities = this.cities[`${event.target.value}`]
      console.log(this.correspondingCities)
    },

    handleSelectedCountry(event) {
      this.selectedCountry = event.target.value
    },
    handleSelectedGender(event) {
      this.selectedGender = event.target.value
    },
    handleSelectedCourse(event) {
      this.selectedCourse = event.target.value
    },

    // Add a new document in collection "Users"
    handleUpdate() {
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          country: this.selectedCountry,
          dob: this.dob,
          fullname: this.fname,
          middleName: this.mname,
          gender: this.selectedGender,
        })
        .then(() => {
          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Update Sucessfull',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
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
