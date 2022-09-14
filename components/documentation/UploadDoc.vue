<!-- eslint-disable -->

<template>
  <div class="my-5">
    <Loading v-if="loading" />

    <!-- <div v-if="getCurrentCandidate.paymentStatus"> -->
    <div v-if="true">
      <comp-upload-doc
        :doctype="`secondary_cert`"
        :label="`WAEC/NECO/NABTEB`"
        :handlerUpload="uploadDoc"
      />
      <comp-upload-doc
        :doctype="`primary_cert`"
        :label="`Primary School Certificate`"
        :handlerUpload="uploadDoc"
      />
      <comp-upload-doc
        :doctype="`testimonial`"
        :label="`Testimonial`"
        :handlerUpload="uploadDoc"
      />
      <comp-upload-doc
        :doctype="`birth_cert`"
        :label="`Birth Certificate or Age Declaration`"
        :handlerUpload="uploadDoc"
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
import getUser from '~/Utils/getUser'

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
    uploadDoc(e, docType) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append(docType, file)
      const { user_type } = this.userData.user
      const { id } = this.userData
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, formData)
          .then((res) => {
            this.$toast.success('Document Uploaded Sucessfully')
            getUser(this.$axios, this.$store, this.$cookies, user_type, id)
            location.reload()
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
