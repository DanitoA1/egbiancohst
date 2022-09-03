<!-- eslint-disable -->

<template>
  <div>
    <Loading v-if="loading" />
    <div class="w-95">
      <!-- <div v-if="userData.paymentStatus"> -->
      <div v-if="true">
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
              class="mt-3 mr-5 overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
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
              class="mt-3 mr-5 overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
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
            <label for="localgovt" class="text-gray-600 font-bold">
              State
            </label>

            <select
              v-model.trim="selectedState"
              class="mt-3 mr-5 overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
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
              class="mt-3 mr-5 overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
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
              class="mt-3 mr-5 overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
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

          <div class="w-full">
            <InputForm
              v-model.trim="email"
              :type="`text`"
              :label="`Student Email`"
              :placeholder="``"
            />
          </div>

          <div class="w-full">
            <InputForm
              v-model.trim="address"
              :type="`text`"
              :label="`Address`"
              :placeholder="``"
            />
          </div>
          <!-- <div class="w-full">
            <InputForm
              v-model.trim="nextOfKin.name"
              :type="`text`"
              :label="`Next of Kin(Name)`"
              :placeholder="``"
            />
          </div>
          <div class="w-full">
            <InputForm
              v-model.trim="nextOfKin.address"
              :type="`text`"
              :label="`Next of Kin(Address)`"
              :placeholder="``"
            />
          </div>

          <div class="w-full">
            <InputForm
              v-model.trim="nextOfKin.phoneNumber"
              :type="`text`"
              :label="`Next of Kin(Phone)`"
              :placeholder="`070XXXXXXXX`"
            />
          </div>
          <div class="w-full">
            <InputForm
              v-model.trim="nextOfKin.email"
              :type="`text`"
              :label="`Next of Kin(Email)`"
              :placeholder="`Example@email.com`"
            />
          </div> -->
        </div>

        <button
          class="bg-blue-600 hover:bg-dark-blue text-white text-center my-6 border outline-none border-gray-300 w-full rounded-4px p-3.5"
          @click="handleUpdate"
        >
          Update
        </button>

        <button
          class="bg-blue-600 hover:bg-dark-blue text-white text-center my-6 border outline-none border-gray-300 w-full rounded-4px p-3.5"
          @click="handlePreview"
        >
          Preview
        </button>
      </div>
      <div
        v-else
        class="px-3 py-7 my-10 text-red-500 bg-red-300 border border-red-500 w-11/12 justify-center text-xl font-bold"
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
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import CountryNames from './CountryNames'
import Cities from './Cities'
export default {
  name: 'BioData',
  data() {
    return {
      loading: false,
      showModal: false,
      previewData: null,
      surname: this.userData ? this.userData.first_name : '',
      middleName: this.userData ? this.userData.middle_name : '',
      lastName: this.userData ? this.userData.last_name : '',
      phoneNumber: this.userData ? this.userData.phone : '',
      address: this.userData ? this.userData.address : '',
      // nextOfKin: {
      //   name: this.userData
      //     ? this.userData.nextOfKin.name
      //     : '',
      //   address: this.userData
      //     ? this.userData.nextOfKin.address
      //     : '',
      //   phoneNumber: this.userData
      //     ? this.userData.nextOfKin.phone
      //     : '',
      //   email: this.userData
      //     ? this.userData.nextOfKin.email
      //     : '',
      // },
      email: this.userData ? this.userData.email : '',
      CountryList: CountryNames.countryList,
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
      selectedCountry: this.userData ? this.userData.selectedCountry : '',
      selectedGender: this.userData ? this.userData.selectedGender : '',
      selectedCourse: this.userData ? this.userData.selectedCourse : '',

      dob: this.userData ? this.userData.dob : '',
      selectedLga: this.userData ? this.userData.selectedLga : '',
      selectedState: this.userData ? this.userData.selectedState : '',
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

  computed: {
    ...mapState(['userData']),
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
      const department = {
        id: 1,
        name: 'physics',
        short_name: 'phy',
        faculty: {
          id: 1,
          name: 'physical science',
        },
      }
      const updatedData = {
        first_name: this.surname,
        middle_name: this.middleName,
        last_name: this.lastName,
        nationality: this.selectedCountry,
        dob: this.dob,
        phone: this.phoneNumber,
        gender: this.selectedGender,
        state: this.selectedState,
        lga: this.selectedLga,
        department: this.selectedCourse,
        address: this.address,

        // nextOfKin: {
        //   name: this.nextOfKin.name,
        //   address: this.nextOfKin.address,
        //   phoneNumber: this.nextOfKin.phoneNumber,
        //   email: this.nextOfKin.email,
        // },
      }

      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, updatedData)
          .then((res) => {
            console.log(res)

            this.$toast.success('Biodata updated sucessfully')
            this.loading = false
          })
      } catch (error) {
        console.log(error)
        this.loading = false
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }

      // .then(() => {
      //   this.loading = false
      //   console.log('Document successfully Updated!')
      //   this.$notify.success({
      //     title: 'Update Sucessfull',
      //     message: 'Data Saved!',
      //   })
      // })
      // .catch((error) => {
      //   console.error('Error writing document: ', error)
      // })
    },
    handlePreview() {
      this.showModal = true
      this.previewData = this.userData
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
