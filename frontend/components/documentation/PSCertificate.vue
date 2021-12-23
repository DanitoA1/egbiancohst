<template>
  <div>
    <div class="space-y-2">
      <div class="text-xl font-semibold"><p>Upload your Certificates</p></div>
      <p class="text-gray-500">
        Please ensure your doucument are in png format
      </p>
      <div class="font-semibold">
        <span>Registration ID:</span>
              <span class="text-gray-500"> {{ getCurrentCandidate ? getCurrentCandidate.regId : 'Loading...'}} </span>

      </div>
    </div>
    <!-- Step -->
    <div class="flex item-center justify-center font-medium z-5">
      <div class="-ml-10 mt-10 w-4/6">
        <div class="w-full line relative bg-black">
          <div class="absolute w-1/2 bg-dark-blue line"></div>

          <div
            class="
              absolute
              -left-1
              w-8
              -mt-4
              h-8
              rounded-full
              bg-dark-blue
              grid
              place-content-center
              text-white
            "
          >
            1
          </div>
          <div
            class="
              absolute
              centerdot
              w-8
              -mt-4
              h-8
              rounded-full
              bg-dark-blue
              text-white
              grid
              place-content-center
            "
          >
            2
          </div>
          <div
            class="
              absolute
              -right-1
              w-8
              -mt-4
              h-8
              rounded-full
              bg-gray-300
              grid
              place-content-center
            "
          >
            3
          </div>
        </div>
      </div>
    </div>
    <!-- Step -->

    <div class="font-bold mt-10 mb-6">Upload your Primary School Certificate</div>

    <div
      class="
        h-42
        w-11/12
        mr-6
        mb-10
        border-dashed border-2 border-gray-400
        rounded-lg
        flex
        flex-col
        justify-center
        items-center
        p-10
      "
    >
      <div>
        <img
          src="~/assets/images/upload.svg"
          class="object-contain"
          alt="upload"
        />
      </div>
      <input hidden type='file' id='pscert' name='pscert' />
      <div class='px-1/2 text-gray-500 font-semibold'>
        Drag and drop photo here or just click <label class='cursor-pointer text-dark-blue' for='pscert'>browse</label> to find file from your
        computer
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ["getCurrentCandidate"],

  data() {
    return {}
  },

  methods: {},
}
</script>

<style scoped>
.centerdot {
  left: 47%;
}
.line {
  height: 2px;
}
.top {
  top: 55%;
}
</style>
