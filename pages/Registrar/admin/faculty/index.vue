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
            :icon="['fas', `user-graduate`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Faculty</h1>
          <h1>{{ facultyCount }}</h1>
        </div>
      </div>
    </div>

    <!-- Applicant Table -->
    <div
      class="my-6 card_shadow rounded-md bg-white block table-wrapper mb-5 w-full overflow-x-auto pb-6"
    >
      <div class="grid md:grid-cols-2 gap-4 my-4 p-4">
        <h1 class="text-xl font-bold">All Faculty</h1>

        <div class="w-full flex justify-end">
          <input
            type="search"
            name="sarch"
            required
            placeholder="Search by Name"
            v-model.trim="searchQuery"
            class="border w-3/4 rounded outline-none p-3 focus:border-blue-300"
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

            <th class="px-3 py-5 leading-5 text-center whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-if="faculty && filteredFaculty.length > 0"
          class="text-middey-text overflow-x-auto"
        >
          <tr
            v-for="(item, idx) in filteredFaculty"
            class="text-base font-medium hover:bg-gray-300 border-t border-gray-300"
            :key="idx"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.id }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.name }}
            </td>

            <td
              class="px-3 py-5 leading-5 whitespace-nowrap flex justify-center"
            >
              <router-link
                :to="`/registrar/admin/faculty/${item.id}`"
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
        Create new faculty
      </div>
      <div class="p-4">
        <form
          @submit.prevent="CreateDepartment"
          class="flex items-center space-x-4"
        >
          <input
            type="text"
            name="facultyName"
            required
            placeholder="Biochemistry"
            v-model.trim="facultyName"
            class="focus:border-blue-400 border w-3/4 rounded outline-none flex-1 p-3"
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
  name: 'faculty-dashboard',
  data() {
    return {
      faculty: null,
      admitted: 0,
      rejected: 0,
      facultyCount: 0,
      searchQuery: '',
      loading: false,
      facultyName: '',
    }
  },
  async mounted() {
    this.loading = true
    await this.getAllFaculty()
    this.facultyCount = this.faculty?.count
    this.loading = false
  },
  computed: {
    filteredFaculty() {
      return this.faculty?.results.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    },
  },
  methods: {
    async getAllFaculty() {
      await this.$axios
        .get('/api/v1/faculty/')
        .then((res) => {
          this.faculty = res.data.data
        })
        .catch((err) => {})
    },
    CreateDepartment() {
      this.loading = true
      this.$axios
        .post('/api/v1/faculty/', {
          name: this.facultyName,
        })
        .then((res) => {
          this.$toast.success('Faculty Created successfully')
          location.reload()
          this.loading = false
        })
        .catch((err) => {
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
