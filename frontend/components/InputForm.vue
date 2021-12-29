<template>
  <div class="mb-8">
    <label :for="label" class="text-gray-600 font-bold">
      {{ label }}
    </label>
    <div>
      <input
        class="
          mt-3
          overflow-ellipsis
          border
          outline-none
          border-gray-300
          w-full
          focus:shadow-md
          rounded-4px
          p-3.5
          focus:border-blue-400
        "
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    placeholder: String,
  },
}
</script>

<style></style>
