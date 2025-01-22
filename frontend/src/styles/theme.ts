export const theme = {
  colors: {
    primary: '#393F50',    // cinza azulado escuro
    secondary: '#435892',  // azul médio
    background: '#F2EEE7', // off-white
    accent: '#D4C4A9',     // bege mais claro (atualizado do #BCAA8A)
    white: '#FFFFFF',
    text: {
      primary: '#393F50',
      secondary: '#435892',
      light: '#F2EEE7'
    }
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Playfair Display', serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}
