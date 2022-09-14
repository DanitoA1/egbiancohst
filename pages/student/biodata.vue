<!-- eslint-disable -->
<template>
  <div>
    <Biodata :userData="userData" />
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

import Biodata from '~/components/Student/Biodata.vue'
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Biodata },
  computed: {
    ...mapState(['userData']),
  },
}
</script>
