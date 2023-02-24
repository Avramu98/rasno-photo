/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '400px',
            md: '768px',
            lg: '976px',
            xl: '1240px',
            '2xl': '1496px',
        },
        extend: {
            fontFamily: {
                poppins: ['var(--poppins-font)', ...fontFamily.sans],
                polaroid: ['var(--marker-font)', ...fontFamily.sans],
                prompt: ['var(--prompt-font)', ...fontFamily.sans],
            },
            colors: {
                primary: '#28282B',
                'primary-light': '#8ECAE6',
                divider: '#343438',
                secondary: '#023047',
                accent: '#FB8500',
                'accent-light': '#FFB703',
            },
            backgroundImage: {
                'cms': "url('/static/background-3.webp')"
            }
        },
    },
    plugins: [],
}
