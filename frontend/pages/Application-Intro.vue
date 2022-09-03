<template>
  <div>
    <BaseAppHeader />
    <div
      class="
        flex flex-col
        items-center
        justify
        space-y-4
        border-b border-gray-400
        pb-3
        text-center
      "
    >
      <div class="py-2 text-4xl uppercase">
        Egbian College of Health and Technology
      </div>
      <div class="">
        <img
          src="~/assets/images/Logo.svg"
          class="lg:w-40 lg:h-40 w-20 h-20"
          alt=""
        />
      </div>
      <div class="text-2xl">OFFICE OF THE REGISTRAR</div>

      <h2 class="text-xl">
        Admission into Undergraduate Programmes For 2022/2023 Academic Session
      </h2>
    </div>

    <div class="my-10 mx-auto container w-11/12">
      <div class="text-2xl font-bold">HOW TO APPLY</div>
      <ul class="text-gray-500 text-lg list-disc ml-8">
        <li>
          Click on the button with <strong> ‘START APPLICATION’ </strong>below.
        </li>
        <li>Login and Start Application page appears.</li>
        <li>Click Start Application if you are yet to register</li>
        <li>
          Enter (FullName) surname, first name, other names, valid email
          address, phone number and password.
        </li>
        <li>
          Make sure you enter all information correctly, because your email
          address will be used to send Application Number.
        </li>
        <li>Click the “Submit Application” button</li>
        <li>
          After clicking on the button, you are returned to login page. login
          with correct <strong>Email</strong> and <strong>Password</strong> to
          complete the online application.
        </li>
        <li>
          [Optional] Candidate can also sign-in into their email account and
          continue using the link provided to continue registration.
        </li>
        <li>
          <strong>Important Note:</strong> Candidate should also check their
          <strong>SPAM folder</strong> in case mail is not found in the mail
          <strong>“inbox” </strong>
        </li>
        <li>
          Once you login successfully complete the remaining part of the
          registration as follows:
          <ul class="list-disc ml-5">
            <li>
              On getting to your profile page, follow the registration process
              sequentially on the sidebar pane
            </li>
            <li>Fill out your data</li>
            <li>O-level results one or combination of two sittings.</li>
            <li>
              Upload all credential (Recommended size: Width:500px/Height:680px)
            </li>
            <li>
              Upload Passport (Recommended size: Width:150px/Height:170px)
            </li>
          </ul>
        </li>
      </ul>

      <div class="text-2xl font-bold mt-6">PAYMENT PROCEDURE</div>
      <ul class="text-gray-500 text-lg list-disc ml-8">
        <li>Click Open payment button</li>
        <li>
          After clicking on the button, you proceed to payment gateway. A
          payment information page will be generated for you to confirm your
          previous data entered.
        </li>
        <li>
          Payment Egbian College is done through Debit Card (MasterCard &amp;
          VISA Card )
        </li>
        <li>
          Enter ATM Debit card details (Card number, expiry date, CVV2 i.e. the
          3 digits behind your card, and pin number)
        </li>
        <li>This automatically debits NXX,000 application fees)</li>

        <li>
          Make printout of the registration form and payment for VERIFICATION
        </li>
      </ul>
      <div class="text-red-500 text-lg mt-10 font-medium">
        ENQUIRY NUMBERS: 070XXXXXXXX
        <span class="text-black">Or</span> 080XXXXXXXX.
      </div>
    </div>

    <div class="flex justify-center">
      <nuxt-link to="/auth/admission/login">
        <button
          class="
            bg-blue-600
            hover:bg-dark-blue
            py-2
            px-10
            font-bold
            lg:text-2xl
            text-xl
            rounded-md
            my-4
            text-white
          "
        >
          START APPLICATION
        </button>
      </nuxt-link>
    </div>

    <BaseAppFooter />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
