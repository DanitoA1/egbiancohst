<template>
  <div >
    <div
      class="
        flex flex-col
        items-center
        justify
        space-y-4
        border-b border-gray-400
        pb-3
      "
    >
      <div class="text-center py-2 text-4xl uppercase">
        Egbian College of Health and Technology
      </div>
      <div class="">
        <img src="~/assets/images/Logo.svg" class="w-16 h-16" alt="" />
      </div>
      <div class="text-2xl">OFFICE OF THE REGISTRAR</div>
    </div>

    <div class="my-4 px-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 self-center">
          <h1 class="font-semibold text-xl mb-3 uppercase">
            2017/2018 UNDERGRADUATE ADMISSION
          </h1>
          <p class="text-gray-500 text-base uppercase">
            CONGRATULATIONS! YOU HAVE BEEN OFFERED PROVISIONAL ADMISSION INTO
            THE UNDERGRADUATE PROGRAMME OF THE UNIVERSITY WITH THE FOLLOWING
            DETAILS
          </p>
        </div>
        <div class="self-center justify-self-center">
          <div class="bg-blue-400 p-1 rounded-full">
            <img
              src="https://thumbs.dreamstime.com/b/user-profile-avatar-icon-134114292.jpg"
              alt="user-avatar"
              class="w-52 h-52 rounded-full"
            />
          </div>
        </div>
      </div>

      <div class="my-5 grid grid-cols-2 gap-4">
        <div class="py-5 border-r border-gray-500">
          <h1 class="text-base font-semibold uppercase">
            SECTION A: PERSONAL DETAIL
          </h1>
          <ol class="list-decimal">
            <li>JAMB Registration Number : 76389494DC</li>
            <li>Names:  {{ userData ? userData.first_name : 'Loading..' }}  {{ userData ? userData.last_name : 'Loading..' }}  </li>
            <li>State of Origin :  {{ userData ? userData.state : 'Loading..' }}</li>
            <li>Local Government:  {{ userData ? userData.lga : 'Loading..' }}</li>
          </ol>
        </div>
        <div class="py-5 px-3">
          <h1 class="text-base font-semibold uppercase">
            SECTION B: Academic DETAIL
          </h1>
          <ol class="list-decimal">
            <li>Faculty:  {{ userData ? userData.department.faculty.name : 'Loading..' }}</li>
            <li>Programme : Full Time</li>
            <li>Level : 100</li>
            <li>Mode Of Entry</li>
          </ol>
        </div>
      </div>

      <div class="bg-blue-200">
        <div class="p-3 text-blue-500">
          <div class="font-bold uppercase">NOTE</div>

          <div class="font-semibold my-3">
            You are required to submit photocopies of the following documents to
            the Academic Office of the Registry Department immediately after
            completion of your on-line course registration:
          </div>

          <p>
            (i) Letter of admission into the College, printed from Egbian
            College of Science and Technology website.
          </p>
          <p>(ii) Letter of admission printed from JAMB website.</p>
          <p>
            (iii) JAMB Registration Slip for Direct Entry and result slip with
            passport for UTME candidates.
          </p>

          <p>
            (iv) Academic credentials-certificates or on-line printout results
            from website of the Examination Bodies (WAEC/NECO &amp; NABTEB)
            including Primary School Certificates.
          </p>
          <p>(v) Birth Certificate or Statutory Declaration of Age.</p>
          <p>(vi) Two passport photographs.</p>

          <p>
            (vii) Evidence of on-line payment receipt of prescribed charges.
          </p>
          <p>
            (viii) Certificate of indigeneship from student’s Local Government
            Council.
          </p>

          <p>
            (ix) Letter of attestation on character from student’s
            Parent/Guardian.
          </p>

          <div class="font-semibold my-3">
            You are also required to obtain the following forms from the
            University for completion and submission at the same time into your
            Academic record files:
          </div>

          <p>(i) Online Course Registration Form (online)</p>

          <p>(ii) Students Bio-Data Form (Academic office)</p>

          <p>(iii) Medical Report Form download a pdf form (online)</p>
        </div>
      </div>
      <button
        class="
          py-2
          px-4
          text-center
          shadow-sm
          rounded-sm
          mt-3
          hover:bg-blue-800
          text-white
          bg-dark-blue
        "
      >
        Print
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admission-Letter',
  props: ['userData']
}
</script>

<style></style>
