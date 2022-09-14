<!-- eslint-disable -->
<template>
  <div class="w-11/12">
    <div class="text-lg font-bold mb-2">Upload {{ label }}</div>
    <div class="flex justify-center">
      <img
        :src="docImage ? docImage : require('~/assets/images/user-acct.svg')"
        class="object-center h-520 w-52 object-contain"
        alt=""
      />
    </div>
    <input
      hidden
      type="file"
      accept="image/jpeg"
      :id="doctype"
      @change="handlerUpload($event, doctype)"
    />
    <label class="cursor-pointer text-dark-blue" :for="doctype">
      <span
        class="bg-blue-600 hover:bg-dark-blue text-white text-center my-4 overflow-ellipsis border outline-none border-gray-300 w-full block rounded-4px p-3.5"
      >
        {{ label }}
      </span></label
    >
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userData']),
  },
  props: ['label', 'doctype', 'handlerUpload'],
  data() {
    return {
      docImage: null,
    }
  },
  mounted() {
    
    this.docImage = this.userData[this.doctype]
  },
}
</script>

<style></style>
