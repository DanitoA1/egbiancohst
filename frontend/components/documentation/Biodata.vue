<template>
  <div class="w-95">
    <div v-if="getCurrentCandidate.paymentStatus">
      <!-- Names -->

      <div class="grid lg:grid-cols-2 gap-4 mt-10">
        <div class="w-full">
          <InputForm
            v-model.trim="surname"
            :type="`text`"
            :label="`Surname`"
            :placeholder="`Abdullah`"
          />
        </div>
        <div class="w-full">
          <InputForm
            v-model.trim="middleName"
            :type="`text`"
            :label="`Middle Name`"
            :placeholder="`Ndako`"
          />
        </div>
        <div class="w-full">
          <InputForm
            v-model.trim="lastName"
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
            v-model.trim="selectedCourse"
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
            v-model.trim="selectedCountry"
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
            v-model.trim="selectedState"
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
            @change="pickedState"
          >
            <!-- <option>Please Choose a State</option> -->
            <option v-for="(state, idx) in states" :key="idx" :value="state">
              {{ state }}
            </option>
          </select>
        </div>
        <div class="w-full">
          <label for="localgovt" class="text-gray-600 font-bold">
            Local Government Area - {{ selectedLga }}
          </label>

          <select
            v-model.trim="selectedLga"
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
            @change="handleSelectedLga"
          >
            <option v-for="(city, idx) in correspondingCities" :key="idx">
              {{ city }}
            </option>
          </select>
        </div>

        <div class="w-full">
          <InputForm
            v-model.trim="dob"
            :type="`text`"
            :label="`Date 0f birth. ex: (27/12/1990)`"
            :placeholder="`ex: (27/12/1990)`"
          />
        </div>

        <div class="w-full">
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
            <option>{{ selectedGender }}</option>
            <option
              v-for="(gender, idx) in genderList"
              :key="idx"
              :value="gender"
            >
              {{ gender }}
            </option>
          </select>
        </div>

        <div class="w-full">
          <InputForm
            v-model.trim="phoneNumber"
            :type="`text`"
            :label="`Phone Number`"
            :placeholder="`070XXXXXXXX`"
          />
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
        @click="handlePreview"
      >
        Preview
      </button>
    </div>
    <div
      v-else
      class="
        px-3
        py-7
        my-10
        text-red-500
        bg-red-300
        border border-red-500
        w-11/12
        justify-center
        text-xl
        font-bold
      "
    >
      <font-awesome-icon
        :icon="['fas', `info-circle`]"
        class="text-white text-lg mr-5"
      />
      <span>Payment required for this action </span>
    </div>
    <DocumentationPreviewModal
      :previewData="previewData"
      v-if="showModal"
      :handleClose="handleClose"
    />
  </div>
</template>

<script>
import { countryList } from './CountryNames'
import Cities from './Cities'
export default {
  props: ['getCurrentCandidate'],
  data() {
    return {
      showModal: false,
      previewData: null,
      surname: this.getCurrentCandidate ? this.getCurrentCandidate.surname : '',
      middleName: this.getCurrentCandidate
        ? this.getCurrentCandidate.middlename
        : '',
      lastName: this.getCurrentCandidate
        ? this.getCurrentCandidate.lastname
        : '',
      phoneNumber: this.getCurrentCandidate
        ? this.getCurrentCandidate.phoneNumber
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
        ? this.getCurrentCandidate.selectedCountry
        : 'loading...',
      selectedGender: this.getCurrentCandidate
        ? this.getCurrentCandidate.selectedGender
        : 'Select Your Gender',
      selectedCourse: this.getCurrentCandidate
        ? this.getCurrentCandidate.selectedCourse
        : 'loading..',

      dob: this.getCurrentCandidate
        ? this.getCurrentCandidate.dob
        : 'loading...',
      selectedLga: this.getCurrentCandidate
        ? this.getCurrentCandidate.selectedLga
        : 'loading...',
      selectedState: this.getCurrentCandidate
        ? this.getCurrentCandidate.selectedState
        : 'loading...',
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

  methods: {
    pickedState(event) {
      this.correspondingCities = this.cities[`${event.target.value}`]
    },

    handleSelectedCountry(event) {
      this.selectedCountry = event.target.value
      console.log(this.selectedCountry)
    },

    handleSelectedLga(event) {
      this.selectedLga = event.target.value
      console.log(this.selectedLga)
    },
    handleSelectedGender(event) {
      this.selectedGender = event.target.value
      console.log(this.selectedGender)
    },
    handleSelectedCourse(event) {
      this.selectedCourse = event.target.value
      console.log(this.selectedCourse)
    },

    // Add a new document in collection "Users"
    handleUpdate() {
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          selectedCountry: this.selectedCountry,
          dob: this.dob,
          phoneNumber: this.phoneNumber,
          selectedGender: this.selectedGender,
          selectedState: this.selectedState,
          selectedLga: this.selectedLga,
          selectedCourse: this.selectedCourse,
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
    handlePreview() {
      this.showModal = true
      this.previewData = this.getCurrentCandidate
    },
    handleClose() {
      this.showModal = false
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
