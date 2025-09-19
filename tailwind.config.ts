import type { Config } from 'tailwindcss'

export default {
content: ['./index.html', './src/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
base: '#0b0d12',
text: '#e5e7eb'
},
dropShadow: {
glow: '0 0 30px rgba(120, 190, 255, 0.35)'
},
}
},
plugins: []
} satisfies Config
