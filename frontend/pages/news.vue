<template>
  <div>
    <BaseAppHeader />
    <div class="hidden lg:flex  :relative">
      <img
        src="~/assets/images/news_image.svg"
        alt="news-image"
        class="object-cover h-3/6 w-full"
      />

      <div class="absolute z-10 bottom-0 left-0 w-full">
        <div
          class="text-black font-medium mb-10 container w-11/12 pr-60 mx-auto"
        >
          <div class="text-2xl mb-4">
            <span class="pr-4 mr-4 border-r-2 border-gray-500"
              >24 July 2021</span
            >
            <span class="uppercase">school news</span>
          </div>
          <div class="xl:text-7xl text-5xl font-semibold">
            THE NEW REVOLUTION OF SCIENCE AND TECHNOLOGY STUDY IN NIGERIA
          </div>
        </div>
      </div>
    </div>
    <div class="my-28 container w-11/12 mx-auto">
      <div class="mb-8 text-lg text-gray-700 font-semibold">Recent</div>
      <div class="grid lg:grid-cols-3 gap-8">
        <NewsCard v-for="no in 3" :key="no" />
      </div>

      <div class="my-10 text-lg text-gray-700 font-semibold">Local</div>
      <div class="grid lg:grid-cols-3 gap-8">
        <NewsCard v-for="no in 3" :key="no" />
      </div>
    </div>

    <BaseAppFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
