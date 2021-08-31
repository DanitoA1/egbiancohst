<template>
  <div>
    <BaseAppHeader />
    <div class="container w-11/12 mx-auto mb-12">
      <div
        class="
          my-16
          text-dark-blue
          font-semibold
          text-2xl
        w-1/2
        mx-auto
        "
      >
        Frequently Asked Questions (FAQ)
      </div>
      <div
        v-for="faq in faqArray"
        :key="faq.id"
        class="
          cursor-pointer
          mx-auto
          py-5
          border-gray-500 border-b
          flex
          items-center
          flex-col
        "
        @click="() => handleActiveFaq(faq.id)"
      >
        <div class="w-1/2 ">
          <div class="text-black mb-2 flex">
            <div v-if="faq.isOpen">
              <svg-icon name="expand-button" class="h-6 w-6"></svg-icon>
            </div>
            <div v-else>
              <svg-icon name="collapse-button" class="h-6 w-6"></svg-icon>
            </div>

            <div class="ml-5 text-gray-900 text-xl font-medium">
              {{ faq.question }}
            </div>
          </div>
          <div
            :class="[faq.isOpen ? 'block' : 'hidden', 'ml-11 text-gray-500']"
          >
            {{ faq.answer }}
          </div>
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
      isActive: false,
      faqArray: [
        {
          id: 1,
          question: 'Where is Egbian College of Science and Technology?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 2,
          question: 'When is the admission coming out?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 3,
          question: 'How much is the admission form?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
        {
          id: 4,
          question: 'Do I need JAMB to apply?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, commodo id eros, adipiscing est venenati s velit lorem. Mauris integer feugiat dolor sceleris que porttitor sagittis senectus commodo habitas se. Consequat netus commodo massa urna, vulpu tate pellentesque ultrices rhoncus rutrum. Nam eni m vestibulum blandit neque morbi.',
          isOpen: false,
        },
      ],
    }
  },
  methods: {
    handleActiveFaq(id) {
      this.faqArray.map((faq) => {
        if (faq.id === id) {
          faq.isOpen = !faq.isOpen
          return true
        } else {
          faq.isOpen = false
          return true
        }
      })
    },
  },
}
</script>

<style scoped></style>
