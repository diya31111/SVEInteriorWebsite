
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
        'blush': 'var(--bg-blush)',
        'rose': 'var(--bg-rose)',
        'footer': 'var(--bg-footer)', 
        'heading': 'var(--text-heading)',
        'body-text': 'var(--text-body)',
        'white-text': 'var(--text-white)',
        'gold': 'var(--accent-gold)',
        'cta': 'var(--accent-cta)',
        'soft-border': 'var(--border-soft)',
        
        // Backward compatibility mappings (to be phased out or refactored)
        'dusty-rose': 'var(--bg-blush)', // Mapping old 'dusty-rose' to new 'blush' (Hero bg)
        'warm-mocha': 'var(--text-heading)', // Mapping old heading to new heading
        'soft-taupe': 'var(--bg-rose)', // Mapping old secondary bg to new 'rose'
        'champagne-gold': 'var(--accent-gold)',
        'dark-charcoal': 'var(--text-body)',
        'muted-brown': 'var(--text-body)',
        'rich-charcoal': 'var(--bg-blush)',
        'light-gold': '#F2D675',      
        'deep-black': '#2E1A20'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
