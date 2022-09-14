<!-- eslint-disable -->
<template>
  <div>
    <Courses />
  </div>
</template>

<script>
/* eslint-disable */
import Courses from '~/components/Student/Courses.vue';
export default {
  name: 'DashboardStudent',
  middleware: 'auth',
  components: { Courses },
}
</script>
