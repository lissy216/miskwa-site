import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Shadow register
        night: '#0A0A0A',
        charcoal: '#141414',
        ash: '#2A2420',
        // Bridge / warm accent
        glow: '#D4A853',
        sun: '#C49A3C',
        'golden-grass': '#A07828',
        bridge: '#B8864E',
        // Light register
        bone: '#E8DFD0',
        mist: '#F2EDE4',
        parchment: '#F5F0E6',
        // Ember / heartfire accent
        ember: '#8B2500',
        heartfire: '#C43A1A',
        // Cool accent (restrained)
        river: '#5A8A8F',
        'deep-teal': '#3A6A70',
      },
      fontFamily: {
        display: ['Cinzel', 'Trajan Pro', 'serif'],
        serif: ['Lora', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Crimson Pro', 'Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['4.25rem', { lineHeight: '1.1', letterSpacing: '0.08em' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '0.06em' }],
        'heading': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.04em' }],
        'subheading': ['1.75rem', { lineHeight: '1.3' }],
        'body-lg': ['1.3125rem', { lineHeight: '1.75' }],
        'body': ['1.1875rem', { lineHeight: '1.75' }],
        'caption': ['1rem', { lineHeight: '1.6' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section': '8rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        'prose': '42rem',
        'content': '72rem',
      },
    },
  },
  plugins: [],
}

export default config
