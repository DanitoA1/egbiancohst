<template>
  <form action="#" @submit.prevent="makePayment">
    <div class="btn-wrapper">
      <input type="number" v-model.number="amount" />
      <button type="submit" class="p-2 bg-dark-blue text-white rounded-lg">Make Payment</button>
    </div>
  </form>
</template>
 
<script>
export default {
  data() {
    return {
      amount: 200
    }
  },
  methods: {
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '08102909304',
          name: 'yemi desola'
        },
        callback(data) {
          // specified callback function
          console.log(data)
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://assets.piedpiper.com/logo.png'
        }
      })
    }
  }
}
</script>