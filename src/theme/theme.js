export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
    },
  },
  breakpoints : ["768px", "992px", "1280px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],  
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',        
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  h1: {
    variant: 'text.heading',
    fontSize: 5,
  },
  h2: {
    variant: 'text.heading',
    fontSize: 4,
  },
  h3: {
    variant: 'text.heading',
    fontSize: 3,
  },
  h4: {
    variant: 'text.heading',
    fontSize: 2,
  },
  h5: {
    variant: 'text.heading',
    fontSize: 1,
  },
  h6: {
    variant: 'text.heading',
    fontSize: 0,
  },
  
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',      
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  }
  
}
