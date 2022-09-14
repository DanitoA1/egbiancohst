<template>
  <div>
    <div class="grid text-left lg:grid-cols-2 gap-5">
      <div class="flex flex-col">
        <div class="mb-8">
          <span for="Name" class="text-gray-600 font-bold"> You Name </span>
          <input
            class="
              mt-3
              overflow-ellipsis
              outline-none
              w-full
              shadow-ms
              rounded-sm
              p-3.5
              focus:border-blue-400
              bg-light-blue
            "
            type="text"
            name="name"
            placeholder="Chinedu Adamu Adekunle"
          />
        </div>
        <div class="mb-8">
          <label for="Name" class="text-gray-600 font-bold">
            Mobile Number
          </label>
          <input
            class="
              mt-3
              overflow-ellipsis
              outline-none
              bg-light-blue
              w-full
              shadow-ms
              rounded-sm
              p-3.5
              focus:border-blue-400
            "
            type="text"
            placeholder="09123456789"
          />
        </div>
      </div>
      <div>
        <span for="Message" class="text-gray-600 font-bold"> Message </span>
        <textarea
          rows="7"
          cols=""
          placeholder="Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Tempus enim tellus auctor dui. Ipsum, ph
"
          class="
            mt-3
            overflow-ellipsis
            outline-none
            bg-light-blue
            w-full
            shadow-ms
            rounded-sm
            p-3.5
            focus:border-blue-4900
          "
        ></textarea>
      </div>
    </div>
    <div class="flex justify-end my-5">
      <button
        class="
          text-center
          rounded-sm
          text-dark-blue
           text-md
          font-medium
          p-3
          hover:bg-dark-blue
          hover:text-white
          transition
          border
          
          border-dark-blue
         
        "
        type="submit"
      >
        Send Message
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
