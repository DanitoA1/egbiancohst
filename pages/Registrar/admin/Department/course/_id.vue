<!-- eslint-disable -->
<template>
  <div class="w-full">
    <div
      v-if="loading"
      class="bg-middey-light rounded-xl flex justify-center items-center mt-10 py-28"
    >
      <Loading />
    </div>
    <div
      v-else
      class="mb-5 w-full bg-middey-light rounded-xl shadow-xl text-middey-text pb-6 mt-10 font-medium"
    >
      <div
        class="capitalize flex font-bold rounded-t-xl text-base bg-blue-500 text-white p-4"
      >
        {{ course.course_name }}
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Course ID</div>
          <div class="col-span-8 capitalize">{{ course.id }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Course Name</div>
          <div class="col-span-8 capitalize">
            {{ course.course_name }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Course</div>
          <div class="col-span-8 capitalize">{{ course.course_code }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Department</div>
          <div class="col-span-8 capitalize">{{ course.department.name }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Faculty</div>
          <div class="col-span-8 capitalize">
            {{ course.department.faculty.name }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Course Unit</div>
          <div class="col-span-8 capitalize">
            {{ course.course_unit }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Course Nature</div>
          <div class="col-span-8 capitalize">
            {{ course.compulsory ? 'Core' : 'Elective' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Level</div>
          <div class="col-span-8 capitalize">{{ course.level }}</div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Semester</div>
          <div class="col-span-8 capitalize">{{ course.semester }}</div>
        </div>
      </div>

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Course Action
      </div>

      <div class="p-4 flex gap-4">
        <button
          @click="EditCourse(course.id, false)"
          class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed bg-blue-200' : 'bg-blue-500'"
          :disabled="loading"
        >
          <span class="">Edit Course</span>
        </button>
        <button @click="DeleteCourse" class="bg-red-500 text-white p-4 rounded">
          <font-awesome-icon class="text-xl" :icon="['fas', `trash`]" />
        </button>
      </div>
    </div>
    <ImageViewer v-if="isImageOpen" :closeModal="closeModal" :imgSrc="imgSrc" />
  </div>
</template>
<!-- eslint-disable -->
<script>
import Loading from '~/components/Loading.vue'
import ImageViewer from '~/components/UI/imageViewer.vue'
/* eslint-disable */

export default {
  name: 'ApplicantDetails',
  data() {
    return {
      imgSrc: null,
      course: null,
      loading: true,
      isImageOpen: false,
    }
  },
  computed: {
    courseId() {
      return +this.$route.params.id
    },
  },
  mounted() {
    this.getApplicantDetails()
  },
  methods: {
    async getApplicantDetails() {
      await this.$axios
        .get(`/api/v1/course/${this.courseId}/`)
        .then((res) => {
          this.course = res.data.data
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          // location.reload()
        })
    },
    async EditCourse(id, status) {
      this.loading = true
      await this.$axios
        .post(`/api/v1/course/update/${id}/`, {
          status,
        })
        .then((res) => {
          this.course = res.data.data
          this.loading = false
          location.reload()
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async DeleteCourse() {
      this.loading = true
      await this.$axios
        .delete(`/api/v1/course/${this.courseId}/`)
        .then((res) => {
          this.loading = false
          this.$toast.success('Cousrse Deleted successfully')

          this.$router.go(-1)
        })
        .catch((err) => {
          this.loading = false
        })
    },

    closeModal() {
      this.isImageOpen = false
    },
    handlePreview(img) {
      this.isImageOpen = true
      this.imgSrc = img
    },
  },
  components: { Loading, ImageViewer },
}
</script>

<style></style>
