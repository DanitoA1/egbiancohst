<!-- eslint-disable -->
<template>
  <div>
    <AdmissionLetter :userData="userData" />
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

import AdmissionLetter from '~/components/Student/AdmissionLetter.vue'
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { AdmissionLetter },

  computed: {
    ...mapState(['userData']),
  },
}
</script>
