<template>
  <div>
    <BaseAppHeader />
    <div class="font-medium text-3xl my-10 text-center">
        List of Staff Department
    </div>  
    <div class="flex flex-col  space-y-4">
        <div v-for="item in coursesArray" :key="item" class="mx-auto text-gray-500">
            {{item}}
        </div>
    </div>

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

<style></style>
