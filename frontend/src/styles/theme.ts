export const theme = {
  colors: {
    // Cores principais
    primary: '#393F50',
    primaryDark: '#2D3240',
    secondary: '#435892',
    background: '#F2EEE7',
    backgroundLight: '#F8F6F2',
    backgroundAlt: '#FFFFFF',
    accent: '#D4C4A9',
    white: '#FFFFFF',

    // Cores de texto
    text: '#393F50',
    textLight: '#6B7280',
    textDark: '#1F2937',

    // Cores de estado
    error: '#DC2626',
    success: '#059669',
    warning: '#D97706',
    info: '#2563EB',
    disabled: '#E5E7EB',

    // Cores de borda
    border: '#E5E7EB',
    borderDark: '#D1D5DB',
    borderLight: '#F3F4F6'
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
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    pill: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};
