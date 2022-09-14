<!-- eslint-disable -->
<template>
  <div>
    <UILoader v-if="loading" />
    <div class="grid md:grid-cols-3 gap-4 mt-4">
      <div
        class="rounded-md card_shadow p-4 bg-blue-50 flex justify-between transform hover:translate-y-2 duration-300 ease-in-out"
      >
        <div class="bg-pink-500 p-3 w-16 grid place-content-center rounded-md">
          <font-awesome-icon
            class="text-3xl text-white"
            :icon="['fas', `user`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Staffs</h1>
          <h1>{{ staffCount }}</h1>
        </div>
      </div>
    </div>

    <!-- Applicant Table -->
    <div
      class="my-6 card_shadow rounded-md bg-white block table-wrapper mb-5 w-full overflow-x-auto pb-6"
    >
      <div class="grid md:grid-cols-2 gap-4 my-4 p-4">
        <h1 class="text-xl font-bold">All Staff</h1>

        <div class="w-full flex justify-end">
          <input
            type="search"
            name="sarch"
            required
            placeholder="Search by Name"
            v-model.trim="searchQuery"
            class="border w-full rounded outline-none p-3 focus:border-blue-300"
          />
        </div>
      </div>

      <table class="w-full items-center table-auto">
        <thead>
          <tr class="font-bold bg-[#DBEBFF] text-dark">
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">ID</th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Name
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Email
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Staff type
            </th>

            <th class="px-3 py-5 leading-5 text-center whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-if="staff && filteredstaff.length > 0"
          class="text-middey-text overflow-x-auto"
        >
          <tr
            v-for="(item, idx) in filteredstaff"
            class="text-base font-medium hover:bg-gray-300 border-t border-gray-300"
            :key="idx"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.id }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.first_name }} {{ item.last_name }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.email }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.staff_type }}
            </td>

            <td
              class="px-3 py-5 leading-5 whitespace-nowrap flex justify-center"
            >
              <router-link
                :to="`/registrar/admin/staff/${item.id}`"
                class="flex justify-center items-center gap-2"
              >
                <font-awesome-icon
                  class="text-base text-blue-500 mr-2"
                  :icon="['fas', `plus`]"
                />
                View
              </router-link>
            </td>
          </tr>
        </tbody>
        <tbody v-else class="flex justify-center">
          <h1 class="text-center py-4 text-lg font-medium text-red-500">
            No result found
          </h1>
        </tbody>
      </table>
      <div
        class="capitalize flex font-bold text-base bg-blue-500 text-white p-4 mt-6"
      >
        Create Staff
      </div>
      <div class="p-4">
        <form @submit.prevent="CreateStaff" class="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="staffName"
            required
            placeholder="First Name"
            v-model.trim="staff_first_name"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="staffName"
            required
            placeholder="Last Name"
            v-model.trim="staff_last_name"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="staff_first_name"
            required
            placeholder="Middle Name"
            v-model.trim="staff_middle_name"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="email"
            name="staff_first_name"
            required
            placeholder="email"
            v-model.trim="staff_email"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="staff_first_name"
            required
            placeholder="Country"
            v-model.trim="staff_nationality"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />

          <input
            type="text"
            name="staff_first_name"
            required
            placeholder="state of orgin"
            v-model.trim="staff_state"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="staff_first_name"
            required
            placeholder="LGA"
            v-model.trim="staff_lga"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="staff_first_name"
            required
            placeholder="Phone no"
            v-model.trim="staff_phone"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <input
            type="date"
            name="staff_first_name"
            required
            placeholder="Dirth of birth"
            v-model.trim="staff_dob"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />
          <select
            class="overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
            name="staff_gender"
            v-model="staff_gender"
          >
            <option disabled value="">---Select Gender---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            class="overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
            name="department"
            v-model="staff_department_id"
          >
            <option disabled value="">---Select Department---</option>
            <option
              v-for="(item, index) in departments"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>

          <select
            class="overflow-ellipsis border-2 outline-none border-gray-300 w-full shadow-md rounded-md p-3.5 focus:border-blue-400"
            name="staff_type"
            v-model="staff_type"
          >
            <option disabled value="">---Select Staff type---</option>
            <option value="academic">Academic</option>
            <option value="non-academic">Non-Academic</option>
          </select>

          <input
            type="text"
            name="staff_password"
            required
            placeholder="Password"
            v-model.trim="staff_password"
            class="focus:border-blue-400 border w-full rounded outline-none flex-1 p-3"
          />

          <button
            class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
            :class="
              loading ? 'cursor-not-allowed bg-green-200' : 'bg-green-500'
            "
          >
            <span class="font-medium">Create</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
/* eslint-disable */

export default {
  name: 'staff-dashboard',
  data() {
    return {
      staff: null,
      admitted: 0,
      rejected: 0,
      staffCount: 0,
      searchQuery: '',
      loading: false,
      staffName: '',
      staff_first_name: '',
      staff_last_name: '',
      staff_middle_name: '',
      staff_email: '',
      staff_phone: '',
      staff_department_id: '',
      staff_state: '',
      staff_dob: '',
      staff_password: '',
      staff_nationality: '',
      staff_type: '',
      staff_lga: '',
      staff_gender: '',
      departments: [],
    }
  },
  async mounted() {
    this.loading = true
    await this.getAllstaff()
    await this.getAlldepartment()
    this.staffCount = this.staff?.count
    this.loading = false
  },
  computed: {
    filteredstaff() {
      return this.staff?.results.filter((item) => {
        return item.first_name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      })
    },
  },
  methods: {
    async getAlldepartment() {
      await this.$axios
        .get('/api/v1/department/')
        .then((res) => {
          this.departments = res.data.data.results
        })
        .catch((err) => {})
    },
    async getAllstaff() {
      await this.$axios
        .get('/api/v1/staff/')
        .then((res) => {
          this.staff = res.data.data
        })
        .catch((err) => {})
    },
    CreateStaff() {
      this.loading = true
      this.$axios
        .post('/api/v1/staff/', {
          first_name: this.staff_first_name,
          last_name: this.staff_last_name,
          middle_name: this.staff_middle_name,
          nationality: this.staff_nationality,
          email: this.staff_email,
          state: this.staff_state,
          lga: this.staff_lga,
          phone: this.staff_phone,
          dob: this.staff_dob,
          gender: this.staff_gender,
          department_id: this.staff_department_id,
          staff_type: this.staff_type,
          password: this.staff_password,
        })
        .then((res) => {
          this.$toast.success('Staff Created successfully')
          location.reload()
          this.loading = false
        })
        .catch((err) => {
          this.$toast.success(err.response.data)
          this.loading = false
        })
    },
  },
}
</script>

<style>
.card_shadow {
  box-shadow: 0 1px 11px 0 rgb(0 0 1 / 20%);
}
</style>
