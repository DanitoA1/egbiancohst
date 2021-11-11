<template>
  <div>
    <BaseAppHeaderLanding />

    <section class="hero ">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 8" :key="item">
          <img
            :src="require(`@/assets/images/carousel/${item}.jpg`)"
            alt=""
            class="lg:w-screen lg:h-screen w-full h-72 mt-28 lg:mt-0"
          />
        </el-carousel-item>
      </el-carousel>
    </section>

    <div
      class="
        landing
      my-10
        text-center
        flex flex-col
        font-semibold
        justify-center
        text-black
      "
    >
      <h1 class="lg:text-8xl text-5xl mx-auto playfair">Unleashing</h1>
      <h1 class="lg:text-8xl text-5xl mx-auto playfair mt-4">
        Your Creativity
      </h1>
      <h2 class="text-2xl mx-auto roboto mt-8 font-thin">
        Creating the perfect timeline for your career
      </h2>
    </div>
    <div class="text-center my-6">
      <h1 class="text-6xl font-bold roboto">About Our College</h1>
    </div>
    <div class="container mx-auto w-11/12">
      <div class="grid lg:grid-cols-2 gap-x-32">
        <div>
          <el-card class="border-0 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="notes" class="mr-2 lg:w-24 w-16 h-24"></svg-icon>
              <div class="flex flex-col ml-6 lg:text-xl text-base col-span-5">
                <h3 class="roboto font-bold text-dark-500">
                  We have determind to make this our vision
                </h3>
                <p class="roboto mt-3 text-dark-700">
                  To be a globally recognized college in the training of
                  competent healthcare professionals
                </p>
              </div>
            </div>
          </el-card>
          <el-card class="border-0 mt-10 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="arrow" class="mr-2 lg:w-24 w-16 h-24"></svg-icon>
              <div class="flex flex-col ml-6 lg:text-xl text-base col-span-5">
                <h3 class="roboto font-bold text-dark-500">
                  It is our aim to become the front teer:
                </h3>
                <p class="roboto mt-3 text-dark-700">
                  Help the community through innovative learning and research,
                  with an unwavering commitment to ethical practice for the
                  benefit of humanity.
                </p>
              </div>
            </div>
          </el-card>
          <el-card class="border-0 mt-10 p-2">
            <div class="grid grid-cols-6 gap-x-5">
              <svg-icon name="goal" class="mr-2 lg:w-24 w-16 h-24"></svg-icon>
              <div class="flex flex-col ml-6 lg:text-xl text-base col-span-5">
                <h3 class="roboto font-bold text-dark-500">
                  The mission we embarked on
                </h3>
                <p class="roboto mt-3 text-dark-700">
                  To strives to provide professionals with the 21st-century
                  skills needed to revamp the nation's healthcare sector.
                </p>
              </div>
            </div>
          </el-card>
        </div>
        <div class="ml-6 lg:mt-0 mt-10">
          <h1 class="text-3xl roboto font-extrabold text-dark-500">
            A good education is a foundation of a better future
          </h1>
          <p class="text-xl text-dark-700 roboto mt-12">
            A community for peer-to-peer learning platform equipped with the
            required tool for teaching and implenting the knowledge of science
            and technology. DIstinuished professors are ready to build your
            future all ahead of you,
          </p>
          <p class="text-xl text-dark-700 roboto mt-4">
            We provide you with a personalized program that is research-backed
            and builds on the experince brought by our experts.
          </p>
          <button
            class="
              bg-dark-blue
              text-white
              py-3.5
              px-10
              mt-12
              rounded-md
              text-2xl
            "
          >
            Explore more
          </button>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-32 my-40">
        <img
          src="~/assets/images/courses.svg"
          alt="Courses Offered"
          class="self-center mx-auto lg:h-full h-80 object-contain"
        />
        <div class="ml-6">
          <h1 class="text-3xl roboto font-extrabold text-dark-500">
            We offered the following courses at Egbian college of science and
            Technology
          </h1>
          <div
            v-for="(item, idx) in coursesArray"
            :key="item"
            :class="[idx == 0 ? 'mt-12' : 'mt-8', 'grid grid-cols-12']"
          >
            <svg-icon name="checked" class="h-10 w-10"></svg-icon>
            <span
              class="col-span-10 text-xl roboto text-dark-500 ml-6 lg:ml-3 self-center"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <Gallery />
    <LatestNews />
    <BaseAppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      coursesArray: [
        'Environmental Health Technicians (EHT)',
        'Community Health Extension Workers (CHEW)',
        'Health Information Management (HIM)',
        'X-Ray Technician (XRT)',
        'Health Education and Promotion (HEP)',
        'Pharmacy Technician (PT)',
        'Dental Technician (DT)',
        'Medical Laboratory Technology (MLT)',
      ],
    }
  },
}
</script>
<style>
section .el-carousel.el-carousel--horizontal .el-carousel__container {
  position: relative !important;
  height: 100vh !important;
}
section .el-carousel__indicators--outside button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  @apply bg-dark-blue;
}

section .el-carousel__container .el-carousel__arrow {
  z-index: 10;
  @apply bg-dark-blue;
}

@media screen and (max-width: 760px) {
  section .el-carousel.el-carousel--horizontal .el-carousel__container {
    position: relative !important;
    height: 400px !important;
  }
  section .el-carousel__container .el-carousel__arrow {
    transform: translateY(50%);
    @apply bg-dark-blue;
  }
}
</style>
