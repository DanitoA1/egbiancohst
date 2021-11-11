<template>
  <div>
    <BaseAppHeader />
    <div class="container w-1/2 my-10 mx-auto">
      <div class="flex justify-center items-center">
        <div class="text-gray-700 font-bold text-center">
          <p>Get In Touch</p>
          <p class="text-blue-500 text-md font-medium mt-3">
            Any question or remark just give us a call
          </p>

          <div class="flex justify-center space-x-14 my-10 text-dark-blue">
            <div
              v-for="(tab, idx) in tabs"
              :key="idx"
              @click="handleContact(`${tab.name}`)"
              :class="[
                activeTab === `${tab.name}`
                  ? 'bg-dark-blue text-white '
                  : 'bg-blue-200 ',
                'h-20 w-24 flex flex-col items-center justify-center rounded-sm flex-wrap space-y-2 cursor-pointer transform hover:scale-110 transition-all',
              ]"
            >
              <font-awesome-icon
                :icon="['fa', `${tab.icon}`]"
                :class="[
                  activeTab === `${tab.name}` ? 'text-white' : 'text-dark-blue ',
                  'h-6 w-6',
                ]"
              />
              <p class="text-xs"> {{ tab.title }} </p>
            </div>
          </div>
          <ContactMail v-if="activeTab === 'mail'" />
          <ContactPhone v-if="activeTab === 'phone'" />
          <ContactMap v-if="activeTab === 'address'" />
        </div>
      </div>
    </div>
    <BaseAppFooter />

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'mail',
      tabs: [
        { name: 'mail', title: 'hello@egbian .edu.ng', icon: 'envelope' },

        { name: 'phone', title: '091234567890', icon: 'phone-alt' },

        {
          name: 'address',
          title: 'Minna, Niger State',
          icon: 'map-marker-alt',
        },
      ],
    }
  },

  methods: {
    handleContact(paylaod) {
      if (paylaod === 'mail') {
        this.activeTab = 'mail'
      } else if (paylaod === 'phone') {
        this.activeTab = 'phone'
      } else this.activeTab = 'address'
    },
  },
}
</script>

<style scoped></style>
