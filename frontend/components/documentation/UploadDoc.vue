<!-- eslint-disable -->

<template>
  <div class="my-5">
    <Loading v-if="loading" />

    <!-- <div v-if="getCurrentCandidate.paymentStatus"> -->
    <div v-if="true">
      <comp-upload-doc
        :doctype="`scert`"
        :label="`Waec or Neco or Nabteb`"
        :handlerUpload="uploadScert"
      />
      <comp-upload-doc
        :doctype="`pcert`"
        :label="`Primary School Certificate`"
        :handlerUpload="uploadPcert"
      />
      <comp-upload-doc
        :doctype="`testimonial`"
        :label="`Testimonial`"
        :handlerUpload="uploadTestimonial"
      />
      <comp-upload-doc
        :doctype="`bcert`"
        :label="`Birth Certificate or Age Declaration`"
        :handlerUpload="uploadBcert"
      />
    </div>
    <div
      v-else
      class="px-3 py-7 my-10 text-red-500 bg-red-300 border border-red-500 w-11/12 justify-center text-xl font-bold"
    >
      <font-awesome-icon
        :icon="['fas', `info-circle`]"
        class="text-white text-lg mr-5"
      />
      <span>Payment required for this action </span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from 'vuex'

import CompUploadDoc from './CompUploadDoc.vue'
export default {
  data() {
    return {
      loading: false,
    }
  },
  components: { CompUploadDoc },
  computed: {
    ...mapState(['userData']),
  },
  methods: {
    uploadScert(e) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append('picture', file)
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Certificate Uploaded Sucessfully')
            this.loading = false
          })
      } catch (error) {
        this.loading = false
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }
    },

    uploadPcert(e) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append('picture', file)
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Certificate Uploaded Sucessfully')
            this.loading = false
          })
      } catch (error) {
        this.loading = false
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }
    },

    uploadBcert(e) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append('picture', file)
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Certificate Uploaded Sucessfully')
            this.loading = false
          })
      } catch (error) {
        this.loading = false
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }
    },

    uploadTestimonial(e) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append('picture', file)
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Certificate Uploaded Sucessfully')
            this.loading = false
          })
      } catch (error) {
        this.loading = false
        console.log(error)
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }
    },
  },
}
</script>

<style></style>
