<!-- eslint-disable -->
<template>
  <div>
    <div
      v-if="adminStatus"
      class="
        px-3
        py-7
        my-10
        text-green-500
        bg-green-200
        border border-green-500
        w-11/12
        justify-center

        text-base
        font-medium
      "
    >
      <font-awesome-icon
        :icon="['fas', `check-circle`]"
        class="text-green-400 text-lg mr-2"
      />
      <span
        ><strong>Congratulations</strong> ! You've been given provision admission into Egbian College of
        Health and Technology to study {{ userData?.department || "None"}}
      </span>
    </div>
    <div
      v-else
      class="
        px-3
        py-7
        my-10
        text-red-500
        bg-red-300
        border border-red-500
        w-11/12
        justify-center
        text-xl
        font-bold
      "
    >
      <font-awesome-icon
        :icon="['fas', `info-circle`]"
        class="text-white text-lg mr-5"
      />
      <span>No Admission Yet</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  data() {
    return {
      adminStatus: false,
    }
  },
  computed: {
    ...mapState(['userData']),
  },
  mounted() {
    this.adminStatus = this.userData.is_admited
  },
}
</script>

<style></style>
