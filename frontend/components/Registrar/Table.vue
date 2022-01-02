<template>
  <section>
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
        class="
          flex
          border-blue-500 border-b
          text-blue-500
          font-semibold
          text-lg
          pb-3
        "
      >
        <div class="w-8/12">ِِApplication No</div>
        <div class="w-2/12">Status</div>
        <div class="w-2/12">Action</div>
      </div>

      <div
        v-for="(item, idx) in resultQuery"
        :key="idx"
        :class=" idx !== resultQuery.length - 1 ? 'border-b border-gray-500' : null "
        class="cursor-pointer overflow-x w-full px-1 py-5 flex flex-col"
        @click="
          () => {
            handleAppication(item.id)
          }
        "
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
                {{ item.regId }}
              </div>
            </div>
            <div
              :class="item.adminStatus ? 'text-green-500' : 'text-red-600'"
              class="font-bold text-lg w-2/12"
            >
              {{ item.adminStatus ? 'Admitted' : 'Rejected' }}
            </div>
            <div class="w-2/12 flex gap-4">
              <button
                @click="
                  (e) => {
                    admitApplicant(e, item.id)
                  }
                "
                class="bg-green-400 rounded-md py-1 px-2 text-white text-lg"
              >
                Admit
              </button>
              <button
                @click="
                  (e) => {
                    rejectApplicant(e, item.id)
                  }
                "
                class="bg-red-400 rounded-md py-1 px-2 text-white text-lg"
              >
                Reject
              </button>
            </div>
          </div>

          <div
            :class="[item.isOpen ? 'block' : 'hidden', 'ml-11 text-gray-500']"
          >
            <div class="flex justify-between">
              <!-- credential  -->
              <div class="flex flex-col space-y-3 text-lg font-semibold">
                <div>Surname : {{ item.surname }}</div>
                <div>Middlename : {{ item.middlename }}</div>
                <div>Lastname : {{ item.lastname }}</div>
                <div>Course : {{ item.selectedCourse }}</div>
                <div>Nationality : {{ item.selectedCountry }}</div>
                <div>State : {{ item.selectedState }}</div>
                <div>LGA : {{ item.selectedLga }}</div>
                <div>Gender : {{ item.selectedGender }}</div>
              </div>
              <!-- passport  -->
              <div>
                <img
                  :src="item.passportUrl"
                  class="object-center h-52 w-52 object-contain"
                  alt=""
                />
              </div>
            </div>
            <span class='text-lg font-semibold'> Docs:</span>
            <div class="flex space-x-4">
              <div
                class="bg-blue-200 px-2 text-center rounded-2xl underline"
                @click="
                  (e) => {
                    showDoc(e, item.scert)
                  }
                "
              >
                SSCE
              </div>
              <div
                class="bg-blue-200 px-2 text-center rounded-2xl underline"
                @click="
                  (e) => {
                    showDoc(e, item.pcert)
                  }
                "
              >
                Pry Cert
              </div>
              <div
                class="bg-blue-200 px-2 text-center rounded-2xl underline"
                @click="
                  (e) => {
                    showDoc(e, item.bcert)
                  }
                "
              >
                Birth Cert
              </div>
              <div
                class="bg-blue-200 px-2 text-center rounded-2xl underline"
                @click="
                  (e) => {
                    showDoc(e, item.testimonial)
                  }
                "
              >
                Testimonial
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <RegistrarModal
      :modalImage="modalImage"
      v-if="showModal"
      :handleClose="handleClose"
    />
  </section>
</template>

<script>
export default {
  props: ['allCandidates'],
  data() {
    return {
      showModal: false,
      modalImage: 'hello',
      isActive: false,
      searchQuery: '',
      totalCandidates: this.allCandidates,
    }
  },

  computed: {
    resultQuery() {
      if (this.searchQuery && this.totalCandidates) {
        return this.totalCandidates.filter((item) => {
          return item.regId
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        })
      } else {
        return this.totalCandidates
      }
    },
  },
  created() {
    this.$store.dispatch('getAllCandidates')
  },
  methods: {
    handleAppication(id) {
      this.resultQuery.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen
          return true
        } else {
          item.isOpen = false
          return true
        }
      })
    },
    async admitApplicant(event, id) {
      event.stopPropagation()

      const ref = this.$fire.firestore.collection('users').doc(id)
      await ref
        .update({ adminStatus: true })
        .then(() => {
          this.$notify.success({
            title: 'Update Sucessfull',
            message: 'Applicant Admitted!',
          })
        })
        .catch((err) => console.log(err.message))
    },
    async rejectApplicant(event, id) {
      event.stopPropagation()

      const ref = this.$fire.firestore.collection('users').doc(id)
      await ref
        .update({ adminStatus: false })
        .then(() => {
          this.$notify.success({
            title: 'Update Sucessfull',
            message: 'Applicant Rejected!',
          })
        })
        .catch((err) => console.log(err.message))
    },
    showDoc(e, payload) {
      e.stopPropagation()
      this.modalImage = payload
      this.showModal = true
    },
    handleClose() {
      this.showModal = !this.showModal
    },
  },
}
</script>
