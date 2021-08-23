<template>
  <div>
    <BaseAppHeader/>
    <div class="-mt-36 landing h-827 text-center flex flex-col justify-center">
      <h1 class="text-8xl mx-auto playfair">Unleashing</h1>
      <h1 class="text-8xl mx-auto playfair mt-4">Your Creativity</h1>
      <h2 class="text-2xl mx-auto roboto mt-8 font-thin">Creating the perfect timeline for your career</h2>
    </div>
    <div class="text-center my-16">
      <h1 class="text-6xl font-bold roboto">About Our College</h1>
    </div>
    <div class="container mx-auto w-11/12">
      <div class="grid grid-cols-2 gap-x-32">
        <div>
          <el-card class="border-0 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="notes" class="w-24 h-24"></svg-icon>
              <div class="flex flex-col ml-6 text-xl col-span-5">
                <h3 class="roboto font-bold text-dark-500">We have determind to make this our vision</h3>
                <p class="roboto mt-3 text-dark-700">
                  To be a globally recognized college in the training of competent healthcare
                  professionals
                </p>
              </div>
            </div>
          </el-card>
          <el-card class="border-0 mt-10 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="arrow" class="w-24 h-24"></svg-icon>
              <div class="flex flex-col ml-6 text-xl col-span-5">
                <h3 class="roboto font-bold text-dark-500">It is our aim to become the front teer:</h3>
                <p class="roboto mt-3 text-dark-700">
                  Help the community through innovative learning and research, with an unwavering commitment to ethical
                  practice for the benefit of humanity.
                </p>
              </div>
            </div>
          </el-card>
          <el-card class="border-0 mt-10 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="goal" class="w-24 h-24"></svg-icon>
              <div class="flex flex-col ml-6 text-xl col-span-5">
                <h3 class="roboto font-bold text-dark-500">The mission we embarked on</h3>
                <p class="roboto mt-3 text-dark-700">
                  To strives to provide professionals with the 21st-century skills needed to revamp the nation's healthcare sector.
                </p>
              </div>
            </div>
          </el-card>
        </div>
        <div class="ml-6">
          <h1 class="text-3xl roboto font-extrabold text-dark-500">
            A good education is a foundation of a better future
          </h1>
          <p class="text-xl text-dark-700 roboto mt-12">
            A community for peer-to-peer learning platform equipped with the required tool for teaching and implenting the knowledge of science and technology.
            DIstinuished professors are ready to build your future all ahead of you,
          </p>
          <p class="text-xl text-dark-700 roboto mt-4">
            We provide you with a personalized program that is research-backed and builds on the experince brought by our experts.
          </p>
          <button class="bg-dark-blue text-white py-3.5 px-10 mt-12 rounded-md text-2xl">
            Explore more
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-32 my-40">
        <img src="~/assets/images/courses.svg" alt="Courses Offered" class="self-center">
        <div class="ml-6">
          <h1 class="text-3xl roboto font-extrabold text-dark-500">
            We offered the following courses at Egbian college of science and Technology
          </h1>
          <div class="grid grid-cols-12 mt-12">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Environmental Health Technicians (EHT)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Community Health Extension Workers (CHEW)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Health Information Management (HIM)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">X-Ray Technician (XRT)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Health Education and Promotion (HEP)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Pharmacy Technician (PT)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Dental Technician (DT)</span>
          </div>
          <div class="grid grid-cols-12 mt-8">
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span class="col-span-10 text-xl roboto text-dark-500 ml-3 self-center">Medical Laboratory Technology (MLT)</span>
          </div>
        </div>
      </div>
    </div>
    <BaseAppFooter />
  </div>
</template>

<script>
export default {}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300;400;500;700&display=swap');

  .landing {
    background: url('~assets/images/landing.gif');
  }
  .playfair {
    font-family: 'Playfair Display', serif;
  }
  .roboto {
    font-family: 'Roboto', sans-serif;
  }
</style>