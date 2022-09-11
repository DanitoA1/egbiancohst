<!-- eslint-disable -->
<template>
  <div>
    <UILoader v-if="loading" />
    <div class="grid md:grid-cols-3 gap-4 mt-4">
      <div class="rounded shadow-lg p-4 bg-blue-50 flex justify-between">
        <div class="bg-blue-500 p-3 w-16 grid place-content-center rounded">
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
      <div class="rounded shadow-lg p-4 bg-blue-50 flex justify-between">
        <div class="bg-pink-500 p-3 w-16 grid place-content-center rounded">
          <font-awesome-icon
            class="text-3xl text-white"
            :icon="['fas', `user-graduate`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Student</h1>
          <h1>{{ studentCount }}</h1>
        </div>
      </div>
      <div class="rounded shadow-lg p-4 bg-blue-50 flex justify-between">
        <div class="bg-purple-500 p-3 w-16 grid place-content-center rounded">
          <font-awesome-icon
            class="text-3xl text-white"
            :icon="['fas', `user`]"
          />
        </div>
        <div class="flex-col text-right gap-4 space-y-4 text-xl font-medium">
          <h1 class="text-2xl font-bold">Lecturer</h1>
          <h1>{{ staffCount }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'admin-dashboard',
  data() {
    return {
      studentCount: 0,
      applicationCount: 0,
      staffCount: 0,
      loading: false,
    }
  },
  computed: {},
  async mounted() {
    this.loading = true
    await this.getAllStudent()
    await this.getAllApplicant()
    await this.getAllStaff()
    this.loading = false
  },
  methods: {
    async getAllStudent() {
      await this.$axios
        .get('/api/v1/student/')
        .then((res) => {
          this.studentCount = res.data.data.count
        })
        .catch((err) => {})
    },
    async getAllApplicant() {
      await this.$axios
        .get('/api/v1/applicant/')
        .then((res) => {
          this.applicationCount = res.data.data.count
        })
        .catch((err) => {})
    },
    async getAllStaff() {
      await this.$axios
        .get('/api/v1/staff/')
        .then((res) => {
          this.staffCount = res.data.data.count
        })
        .catch((err) => {})
    },
  },
}
</script>

<style></style>
