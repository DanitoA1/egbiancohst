<!-- eslint-disable -->
<template>
  <div>
    <AdmissionLetter />
  </div>
</template>

<script>
/* eslint-disable */
import AdmissionLetter from '~/components/Student/AdmissionLetter.vue';
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { AdmissionLetter },
}
</script>
