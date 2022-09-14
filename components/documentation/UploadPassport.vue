<!-- eslint-disable -->
<template>
  <div>
    <Loading v-if="loading" />

    <div class="font-bold mt-10 mb-6">Upload Your Passport</div>
    <div class="flex justify-center">
      <img
        v-if="candidateImage"
        :src="candidateImage"
        class="object-center h-52 w-52 object-contain"
        alt=""
      />
      <img
        v-else
        :src="require('~/assets/images/user-acct.svg')"
        class="object-center h-52 w-52 object-contain rounded"
        alt=""
      />
    </div>
    <input
      hidden
      accept="image/jpeg"
      type="file"
      id="image"
      @change="uploadImage"
    />
    <label class="cursor-pointer text-dark-blue" for="image">
      <span
        class="bg-blue-600 hover:bg-dark-blue text-white text-center my-4 overflow-ellipsis border outline-none border-gray-300 w-95 block rounded-4px p-3.5"
      >
        Upload Passport
      </span></label
    >
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import getUser from '~/Utils/getUser'
export default {
  data() {
    return {
      candidateImage: null,
      loading: false,
    }
  },
  computed: {
    ...mapState(['userData']),
  },

  mounted() {
    this.candidateImage = this.userData?.picture || null
  },
  methods: {
    handleUpdate(passport) {
      try {
        this.loading = true
        const { user_type } = this.userData.user
        const { id } = this.userData
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Passport Uploaded Sucessfully')
            getUser(this.$axios, this.$store, this.$cookies, user_type, id)
            location.reload()
          })
      } catch (error) {
        console.log(error)
        this.loading = false
        if (error.response) {
          this.$toast.error(error.response.data.message)
        }
      }
    },
    uploadImage(e) {
      const file = e.target.files[0]
      // const imageUrl = URL.createObjectURL(file)
      let formData = new FormData()
      formData.append('picture', file)
      this.handleUpdate(formData)
    },
  },
}
</script>

<style scoped>
.centerdot {
  left: 47%;
}
.line {
  height: 2px;
}
.top {
  top: 55%;
}
</style>
