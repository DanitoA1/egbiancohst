<template>
  <div>
    <BaseAppHeader />
    <div class="my-18 container w-11/12 mx-auto">
      <!-- Hero Section  Begin -->
      <div>
        <div class="flex mb-7">
          <div class="flex lg:w-3/5 w-full space-x-8">
            <div class="flex items-end w-45">
              <img
                class="w-full object-cover"
                src="@/assets/images/student-chatting.svg"
                alt="student-chatting"
              />
            </div>
            <div class="w-55">
              <img
                class="w-full object-cover"
                src="@/assets/images/man-with-laptop.svg"
                alt="man-laptop"
              />
            </div>
          </div>
          <div class="lg:flex pl-6 hidden lg:w-2/5 items-center">
            <div>
              <h1 class="header-text">How did we start?</h1>
              <p class="text-dark-700 font-normal text-lg">
                Information on how egbian college of science and technology is
                structure and explore our life long history with the community.
                Our leadership, management and endowement as an independent
                entity that operate efficiently.
              </p>
            </div>
          </div>
        </div>
        <div class="flex lg:flex-row flex-col">
          <div class="flex lg:w-3/5  lg:pl-16 lg:pr-10 -mt-3">
            <img
              src="@/assets/images/student-reading.svg"
              alt="student-reading"
            />
          </div>
          <div class="flex w-full lg:w-2/5">
          <div class="lg:flex hidden">

            <img
              src="@/assets/images/teacher-writing.svg"
              alt="teacher-writing"
            />
          </div>
          <div class="flex my-10 lg:my-0 lg:hidden">
               <div>
              <h1 class="header-text">How did we start?</h1>
              <p class="text-dark-700 font-normal text-lg">
                Information on how egbian college of science and technology is
                structure and explore our life long history with the community.
                Our leadership, management and endowement as an independent
                entity that operate efficiently.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <!-- Hero Section End -->

      <!-- Main Begin -->
      <div class="mt-8">
        <div class="text-center lg:px-28 px-5">
          <h1 class="header-text">The most preferred and trusted</h1>
          <p class="sub-text">
            Come and discover exciting and vibrant campus and find out why
            Egbian is improving how student build a better future for themselves
          </p>
        </div>

        <div class="mt-10 flex lg:justify-between flex-col lg:flex-row text-center">
          <div
            v-for="(data, idx) in propertyData"
            :key="idx"
            class="space-y-4 flex items-center flex-col"
          >
            <div
              class="
                bg-icon-container
                grid
                place-content-center
                h-12
                w-12
                p-8
                rounded-full
              "
            >
              <svg-icon :name="data.icon" class="h-9 w-9"></svg-icon>
            </div>
            <h1 class="lg:text-3xl text-5xl font-medium mb-2 text-dark-blue">{{ data.count }}</h1>
            <h4 class="sub-text  px-8">{{ data.desc }}</h4>
          </div>
        </div>

        <!-- Educational System  -->

        <div class="my-18 pb-3 space-y-5 flex flex-col">
          <div class="header-text">Our Educational System</div>
          <div class="sub-text w-3/5">
            It is our mission to remove barriers to understand our students and
            give them the best platform that will improve their academic success
          </div>
        </div>
        <!-- courses offered  -->
        <div class="grid lg:grid-cols-2 gap-10">
          <div>
            <img
              src="@/assets/images/courses-offered.svg"
              alt="courses-offered"
            />
          </div>
          <div>
            <div class="header-text pt-16">The Best Courses offered</div>
            <div class="sub-text my-10">
              Culture is an incredibly important part of how we operate. We
              stand by 4 pillars to success. These ensure we're all moving in
              the same direction, and encourage the inclusive, divers
              methodology of improving student
            </div>
            <div class="capitalize text-3xl grid pl-3 lg:grid-cols-2 gap-8">
              <div class="flex items-center">
                <span>
                  <img
                    class="h-14 w-14 mr-5"
                    src="@/assets/images/respect.png"
                    alt="respect"
                  />
                </span>
                <span class="font-normal text-dark-blue">respect</span>
              </div>
              <div class="flex items-center">
                <span>
                  <img
                    class="h-14 w-14 mr-5"
                    src="@/assets/images/service.png"
                    alt="service"
                  />
                </span>
                <span class="font-normal text-dark-blue">service</span>
              </div>
              <div class="flex items-center">
                <span>
                  <img
                    class="h-14 w-14 mr-5"
                    src="@/assets/images/innovation.png"
                    alt="innovation"
                  />
                </span>
                <span class="font-normal text-dark-blue">innovation</span>
              </div>
              <div class="flex items-center">
                <span>
                  <img
                    class="h-14 w-14 mr-5"
                    src="@/assets/images/community.png"
                    alt="community"
                  />
                </span>
                <span class="font-normal text-dark-blue">community</span>
              </div>
              <div class="flex items-center">
                <span>
                  <img
                    class="h-14 w-14 mr-5"
                    src="@/assets/images/integrity.png"
                    alt="integrity"
                  />
                </span>
                <span class="font-normal text-dark-blue">integrity</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Learn and Grow -->
        <div class="mt-44 grid lg:grid-cols-2 gap-10">
          <div class="mt-8 flex flex-col">
            <div class="header-text leading-loose mb-20">
              Get ready to learn and grow with us
            </div>
            <div class="space-y-10 mt-8 flex flex-col">
              <div class="flex flex-row">
                <span class="mr-4">
                  <svg-icon class="h-10 w-10" name="checked"></svg-icon>
                </span>
                <span>
                  <h1 class="sub-text text-4xl font-medium">
                    Research based school
                  </h1>
                  <p class="text-gray-400 font-normal text-lg">
                    The minor and major research projects undertaken by the
                    students help them to gradually hone their research skills.
                    They have access to libraries and laboratories to pursue
                    their research projects.
                  </p></span
                >
              </div>
              <div class="flex flex-row">
                <span class="mr-4">
                  <svg-icon class="h-10 w-10" name="checked"></svg-icon>
                </span>
                <span>
                  <h1 class="sub-text text-xl font-meduim">
                    Flexible technology
                  </h1>
                  <p class="text-gray-400 font-normal text-lg">
                    Lecturers also understand how to use foundational, adaptive,
                    and highly customizable content and tools in order to
                    differentiate the path, pace, and/ or performance tasks of
                    learning.
                  </p></span
                >
              </div>
              <div class="flex flex-row">
                <span class="mr-4">
                  <svg-icon class="h-10 w-10" name="checked"></svg-icon>
                </span>
                <span>
                  <h1 class="sub-text text-xl font-meduim">
                    Student reflection and ownership
                  </h1>
                  <p class="text-gray-400 font-normal text-lg">
                    Built on metacognition research, we believe students need
                    ample opportunities to reflect on their own learning.
                  </p></span
                >
              </div>
            </div>
          </div>
          <div>
            <img src="@/assets/images/student-on-campus.png" alt="students" />
          </div>
        </div>

        <!-- School Management -->

        <div class="mt-16 text-center">
          <div class="header-text mb-8">School Management</div>
          <div class="sub-text w-3/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus enim
            tellus auctor dui. Ipsum, phasellus libero, nec, et et urna, magna
            purus. Cras aliquam dui orci.
          </div>
          <!-- stakeholders -->

          <div class="mt-20">
            <div class="grid lg:grid-cols-3 gap-20 text-center">
              <div class="flex justify-center flex-col " v-for="person in 6" :key='person'>
                <div class=" h-330 bg-hod w-full pt-5 mb-8">
                  <img
                    src="@/assets/images/placeholder-img.png"
                    class="w-64 h-64 object-contain mx-auto"
                    alt="placeholder"
                  />
                </div>
                  <h1 class="font-semibold text-4xl text-gray-500">Frank Moses</h1>
                  <p class="sub-text">HOD</p>
              </div>
             
             
            </div>
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
      propertyData: [
        {
          icon: 'security',
          count: '1240+',
          desc: 'Number of accredited courses',
        },
        {
          icon: 'people',
          count: '260+',
          desc: 'Total successful graduates',
        },
        {
          icon: 'building',
          count: '560+',
          desc: 'Numbers of infrastures built',
        },
      ],
    }
  },
}
</script>
<style scoped>

</style>
