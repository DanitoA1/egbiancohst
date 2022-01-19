<template>
  <div class='w-11/12'>
     <div class='text-lg font-bold'>
      Upload {{label}}
       </div> 
    <div class="flex justify-center">
      <img
        :src="
          getCurrentCandidate
            ? getCurrentCandidate[`${doctype}`]
            : require('~/assets/images/user-acct.svg')
        "
        class="object-center h-520 w-52 object-contain"
        alt=""
      />
    </div>
    <input hidden type="file" :id="doctype" @change="handlerUpload"  @input="$emit('change', $event.target.value)"/>
    <label class="cursor-pointer text-dark-blue" :for="doctype">
      <span
        class="
          bg-blue-600
          hover:bg-dark-blue
          text-white text-center
          my-4
          overflow-ellipsis
          border
          outline-none
          border-gray-300
         w-full
          block
          rounded-4px
          p-3.5
        "
      >
        {{ label }}
      </span></label
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCurrentCandidate']),
  },
  props: ['label', 'doctype', 'handlerUpload'],
}
</script>

<style></style>
