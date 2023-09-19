import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'onepiece': "url('https://images.pling.com/img/00/00/54/79/69/1388992/157d90f73ac284b0eb9a4484b379f86ae7b4.jpg')",
        'gomugomu' :"url('https://i.pinimg.com/564x/9e/cf/8d/9ecf8de6510431653178a56754417e23.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
