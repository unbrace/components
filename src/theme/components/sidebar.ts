import { DefaultTheme } from '../index';

const getSidebarTheme = (theme: DefaultTheme) => ({
  animation: {
    main: {
      entered: 'opacity: 1; transition: opacity 200ms 50ms, transform 200ms 0ms ease-in; transform: none',
      entering: 'opacity: 0.01; transform: scale(0.99)',
    },
  },
  background: {
    main: theme.palette.neutral.shade0,
  },
  border: {
    right: `solid 2px ${theme.palette.neutral.shade2}`,
  },
  color: {
    loading: theme.palette.neutral.shade4,
  },
  width: {
    huge: '320px',
    large: '260px',
  },
});

export default getSidebarTheme;
