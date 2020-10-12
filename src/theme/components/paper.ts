import { DefaultTheme } from '../index';

const getPaperTheme = (theme: DefaultTheme) => ({
  animation: {
    entered: 'opacity: 1; transition: opacity 150ms 0ms ease-in, transform 100ms 50ms ease-in; transform: none',
    enteredInactive:
      'opacity: 0.3; transition: opacity 150ms 0ms ease-in, transform 100ms 50ms ease-in; transform: none',
    entering: 'opacity: 0.01; transform: translateY(-3px)',
  },
  backgroundColor: theme.palette.neutral.shade0,
  borderRadius: theme.globals.borderRadius,
  boxShadow: {
    inset: 'inset 0 11px 8px -10px rgba(0, 0, 0, 0.2), inset 0 -11px 8px -10px rgba(0, 0, 0, 0.2)',
    regular: '2px 6px 34px rgba(0,0,0,0.08), 1px 3px 6px rgba(0,0,0,0.04)',
  },
  mainInfo: {
    background: theme.palette.neutral.shade0,
    color: {
      header: theme.palette.neutral.shade9,
      link: theme.palette.primary.shade4,
      linkHover: theme.palette.primary.shade7,
      main: theme.palette.neutral.shade6,
    },
    fontSize: {
      main: theme.typography.fontSize.regular,
    },
    fontWeight: {
      header: 600,
      subHeader: 400,
    },
  },
  margin: '25px',
  padding: {
    horizontal: '40px',
    vertical: '35px',
  },
});

export default getPaperTheme;
