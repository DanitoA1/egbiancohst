<template>
  <div></div>
</template>

<script>
export default {
    mounted() {
        this.$fire.auth.signOut();
        this.$router.push('/student/login')
    }
}
</script>

<style>

</style>