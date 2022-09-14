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
        Applicant Profile
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Application Fee</div>
          <div
            class="col-span-8 capitalize"
            :class="
              user.application_fee_paid ? 'text-green-500' : 'text-red-500'
            "
          >
            {{ user.application_fee_paid ? 'Paid' : 'Not Paid' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Application Status</div>
          <div
            class="col-span-8 capitalize"
            :class="user.is_admitted ? 'text-green-500' : 'text-red-500'"
          >
            {{ user.is_admitted ? 'Admitted' : 'Not Admitted' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Passport</div>
          <div class="col-span-8 flex-col">
            <img :src="user.picture" alt="" class="h-32 w-32 mb-2" />
            <button class="text-blue-500" @click="handlePreview(user.picture)">
              Larger View
            </button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Applicant ID</div>
          <div class="col-span-8 capitalize">{{ user.id }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Full Name</div>
          <div class="col-span-8 capitalize">
            {{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Email</div>
          <div class="col-span-8 capitalize">{{ user.email }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Department</div>
          <div class="col-span-8 capitalize">
            {{ user.department ? user.department.name : null }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Faculty</div>
          <div class="col-span-8 capitalize">
            {{ user.department ? user.department.faculty.name : null }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Gender</div>
          <div class="col-span-8 capitalize">{{ user.gender }}</div>
        </div>
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Phone</div>
          <div class="col-span-8 capitalize">{{ user.phone }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Date of birth</div>
          <div class="col-span-8 capitalize">
            {{ user.dob }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Nationality</div>
          <div class="col-span-8 capitalize">
            {{ user.nationality }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">LGA</div>
          <div class="col-span-8 capitalize">{{ user.lga }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">State</div>
          <div class="col-span-8 capitalize">{{ user.state }}</div>
        </div>
      </div>

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Applicant Certificates
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Primary school certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.primary_cert" class="h-32 w-32 mb-2" alt="" />
            <button
              class="text-blue-500"
              @click="handlePreview(user.primary_cert)"
            >
              Larger View
            </button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Secondary school certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.secondary_cert" class="h-32 w-32 mb-2" alt="" />
            <button
              class="text-blue-500"
              @click="handlePreview(user.secondary_cert)"
            >
              Larger View
            </button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Brith Certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.birth_cert" class="h-32 w-32 mb-2" alt="" />
            <button
              class="text-blue-500"
              @click="handlePreview(user.birth_cert)"
            >
              Larger View
            </button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Testimonial</div>
          <div class="col-span-8 capitalize">
            <img :src="user.testimonial" class="h-32 w-32 mb-2" alt="" />
            <button
              class="text-blue-500"
              @click="handlePreview(user.testimonial)"
            >
              Larger View
            </button>
          </div>
        </div>
      </div>

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Next of kin
      </div>

      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Address</div>
          <div class="col-span-8 capitalize">
            {{ user.next_kin_address || 'null' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Name</div>
          <div class="col-span-8 capitalize">
            {{ user.next_kin_name || 'null' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Phone Number</div>
          <div class="col-span-8 capitalize">
            {{ user.next_kin_phone || 'null' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Email</div>
          <div class="col-span-8 capitalize">
            {{ user.next_kin_email || 'null' }}
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Relationship</div>
          <div class="col-span-8 capitalize">
            {{ user.next_kin_realtionship || 'null' }}
          </div>
        </div>
      </div>

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Applicant Status Action
      </div>

      <div class="p-4 flex gap-4">
        <button
          @click="EditApplicant(user.id, false)"
          class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed bg-blue-200' : 'bg-blue-500'"
          :disabled="loading"
        >
          <span class="">Edit Applicant</span>
        </button>
        <button
          v-if="user.is_admitted"
          @click="rejectApplicant(user.id, 'not-admitted')"
          class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed bg-red-200' : 'bg-red-500'"
          :disabled="loading"
        >
          <span class="">Reject</span>
        </button>
        <button
          v-else
          @click="admitApplicant(user.id, 'admitted')"
          class="flex justify-center items-center space-x-3 text-white px-8 py-3 rounded w-auto"
          :class="loading ? 'cursor-not-allowed bg-green-200' : 'bg-green-500'"
          :disabled="loading"
        >
          <span class="">Admit</span>
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
      user: null,
      loading: true,
      isImageOpen: false,
    }
  },
  computed: {
    userId() {
      return +this.$route.params.id
    },
  },
  mounted() {
    this.getApplicantDetails()
  },
  methods: {
    
    async getApplicantDetails() {
      await this.$axios
        .get(`/api/v1/applicant/${this.userId}/`)
        .then((res) => {
          this.user = res.data.data
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          // location.reload()
        })
    },
    async admitApplicant(id, status) {
      this.loading = true
      await this.$axios
        .post(`/api/v1/applicant/update/${id}/`, {
          status,
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
    async rejectApplicant(id, status) {
      this.loading = true
      await this.$axios
        .put(`/api/v1/applicant/update/${id}/`, {
          status,
        })
        .then((res) => {
          this.user = res.data.data
          this.loading = false
          location.reload()
        })
        .catch((err) => {
          location.reload()
        })
    },
    async EditApplicant() {
      // await this.$axios
      //   .put(`/api/v1/applicant/${this.userId}`)
      //   .then((res) => {
      //     this.user = res.data.data
      //     this.loading = false
      //   })
      //   .catch((err) => {})
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
