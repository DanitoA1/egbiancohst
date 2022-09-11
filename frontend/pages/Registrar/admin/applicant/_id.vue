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
          <div class="col-span-4">Passport</div>
          <div class="col-span-8 flex-col">
            <img :src="user.picture" alt="" class="h-32 w-32 m mb-2b-2" />
            <button @click="handlePreview(user.picture) class="text-blue-500" >Larger View</button>
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">ID</div>
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
          <div class="col-span-8 capitalize">{{ user.department.name }}</div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Faculty</div>
          <div class="col-span-8 capitalize">
            {{ user.department.faculty.name }}
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
          <div class="col-span-4">Application Fee</div>
          <div class="col-span-8 capitalize">
            {{ user.application_fee_paid }}
          </div>
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
        Client Middey Account Details
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
          <div class="col-span-4">Primary school certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.primary_cert" class="h-32 w-32 mb-2" alt="" />
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Secondary school certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.secondary_cert" class="h-32 w-32 mb-2" alt="" />
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Brith Certificates</div>
          <div class="col-span-8 capitalize">
            <img :src="user.birth_cert" class="h-32 w-32 mb-2" alt="" />
          </div>
        </div>
      </div>
      <div class="border-b p-4">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4">Testimonial</div>
          <div class="col-span-8 capitalize">
            <img :src="user.testimonial" class="h-32 w-32 mb-2" alt="" />
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

      <div class="flex font-bold text-base bg-blue-500 text-white p-4">
        Client Account Status Action
      </div>

      <div class="p-4"></div>
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
      acct_balance: null,
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
        .get(`/api/v1/applicant/${this.userId}`)
        .then((res) => {
          this.user = res.data.data
          this.loading = false
        })
        .catch((err) => {})
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
