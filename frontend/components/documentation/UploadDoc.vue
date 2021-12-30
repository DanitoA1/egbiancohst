<template>
  <div class="my-5">
     <comp-upload-doc
     :doctype="`scert`"
     :label="`Waec or Neco or Nabteb`"
     :handlerUpload="uploadImage"
      />
     <comp-upload-doc
     :doctype="`pcert`"
     :label="`Primary School Certification`"
      />
     <comp-upload-doc
     :doctype="`testimonial`"
     :label="`Testimonial`"
      />
     <comp-upload-doc
     :doctype="`bcert`"
     :label="`Birth Certificate or Age Declaration`"
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
    handleUpdate(payload) {
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

<style>

</style>