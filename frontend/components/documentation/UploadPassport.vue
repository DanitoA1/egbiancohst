<!-- eslint-disable -->
<template>
  <div>
    <Loading v-if="loading" />

    <div class="font-bold mt-10 mb-6">Upload Your Passport</div>
    <div class="flex justify-center">
      <img
        v-if="userData"
        :src="userData.picture"
        class="object-center h-520 w-52 object-contain"
        alt=""
      />
      <img
        v-else
        :src="require('~/assets/images/user-acct.svg')"
        class="object-center h-520 w-52 object-contain"
        alt=""
      />
    </div>
    <input hidden type="file" id="image" @change="uploadImage" />
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
export default {
  data() {
    return {
      currentCandidate: null,
      loading: false,
    }
  },
  computed: {
    ...mapState(['userData']),
  },

  methods: {
    handleUpdate(passport) {
      try {
        this.loading = true
        this.$axios
          .put(`/api/v1/applicant/${this.userData.id}/`, passport)
          .then((res) => {
            console.log(res)

            this.$toast.success('Passport Uploaded Sucessfully')
            this.loading = false
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
