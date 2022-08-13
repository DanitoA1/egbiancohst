<!-- eslint-disable -->
<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
/* eslint-disable */
import Dashboard from '~/components/Student/Dashboard.vue'
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Dashboard },
}
</script>
