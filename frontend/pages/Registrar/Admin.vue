<template>
  <div class="mx-auto container w-11/12">
      <RegistrarModal v-if="showModal" />
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
    <div class="flex justify-between my-2">
      <div class="bg-dark-blue rounded-lg p-3 text-white text-lg">
        <font-awesome-icon
          :icon="['fas', `user`]"
          class="w-6 mr-4 text-white h-6"
        />
        <span
          >{{ getCurrentAdmin }}
        </span>
      </div>
      <div>
        <button
          class="
            bg-dark-blue
            text-white text-center
            overflow-ellipsis
            border
            outline-none
            border-gray-300
            font-bold
            rounded-lg
            p-3
          "
          @click="signOut"
        >
          <font-awesome-icon
            :icon="['fas', `power-off`]"
            class="w-6 text-white h-6 mr-4"
          />
          Sign Out
        </button>
      </div>
    </div>
    <div class="my-4 grid grid-cols-3 gap-6">
      <div
        v-for="(item, idx) in applicants"
        :key="idx"
        class="
          stat-box
          p-8
          my-5
          rounded-xl
          transition-all
          cursor-pointer
          transform
          hover:-translate-y-2
          duration-300
          bg-blue-100
          max-w-lg
          shadow-lg
        "
      >
        <div class="stat-icon flex flex-col space-y-6">
          <div class="text-2xl text-blue-500 font-semibold">
            Total Number of {{ item.status }}
          </div>
          <div
            :class="item.bg"
            class="rounded-full w-8 h-8 p-4 grid place-content-center"
          >
            <font-awesome-icon
              :icon="['fas', `${item.icon}`]"
              class="w-10 text-white h-10"
            />
          </div>

          <div class="text-2xl text-blue-500 font-semibold">
            {{ item.count }}
          </div>
        </div>
      </div>
    </div>

    <RegistrarTable
      :getCurrentCandidate="getCurrentCandidate"
      :allCandidates="allCandidates"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {


  data() {
    return {
         showModal: false,
      admin: 'Admin',
      applicants: [
        {
          status: 'Applicants',
          count: 0,
          icon: 'user',
          bg: 'bg-purple-400',
        },
        {
          status: 'Admitted ',
          count: 0,
          icon: 'check-circle',
          bg: 'bg-green-300',
        },
        {
          status: 'Rejected ',
          count: 0,
          icon: 'ban',
          bg: 'bg-red-300',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getCurrentCandidate']),
    ...mapState(['allCandidates']),
    getAdmittedCandidates() {
      return this.allCandidates.filter((item) => item.adminStatus)
    },
    getRejectedCandidates() {
      return this.allCandidates.filter((item) => !item.adminStatus )
    },
    getCurrentAdmin(){
      return this.$fire.auth.currentUser ? this.$fire.auth.currentUser.email : 'Admin'
    }
  },
  created() {
    this.$store.dispatch('getAllCandidates')
    this.applicants[0].count = this.allCandidates
      ? this.allCandidates.length
      : 0
    this.applicants[1].count = this.getAdmittedCandidates
      ? this.getAdmittedCandidates.length
      : 0
    this.applicants[2].count = this.getRejectedCandidates
      ? this.getRejectedCandidates.length
      : 0

  },

  methods: {
    async signOut() {
      await this.$fire.auth.signOut().then((ref) => {
        this.$notify.success({
          title: 'Logout Sucessfull',
          message: 'Bye. Later!',
        })
      })

      this.$router.push('/registrar/login')
    },
  },
}
</script>

<style></style>
