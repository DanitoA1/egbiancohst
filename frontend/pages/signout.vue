<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$fire.auth.signOut()
    console.log('logout Succesfull')
    this.$router.push('/')
  },
}
</script>

<style></style>
