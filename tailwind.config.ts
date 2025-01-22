
import typography from '@tailwindcss/typography';
const colors = {
    'primary': '#421BDD',
    'secondary' : '#821BDE',
    'danger': '#e74c3c',
    'black': '#12161C',
    // 'black': '#09090b',
    'white': '#fafafa',
    'dark': '#12161C',
}

/** @type {import('tailwindcss').Config} */
export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/rael-ui/dist/*"],
        darkMode: ['selector'],
        theme: {
            extend: {
                typography : {
                    DEFAULTS: {
                        
                    }
                },
                colors: {
                    'dark': colors.dark,
                    'danger' : colors.danger,
                    primary : {
                        DEFAULT : colors.primary, 
                        100 : 'hsl(var(--color-primary-100))',
                        80 : 'hsl(var(--color-primary-80))',
                    },
                    secondary: {
                        DEFAULT : colors.secondary,
                        100 : 'hsl(var(--color-secondary-100))',
                    },
                    white : {
                        DEFAULT : colors.white,
                        100 : 'hsl(var(--color-white-100))',
                        80 : 'hsl(var(--color-white-80))',
                    },
                    black : {
                        DEFAULT : colors.black,
                        100 : 'hsl(var(--color-black-100))',
                        80 : 'hsl(var(--color-black-80))',
                    },
                    'neutral-light' : {
                        100 : 'hsl(var(--color-neutral-light-100))',
                        80 : 'hsl(var(--color-neutral-light-80))',
                        60 : 'hsl(var(--color-neutral-light-60))',
                    },
                    'neutral-dark' : {
                        100 : 'hsl(var(--color-neutral-dark-100))',
                        80 : 'hsl(var(--color-neutral-dark-80))',
                        60 : 'hsl(var(--color-neutral-dark-60))',
                        40 : 'hsl(var(--color-neutral-dark-40))',
                    },
                    
                },
                fontSize: {
                    'big-title' : ['64px', '96px'],
                    title : ['24px', '36px'],
                    subtitle : ['20px', '30px'],
                    lead : ['18px', '27px'],
                    base : '16px',
                    small : '14px',
                    'small-2' : '12px',
                    "button": "17px",
                },
                fontFamily: {
                    sans: ['SchibsetGrotesk'],
                    md: ['SchibsetGroteskMd'],
                    semibold: ['SchibsetGroteskSemibold'],
                    bold: ['SchibsetGroteskBold'],
                },
                animation: {
                    'slide-in': 'slide-in 0.3s ease-out forwards',
                    'slide-out': 'slide-out 0.3s ease-out forwards',
                },

            },
        },
        plugins: [
            typography
        ],
    };
