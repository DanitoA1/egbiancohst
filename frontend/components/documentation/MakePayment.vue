<template>
  <div class="my-5 mx-auto container w-11/12">
          <div class="p-3">
          <div
            v-for="(item, id) in admissionData"
            :key="id"
            class="grid grid-cols-2"
          >
            <div
              :class="id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'"
              class="border text-center py-4"
            >
              {{ item.key }}
            </div>
            <div
              :class="id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'"
              class="border text-center py-4"
            >
              {{ item.value }}
            </div>
          </div>
        </div>
    <button
      class="
        bg-blue-600
        hover:bg-dark-blue
        text-white text-center
        my-3
        overflow-ellipsis
        border
        outline-none
        border-gray-300
        w-full
        rounded-4px
        p-3.5
      "
    >
      Make Payment
    </button>
  </div>
</template>

<script>
export default {
    props: ['getCurrentCandidate'],
    data() {
        return {
               admissionData: [
        {
          key: 'Amout',
          value: '#XX,000',
        },
        {
          key: 'Aplication Number',
          value: this.getCurrentCandidate ?  this.getCurrentCandidate.regId : 'Loading',
        },
        {
          key: 'Candidate Name',
          value: this.getCurrentCandidate ?  this.getCurrentCandidate.surname : 'Loading',
        },
        {
          key: 'Payment Category',
          value: 'Application Form',
        },
        {
          key: 'Payment Mode Type',
          value: 'Mastercard',
        },
      ],
        }
    },
}
</script>

<style></style>
