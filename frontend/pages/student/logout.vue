<template>
  <div></div>
</template>

<script>
export default {
    mounted() {
        this.$fire.auth.signout();
        this.$router.push('/student/login')
    }
}
</script>

<style>

</style>