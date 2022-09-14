<!-- eslint-disable -->
<template>
  <div>
    <RegistrationFee />
  </div>
</template>

<script>
/* eslint-disable */
import RegistrationFee from '~/components/Student/RegistrationFee.vue';
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { RegistrationFee },
}
</script>
