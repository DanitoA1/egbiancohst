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
        Faculty of {{ facultyDetail ? facultyDetail.name : '' }}
      </div>
      <div class="w-full flex-col items-center gap-4 p-4">
        <div class="font-bold text-lg text-black my-3">
          Create new department
        </div>
        <form @submit.prevent="CreateDepartment" class="rounded flex space-x-4">
          <input
            type="text"
            name="departmentName"
            required
            placeholder="Biochemistry"
            v-model.trim="departmentName"
            class="focus:border-blue-400 border w-3/4 rounded outline-none flex-1 p-3"
          />
          <input
            type="text"
            name="short_name"
            required
            placeholder="BCM"
            v-model.trim="short_name"
            class="bfocus:border-blue-400 border w-3/4 rounded outline-none flex-1 p-3"
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

      <div class="text-center my-6">FacultyListview</div>

      <div
        class="capitalize flex font-bold text-base bg-blue-500 text-white p-4"
      >
        Settings
      </div>
      <div class="flex items-center space-x-4 p-4">
        <input
          type="text"
          name="departmentName"
          required
          placeholder="Biochemistry"
          v-model.trim="facultyName"
          class="focus:border-blue-400 border w-1/2 rounded outline-none p-3"
        />
        <button @click="Editfaculty" class="bg-blue-500 text-white p-4 rounded">
          <font-awesome-icon class="text-xl" :icon="['fas', `edit`]" />
        </button>
        <button
          @click="deletefaculty"
          class="bg-red-500 text-white p-4 rounded"
        >
          <font-awesome-icon class="text-xl" :icon="['fas', `trash`]" />
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import Loading from '~/components/Loading.vue'
/* eslint-disable */

export default {
  name: 'FacultyDetails',
  data() {
    return {
      facultyName: '',
      departmentName: '',
      facultyDetail: null,
      short_name: '',
      loading: true,
    }
  },
  computed: {
    facultyId() {
      return +this.$route.params.id
    },
  },
  async mounted() {
    await this.getFacultyDetails()
    this.facultyName = this.facultyDetail.name
  },
  methods: {
    async getFacultyDetails() {
      await this.$axios
        .get(`/api/v1/faculty/${this.facultyId}/`)
        .then((res) => {
          this.facultyDetail = res.data.data
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
          faculty_id: this.facultyId,
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

    async Editfaculty() {
      this.loading = true

      await this.$axios
        .put(`/api/v1/faculty/${this.facultyId}/`, {
          name: this.facultyName,
        })
        .then((res) => {
          this.$toast.success('Faculty Renamed successfully')
          this.$router.go(-1)

          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },
    async deletefaculty() {
      this.loading = true
      await this.$axios
        .delete(`/api/v1/faculty/${this.facultyId}/`)
        .then((res) => {
          this.$toast.success('Faculty removed successfully')
          this.$router.go(-1)
          this.loading = false
        })
        .catch((err) => {
          console.log(err.response.data)

          this.loading = false
        })
    },

    handlePreview(img) {
      this.isImageOpen = true
      this.imgSrc = img
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
