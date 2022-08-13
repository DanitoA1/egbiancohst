<!-- eslint-disable -->
<template>
  <div>
    <Biodata />
  </div>
</template>

<script>
/* eslint-disable */
import Biodata from '~/components/Student/Biodata.vue';
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Biodata },
}
</script>
