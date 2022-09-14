<!-- eslint-disable -->
<template>
  <div>
    <Dashboard :userData="userData" />
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

import Dashboard from '~/components/Student/Dashboard.vue'
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Dashboard },
  computed: {
    ...mapState(['userData']),
  },
}
</script>
