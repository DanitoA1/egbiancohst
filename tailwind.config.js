/*eslint-disable */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A369D',
        'dark-500': '#4F4F4F',
        'dark-700': '#828282',
        'icon-container': '#DFDFFF',
        'hod' : '#FFF2EB',
        'provost' : '#FFE7E8',
        'prof' : '#D3E0FF',
        'admin' : '#FFF6D8',
        'treaurer' : '#DBFFE2',
        'janitor' : '#E6FEFF',
        'light-blue': '#EFF8FF        ',
        'gallery' :  'rgba(247, 247, 247, 0.68)',
        'profile-blue' : '#1343B4',
        'reg-blue' : '#E2F6FE',
        'adm-purple' : '#E5EBFF',
        'acc-yellow' : '#FFF6DB'
        
      },
      height: {
        '827': '827px',
        '330' : '330px'
      },
      margin: {
        '18': '70px',
      },
      width: {
        '45': '45%',
        '70px': '70px',
        '55': '55%',
        '96': '96%',
        '330' : '330px',
        '5xl' : '1000px',
        '95' :  '95%' 
         },
      padding: {
        '22' : '90px'
      },
      borderRadius : {
        '4px' : '4px'
      }

    },

  },
  plugins: [],
}