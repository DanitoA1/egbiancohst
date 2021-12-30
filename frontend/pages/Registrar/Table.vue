<template>
  <div class="bg-white shadow-xl rounded-lg px-5 py-3 mb-10">
    <div class="my-4 items-center grid grid-cols-2">
      <div class="text-xl font-bold">Applicants</div>
      <div>
        <input
          v-model.trim="searchQuery"
          class="
            mr-5
            overflow-ellipsis
            border-2
            outline-none
            border-gray-300
            w-full
            shadow-md
            rounded-md
            p-3.5
            focus:border-blue-400
          "
          type="text"
          placeholder="Search: Application No"
        />
      </div>
    </div>
    <div
      class="flex border-blue-500 border-b text-blue-500 font-semibold text-lg"
    >
      <div class="w-8/12">ِِApplication No</div>
      <div class="w-2/12">Status</div>
      <div class="w-2/12">Action</div>
    </div>
    <div
      v-for="(item, idx) in tableData"
      :key="idx"
      class="cursor-pointer p-5 border-gray-500 border-b flex flex-col"
      @click="() => handleActiveFaq(item.id)"
    >
      <div class="w-full">
        <div class="flex">
          <div class="text-black mb-2 w-8/12 flex">
            <div v-if="item.isOpen">
              <font-awesome-icon
                :icon="['fas', 'angle-up']"
                class="w-6 mr-4 text-black h-6"
              />
            </div>
            <div v-else>
              <font-awesome-icon
                :icon="['fas', 'angle-down']"
                class="w-6 mr-4 text-black h-6"
              />
            </div>

            <div class="ml-5 text-gray-900 text-xl font-medium">
              {{ item.appNo }}
            </div>
          </div>
          <div class="w-2/12">Admitted</div>
          <div class="w-2/12 flex gap-4">
            <button
              class="bg-green-400 rounded-md py-1 px-2 text-white text-lg"
            >
              Admit
            </button>
            <button class="bg-red-400 rounded-md py-1 px-2 text-white text-lg">
              Reject
            </button>
          </div>
        </div>

        <div :class="[item.isOpen ? 'block' : 'hidden', 'ml-11 text-gray-500']">
          <div class="flex justify-between">
            <!-- credential  -->
            <div class="flex flex-col space-y-3 text-lg font-semibold">
              <div>Surname : {{ item.otherInfo.Surname }}</div>
              <div>Middlename : {{ item.otherInfo.MiddleName }}</div>
              <div>Lastname : {{ item.otherInfo.LastName }}</div>
              <div>nationality : {{ item.otherInfo.Nationality }}</div>
              <div>state : {{ item.otherInfo.State }}</div>
              <div>lga : {{ item.otherInfo.LGA }}</div>
              <div>course : {{ item.otherInfo.Course }}</div>
            </div>
            <!-- passport  -->
            <div>
              {{ item.passport }}
            </div>
          </div>
          Docs:
          <span class="bg-blue-200 px-2 text-center rounded-2xl">{{
            item.otherInfo.docs[0]
          }}</span>
          <span class="bg-blue-200 px-2 text-center rounded-2xl">{{
            item.otherInfo.docs[1]
          }}</span>
          <span class="bg-blue-200 px-2 text-center rounded-2xl">{{
            item.otherInfo.docs[2]
          }}</span>
          <span class="bg-blue-200 px-2 text-center rounded-2xl">{{
            item.otherInfo.docs[3]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['getcurrentCandidateBiodata', 'allCandidates'],
  data() {
    return {
      isActive: false,
      searchQuery: '',
      tableData: [
        {
          id: 1,
          isOpen: false,
          appNo: '12346',
          otherInfo: {
            Surname: 'Surname',
            MiddleName: 'MiddleName',
            LastName: 'LastName',
            Nationality: 'Nationality',
            State: 'State',
            LGA: 'selectedLga',
            Course: 'course',
            Passport: 'passport',
            docs: ['scert', 'pcert', 'bcert', 'testimonial'],
          },
        },
        {
          id: 2,
          isOpen: false,
          appNo: '12346',
          otherInfo: {
            Surname: 'Surname',
            MiddleName: 'MiddleName',
            LastName: 'LastName',
            Nationality: 'Nationality',
            State: 'State',
            LGA: 'selectedLga',
            course: 'course',
            passport: 'passport',
            docs: ['scert', 'pcert', 'bcert', 'testimonial'],
          },
        },
        {
          id: 3,
          isOpen: false,
          appNo: '12346',
          otherInfo: {
            Surname: 'Surname',
            MiddleName: 'MiddleName',
            LastName: 'LastName',
            Nationality: 'Nationality',
            State: 'State',
            LGA: 'selectedLga',
            course: 'course',
            passport: 'passport',
            docs: ['scert', 'pcert', 'bcert', 'testimonial'],
          },
        },
        {
          id: 4,
          isOpen: false,
          appNo: '12346',
          otherInfo: {
            Surname: 'Surname',
            MiddleName: 'MiddleName',
            LastName: 'LastName',
            Nationality: 'Nationality',
            State: 'State',
            LGA: 'selectedLga',
            course: 'course',
            passport: 'passport',
            docs: ['scert', 'pcert', 'bcert', 'testimonial'],
          },
        },
      ],
    }
  },
  created() {
    this.$store.dispatch('getAllCandidates')
  },

  methods: {
    handleActiveFaq(id) {
      this.tableData.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen
          return true
        } else {
          item.isOpen = false
          return true
        }
      })
    },
  },
}
</script>
