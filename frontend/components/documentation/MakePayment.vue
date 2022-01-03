<template>
  <div class="my-5 mx-auto container w-11/12">
    <div v-if="!getCurrentCandidate.paymentStatus">
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
    <div
      v-else
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
      <span><strong>Congratulations!</strong> Payment Successful</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['getCurrentCandidate'],
  data() {
    return {
      amount: 15000,
      admissionData: [
        {
          key: 'Amout',
          value: '#XX,000',
        },
        {
          key: 'Aplication Number',
          value: this.getCurrentCandidate
            ? this.getCurrentCandidate.regId
            : 'Loading',
        },
        {
          key: 'Candidate Name',
          value: this.getCurrentCandidate
            ? this.getCurrentCandidate.surname
            : 'Loading',
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
    async paymentUpdate() {
      const ref = this.$fire.firestore
        .collection('users')
        .doc(this.getCurrentCandidate.id)
      await ref
        .update({ paymentStatus: true })
        .then(() => {
          this.$notify.success({
            title: 'Payment Sucessfull',
            message: 'Continue with Documentation!',
          })
        })
        .catch((err) => console.log(err.message))
    },
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: this.getCurrentCandidate.email,
          phonenumber: this.getCurrentCandidate.phoneNumber,
          name: `${this.getCurrentCandidate.surname} ${this.getCurrentCandidate.middlename} ${this.getCurrentCandidate.lastname}`,
        },
        callback(data) {
          // specified callback function
          console.log(data)
          if (data.status === 'successful') {
            this.paymentUpdate()
            this.$router.push('/admission/documentation')
          }
        },
        customizations: {
          title: 'Application Form',
          description: '2022/23 Admission registration fee',
          logo: 'https://project-egbiancohst.web.app/_nuxt/img/Logo.f757544.svg',
        },
      })
    },
  },
}
</script>

<style></style>
