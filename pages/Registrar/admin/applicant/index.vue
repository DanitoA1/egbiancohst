<!-- eslint-disable -->
<template>
  <div>
    <UILoader v-if="loading" />
    <div class="grid md:grid-cols-3 gap-4 mt-4">
      <div
        class="rounded-md card_shadow p-4 bg-blue-50 flex justify-between transform hover:translate-y-2 duration-300 ease-in-out"
      >
        <div class="bg-blue-500 p-3 w-16 grid place-content-center rounded-md">
          <font-awesome-icon
            class="text-3xl text-white"
            :icon="['fas', `file`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Application</h1>
          <h1>{{ applicationCount }}</h1>
        </div>
      </div>
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
          <h1 class="text-2xl font-bold">Admitted</h1>
          <h1>{{ admitted }}</h1>
        </div>
      </div>
      <div
        class="rounded-md card_shadow p-4 bg-blue-50 flex justify-between transform hover:translate-y-2 duration-300 ease-in-out"
      >
        <div
          class="bg-purple-500 p-3 w-16 grid place-content-center rounded-md"
        >
          <font-awesome-icon
            class="text-3xl text-white"
            :icon="['fas', `user`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Not Admitted</h1>
          <h1>{{ rejected }}</h1>
        </div>
      </div>
    </div>

    <!-- Applicant Table -->
    <div
      class="my-6 card_shadow rounded-md bg-white block table-wrapper mb-5 w-full overflow-x-auto pb-6"
    >
      <div class="grid md:grid-cols-2 gap-4 my-4 p-4">
        <h1 class="text-xl font-bold">All Applicants</h1>

        <div class="w-full flex justify-end">
          <input
            type="search"
            name="sarch"
            required
            placeholder="Search by First Name, last Name, course"
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
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Email
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Course
            </th>

            <th class="px-3 py-5 leading-5 text-center whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-if="application && filteredApplicant.length > 0"
          class="text-middey-text overflow-x-auto"
        >
          <tr
            v-for="(item, idx) in filteredApplicant"
            class="text-base font-medium hover:bg-gray-300 border-t border-gray-300"
            :key="idx"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.id }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.first_name }} {{ item.last_name }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.email }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.department ? item.department.name : '' }}
            </td>

            <td
              class="px-3 py-5 leading-5 whitespace-nowrap flex justify-center"
            >
              <router-link
                :to="`/registrar/admin/applicant/${item.id}`"
                class="flex justify-center items-center space-x-3 bg-[#0192ED] text-white px-2 py-3 rounded w-auto"
              >
                View Applicant
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
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
/* eslint-disable */

export default {
  name: 'admin-dashboard',
  data() {
    return {
      application: null,
      admitted: 0,
      rejected: 0,
      applicationCount: 0,
      searchQuery: '',
      loading: false,
    }
  },
  async mounted() {
    this.loading = true
    await this.getAllApplicant()
    this.loading = false
  },
  computed: {
    filteredApplicant() {
      return this.application?.results.filter((candidate) => {
        return (
          candidate
          // candidate.first_name
          //   .toLowerCase()
          //   .includes(this.searchQuery.toLowerCase()) ||
          // candidate.last_name
          //   .toLowerCase()
          //   .includes(this.searchQuery.toLowerCase()) ||
          // candidate.middle_name
          //   .toLowerCase()
          //   .includes(this.searchQuery.toLowerCase()) ||
          // candidate.department?.faculty.name
          //   .toLowerCase()
          //   .includes(this.searchQuery.toLowerCase()) ||
          // candidate.department.name
          //   .toLowerCase()
          //   .includes(this.searchQuery.toLowerCase())
        )
      })
    },
  },
  methods: {
    async getAllApplicant() {
      await this.$axios
        .get('/api/v1/applicant/')
        .then((res) => {
          this.application = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>

<style>
.card_shadow {
  box-shadow: 0 1px 11px 0 rgb(0 0 1 / 20%);
}
</style>
