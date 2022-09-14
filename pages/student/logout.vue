<!-- eslint-disable -->
<template>
  <div></div>
</template>

<!-- eslint-disable -->
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.logoutHandler()
  },
  methods: {
    ...mapActions(['logOut']),
    logoutHandler() {
      this.logOut()
    },
  },
}
</script>
