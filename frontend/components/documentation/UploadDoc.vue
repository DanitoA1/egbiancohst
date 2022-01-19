<template>
  <div class="my-5">
    <Loading v-if="loading" />

    <div v-if="getCurrentCandidate.paymentStatus">
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
      class="
        px-3
        py-7
        my-10
        text-red-500
        bg-red-300
        border border-red-500
        w-11/12
        justify-center
        text-xl
        font-bold
      "
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
import { mapGetters } from 'vuex'

import CompUploadDoc from './CompUploadDoc.vue'
export default {
  data() {
    return {
      loading: false,
    }
  },
  components: { CompUploadDoc },
  computed: {
    ...mapGetters(['getCurrentCandidate']),
  },
  methods: {
    handleUpdateScert(payload) {
      this.loading = !this.loading

      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          scert: payload,
        })
        .then(() => {
          this.loading = !this.loading

          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Document successfully Updated',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    },
    uploadScert(e) {
      const file = e.target.files[0]
      console.log(file)
      const storageRef = this.$fire.storage.ref()
      const thisRef = storageRef.child('Applicants/' + file.name)
      thisRef
        .put(file)
        .then((snapshot) => {
          console.log(snapshot)
          console.log('Document successfully Updated!')
        })
        .then((res) => {
          thisRef
            .getDownloadURL()
            .then((imageUrl) => {
              this.handleUpdateScert(imageUrl)
            })
            .catch((error) => {
              console.log(error)
            })
        })
    },
    handleUpdatePcert(payload) {
      this.loading = !this.loading

      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          pcert: payload,
        })
        .then(() => {
          this.loading = !this.loading

          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Document successfully Updated',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    },
    uploadPcert(e) {
      const file = e.target.files[0]
      console.log(file)
      const storageRef = this.$fire.storage.ref()
      const thisRef = storageRef.child('Applicants/' + file.name)
      thisRef
        .put(file)
        .then((snapshot) => {
          console.log(snapshot)
          console.log('Document successfully Updated!')
        })
        .then((res) => {
          thisRef
            .getDownloadURL()
            .then((imageUrl) => {
              this.handleUpdatePcert(imageUrl)
            })
            .catch((error) => {
              console.log(error)
            })
        })
    },
    handleUpdateBcert(payload) {
      this.loading = !this.loading

      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          bcert: payload,
        })
        .then(() => {
          this.loading = !this.loading

          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Document successfully Updated',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    },
    uploadBcert(e) {
      const file = e.target.files[0]
      console.log(file)
      const storageRef = this.$fire.storage.ref()
      const thisRef = storageRef.child('Applicants/' + file.name)
      thisRef
        .put(file)
        .then((snapshot) => {
          console.log(snapshot)
          console.log('Document successfully Updated!')
        })
        .then((res) => {
          thisRef
            .getDownloadURL()
            .then((imageUrl) => {
              this.handleUpdateBcert(imageUrl)
            })
            .catch((error) => {
              console.log(error)
            })
        })
    },
    handleUpdateTestimonial(payload) {
      this.loading = !this.loading

      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          testimonial: payload,
        })
        .then(() => {
          this.loading = !this.loading

          console.log('Document successfully Updated!')
          this.$notify.success({
            title: 'Document successfully Updated',
            message: 'Data Saved!',
          })
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    },
    uploadTestimonial(e) {
      const file = e.target.files[0]
      console.log(file)
      const storageRef = this.$fire.storage.ref()
      const thisRef = storageRef.child('Applicants/' + file.name)
      thisRef
        .put(file)
        .then((snapshot) => {
          console.log(snapshot)
          console.log('Document successfully Updated!')
        })
        .then((res) => {
          thisRef
            .getDownloadURL()
            .then((imageUrl) => {
              this.handleUpdateTestimonial(imageUrl)
            })
            .catch((error) => {
              console.log(error)
            })
        })
    },
  },
}
</script>

<style></style>
