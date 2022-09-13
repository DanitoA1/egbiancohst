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
        Staff Details
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Passport</div>
          <div class="col-span-8 flex-col">
            <img :src="staff.picture" alt="" class="h-32 w-32 mb-2" />
            <button class="text-blue-500" @click="handlePreview(staff.picture)">
              Larger View
            </button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">staff ID</div>
          <div class="col-span-8 capitalize">{{ staff.id }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Email</div>
          <div class="col-span-8 capitalize">{{ staff.email }}</div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Gender</div>
          <div class="col-span-8 capitalize">{{ staff.gender }}</div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Phone</div>
          <div class="col-span-8 capitalize">{{ staff.phone }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Date of birth</div>
          <div class="col-span-8 capitalize">
            {{ staff.dob }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Nationality</div>
          <div class="col-span-8 capitalize">
            {{ staff.nationality }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">LGA</div>
          <div class="col-span-8 capitalize">{{ staff.lga }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">State</div>
          <div class="col-span-8 capitalize">{{ staff.state }}</div>
        </div>
      </div>

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Staff Action
      </div>

      <div class="p-4 flex gap-4">
        <button
          @click="Editstaff(staff.id, false)"
          class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed bg-blue-200' : 'bg-blue-500'"
          :disabled="loading"
        >
          <span class="">Edit staff</span>
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
  name: 'staffDetails',
  data() {
    return {
      imgSrc: null,
      staff: null,
      loading: true,
      isImageOpen: false,
    }
  },
  computed: {
    staffId() {
      return +this.$route.params.id
    },
  },
  mounted() {
    this.getstaffDetails()
  },
  methods: {
    async getstaffDetails() {
      await this.$axios
        .get(`/api/v1/staff/${this.staffId}/`)
        .then((res) => {
          this.staff = res.data.data
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          // location.reload()
        })
    },
    async Editstaff(id, status) {
      this.loading = true
      await this.$axios
        .post(`/api/v1/staff/update/${id}/`, {
          status,
        })
        .then((res) => {
          this.staff = res.data.data
          this.loading = false
          location.reload()
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
