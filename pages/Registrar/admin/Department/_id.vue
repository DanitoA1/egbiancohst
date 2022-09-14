<!-- eslint-disable -->
<template>
  <div class="w-full">
    <div
      v-if="loading"
      class="rounded-xl flex justify-center items-center mt-10 py-28"
    >
      <Loading />
    </div>

    <div
      class="mb-5 w-full bg-white rounded-xl card_shadow pb-6 mt-10 font-medium"
    >
      <div
        class="capitalize flex font-bold rounded-t-xl text-base bg-blue-500 text-white p-4"
      >
        department of {{ departmentDetail ? departmentDetail.name : '' }}
      </div>

      <table class="w-full items-center table-auto">
        <thead>
          <tr class="font-bold bg-[#DBEBFF] text-dark">
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">ID</th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Name
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Course code
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Course unit
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Nature
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              level
            </th>
            <th class="px-3 py-5 leading-5 text-left whitespace-nowrap">
              Semester
            </th>

            <th class="px-3 py-5 leading-5 text-center whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          v-if="courses && courses.length > 0"
          class="text-middey-text overflow-x-auto"
        >
          <tr
            v-for="(item, idx) in courses"
            class="text-base font-medium hover:bg-gray-300 border-t border-gray-300"
            :key="idx"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ item.id }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.course_name }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.course_code }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.course_unit }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.compulsory ? 'Core' : 'Elective' }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.level }}
            </td>
            <td
              class="px-3 py-5 leading-5 whitespace-nowrap text-left capitalize"
            >
              {{ item.semester }}
            </td>

            <td
              class="px-3 py-5 leading-5 whitespace-nowrap flex justify-center"
            >
              <router-link
                :to="`/registrar/admin/department/course/${item.id}`"
                class="flex justify-center items-center gap-2"
              >
                <font-awesome-icon
                  class="text-base text-blue-500 mr-2"
                  :icon="['fas', `plus`]"
                />
                View Course
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
        class="capitalize flex font-bold text-base bg-blue-500 text-white p-4"
      >
        Settings
      </div>

      <div class="text-center my-3">
        <div class="flex items-center space-x-4 p-4">
          <input
            type="text"
            name="departmentName"
            required
            placeholder="Biochemistry"
            v-model.trim="departmentName"
            class="focus:border-blue-400 border w-1/2 rounded outline-none p-3"
          />
          <button
            @click="EditCourse"
            class="bg-blue-500 text-white p-4 rounded"
          >
            <font-awesome-icon class="text-xl" :icon="['fas', `edit`]" />
          </button>
          <button
            @click="DeleteCourse"
            class="bg-red-500 text-white p-4 rounded"
          >
            <font-awesome-icon class="text-xl" :icon="['fas', `trash`]" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import Loading from '~/components/Loading.vue'
/* eslint-disable */

export default {
  name: 'departmentDetails',
  data() {
    return {
      departmentName: '',
      departmentDetail: null,
      short_name: '',
      loading: true,
      courses: [],
      CourseName: '',
    }
  },
  computed: {
    departmentId() {
      return +this.$route.params.id
    },
  },
  async mounted() {
    await this.getDepartmentDetails()
    await this.getDepartmentalCourses()
    this.departmentName = this.departmentDetail.name
  },
  methods: {
    async getDepartmentDetails() {
      await this.$axios
        .get(`/api/v1/department/${this.departmentId}/`)
        .then((res) => {
          this.departmentDetail = res.data.data
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          console.log(err.response.data)
          // location.reload()
        })
    },
    async getDepartmentalCourses() {
      await this.$axios
        .get(`/api/v1/course/`)
        .then((res) => {
          this.courses = res.data.data.results
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          console.log(err.response.data)
          // location.reload()
        })
    },
    async CreateDepartment() {
      this.loading = true
      await this.$axios
        .post(`/api/v1/department/`, {
          name: this.departmentName,
          short_name: this.short_name,
          department_id: this.departmentId,
        })
        .then((res) => {
          this.user = res.data.data
          this.loading = false
          location.reload()
        })
        .catch((err) => {
          this.loading = false
        })
    },

    async Editdepartment() {
      this.loading = true

      await this.$axios
        .put(`/api/v1/department/${this.departmentId}/`, {
          name: this.departmentName,
        })
        .then((res) => {
          this.$toast.success('department Renamed successfully')
          this.$router.go(-1)

          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },
    async deletedepartment() {
      this.loading = true
      await this.$axios
        .delete(`/api/v1/department/${this.departmentId}/`)
        .then((res) => {
          this.$toast.success('department removed successfully')
          this.$router.go(-1)
          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },
    async EditCourse() {
      this.loading = true
      await this.$axios
        .put(`/api/v1/department/${this.departmentId}/`)
        .then((res) => {
          this.$toast.success('department removed successfully')
          this.$router.go(-1)
          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },
    async DeleteCourse() {
      this.loading = true
      await this.$axios
        .delete(`/api/v1/department/${this.departmentId}/`)
        .then((res) => {
          this.$toast.success('department removed successfully')
          this.$router.go(-1)
          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },
  },
  components: { Loading },
}
</script>

<style scoped>
.card_shadow {
  box-shadow: 0 1px 11px 0 rgb(0 0 1 / 20%);
}
</style>
