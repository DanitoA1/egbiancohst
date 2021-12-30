<template>
  <div class="my-5">
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
</template>

<script>
import { mapGetters } from 'vuex'

import CompUploadDoc from './CompUploadDoc.vue'
export default {
  components: { CompUploadDoc },
  computed: {
    ...mapGetters(['getCurrentCandidate']),
  },
  methods: {
    handleUpdateScert(payload) {
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          scert: payload,
        })
        .then(() => {
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
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          pcert: payload,
        })
        .then(() => {
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
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          bcert: payload,
        })
        .then(() => {
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
      this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
        .update({
          testimonial: payload,
        })
        .then(() => {
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
