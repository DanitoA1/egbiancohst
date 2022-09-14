<!-- eslint-disable -->
<template>
  <div>
    <Result />
  </div>
</template>

<script>
/* eslint-disable */
import Result from '~/components/Student/Result.vue';
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Result },
}
</script>
