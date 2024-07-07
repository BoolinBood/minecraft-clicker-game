/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'accent-100': '#D1EAFD',
      'accent-200': '#A3D6FB',
      'accent-300': '#74C1F9',
      'accent-400': '#46ADF7',
      'accent-500': '#1898F5',
      'accent-600': '#137AC4',
      'accent-700': '#0E5B93',
      'accent-800': '#0A3D62',
      'accent-900': '#051E31',
      'secondary-100': '#C2CBD1',
      'secondary-200': '#A2AEB6',
      'secondary-300': '#82909B',
      'secondary-400': '#627380',
      'secondary-500': '#425665',
      'secondary-600': '#354551',
      'secondary-700': '#28343D',
      'secondary-800': '#1A2228',
      'secondary-900': '#0D1114',
      'primary-100': '#F3F5F7',
      'primary-200': '#E6EBEF',
      'primary-300': '#DAE2E7',
      'primary-400': '#CDD8DF',
      'primary-500': '#C1CED7',
      'primary-600': '#A3B0BA',
      'primary-700': '#85939C',
      'primary-800': '#1A2228',
      'primary-900': '#0D1114',
      'red-alert': '#EC3219'
    },
    fontFamily: {
      'segoe-ui': ['Segoe UI', 'Tahoma'],
      'istok': ["Istok Web", 'sans-serif']
    }
  },
  plugins: [],
}

