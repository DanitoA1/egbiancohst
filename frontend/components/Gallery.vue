<template>
  <div class="bg-gallery">
    <div class="container w-11/12 mx-auto py-12">
      <div class="grid lg:grid-cols-2 gap-28">
        <div>
          <h2 class="uppercase mb-5 text-dark-blue text-xl font-medium">
            gallery
          </h2>
          <h1 class="mb-5 text-gray-700 text-2xl font-bold">
            Our Photo Snap shots of the school
          </h1>
          <h3 class="sub-text mb-4">
            There are currently more than 200 Licensed school operating in Bida
            around Niger state. The curriculum is researched syllabus with a
            mixture of outcomes.
          </h3>
          <h3 class="sub-text mb-4">
            Objectives, play and inquiry-based learning. All our lecturers are
            carefully selected with qualified lecturing backgrounds and are
            extensively trained by the Federal medical care Bida
          </h3>
        </div>

        <main>
          <el-carousel indicator-position="outside" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <div class="">
                <div
                  class="absolute z-20 h-5/6 w-5/6 border-2 border-white m-16"
                ></div>
               
                 
              </div> -->
              <div
                class="
                  relative
                  z-20
                  h-full
                  box-border
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="carousel-overlay"></div>
                <img
                   :src="require(`@/assets/images/carousel/1_${item}.jpg`)"
                  class="h-full w-full z-1"
                  alt="photo-shoot"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style >
main .carousel-overlay {
  position: absolute;
  margin: 10px;
  width: 92%;
  height: 92%;
  border: 3px solid white;
}
main .el-carousel__item {
  /* @apply grid place-content-center; */
  padding: 0 70px;
}


main .el-carousel__indicators--outside button
   {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
   @apply bg-dark-blue;
}

main .el-carousel__container .el-carousel__arrow {
  @apply bg-dark-blue;
}

</style>
