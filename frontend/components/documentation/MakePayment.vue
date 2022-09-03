<template>
  <div class="my-5 mx-auto container w-11/12">
    <!-- <div v-if="!userData.paymentStatus"> -->
    <div v-if="true">
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
        @click="makePayment"
        class="bg-blue-600 hover:bg-dark-blue text-white text-center my-3 overflow-ellipsis border outline-none border-gray-300 w-full rounded-4px p-3.5"
      >
        Make Payment
      </button>
    </div>
    <div
      v-else
      class="px-3 py-7 my-10 text-green-500 bg-green-200 border border-green-500 w-11/12 justify-center text-base font-medium"
    >
      <font-awesome-icon
        :icon="['fas', `check-circle`]"
        class="text-green-400 text-lg mr-2"
      />
      <span><strong>Congratulations!</strong> Payment Successful</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as util from '@/Utils/helper_function'

export default {
  props: ['userData'],
  data() {
    return {
      amount: 100,
      admissionData: [
        {
          key: 'Amout',
          value: '#XX,000',
        },
        {
          key: 'Aplication Number',
          value: this.userData ? this.userData.user.username : 'Loading',
        },
        {
          key: 'Candidate Name',
          value: this.userData ? this.userData.first_name : 'Loading',
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
  methods: {
    async makePayment() {
      //paystack payment
      this.$paystack({
        // key: process.env.PAYSTACK_KEY, // Replace with your public key.
        email: this.loggedInUser.email,
        amount: util.calculateTotalCost(amountNaira),
        ref: Date.now(),
        currency: 'NGN',
        // metadata: {
        //   items: this.paystackMetadata,
        // },
        callback: async (data) => {
          console.log(data)

          if (data.status === 'success') {
            // await this.$swal(
            //   "Congratulations",
            //   `Payment Successful`,
            //   "success"
            // );
            //Update applicant payment status
          } else {
            this.$toast.error('Payment Failed. Try again ')
          }
        },
        onClose: () => {
          // Do something.
        },
      })
    },
  },
}
</script>

<style></style>
