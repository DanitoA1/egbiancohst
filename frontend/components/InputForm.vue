<template>
  <div class="mb-4">
    <label :for="label" class="text-gray-600 font-bold">
      {{ label }}
    </label>
    <div>
      <input
        class="
        mt-3
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
        "
        :type="type"
        :placeholder="placeholder"
        :value="value"
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
    value: String
  },
}
</script>

<style></style>
