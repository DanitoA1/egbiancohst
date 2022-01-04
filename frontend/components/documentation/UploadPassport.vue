<template>
  <div>
    <Loading v-if="loading" />

    <div class="font-bold mt-10 mb-6">Upload Your Passport</div>
    <div class="flex justify-center">
      <img
        v-if="getCurrentCandidate"
        :src="getCurrentCandidate.passportUrl"
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
    <input hidden type="file" id="pscert" @change="uploadImage" />
    <label class="cursor-pointer text-dark-blue" for="pscert">
      <span
        class="
          bg-blue-600
          hover:bg-dark-blue
          text-white text-center
          my-4
          overflow-ellipsis
          border
          outline-none
          border-gray-300
          w-95
          block
          rounded-4px
          p-3.5
        "
      >
        Upload Passport
      </span></label
    >
  </div>
</template>

<script>
export default {
  props: ['getCurrentCandidate'],

  data() {
    return {
      currentCandidate: null,
      loading: false,
    }
  },

  methods: {
    handleUpdate(payload) {
      this.loading = !this.loading
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          passportUrl: payload,
        })
        .then(() => {
          this.loading = !this.loading
          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Passport Upload Sucessfully',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    },
    uploadImage(e) {
      const file = e.target.files[0]
      console.log(file)
      const storageRef = this.$fire.storage.ref()
      const thisRef = storageRef.child('Applicants/' + file.name)
      thisRef
        .put(file)
        .then((snapshot) => {
          console.log(snapshot)
          console.log('Uploaded Image Successfully!')
        })
        .then((res) => {
          thisRef
            .getDownloadURL()
            .then((imageUrl) => {
              this.handleUpdate(imageUrl)
            })
            .catch((error) => {
              console.log(error)
            })
        })
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
