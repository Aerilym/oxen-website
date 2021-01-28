module.exports = {
  theme: {
    screens: {
      // Constants taken from UI constants.
      // Think of them as 'beyond this breakpoint' when using
      // mobile:my-class, for example.
      // -> @media (min-width: {}px) { ... }
      mobile: '500px',
      tablet: '715px',
      desktop: '1100px',
    },
    fontFamily: {
      roboto: ['Roboto'],
      robotoslab: ['RobotoSlab'],
    },
    fontSize: {
      xs: ['.75rem'],
      sm: ['.875rem'],
      tiny: ['.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
      '6xl': ['4rem'],
      '7xl': ['5rem'],
      '8xl': ['6rem'],
      '9xl': ['7rem'],
    },
    extend: {
      colors: {
        primary: '#1F1C47',
        secondary: '#12C7BA',
        alt: '#DBF7F5',
        hyper: '#C3F53A',
        blush: '#FF7A87',
        blue: '#3F4BF5',
        purple: '#654192',
      },
      display: ['huge', 'desktop', 'tablet', 'mobile'],
      backgroundOpacity: {
        '10': '0.1',
      },
    },
  },
  variants: {
    borderWidth: ['children', 'children-last'],
    padding: ['children-odd', 'children-even'],
    margin: ['children-last'],
    fontWeight: ['children-last'],
  },
  plugins: [
    require('tailwindcss-children'),
    require('@tailwindcss/aspect-ratio'),
  ],
};