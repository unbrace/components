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
    bottomSearch: `solid 2px ${theme.palette.neutral.shade2}`,
    radiusCount: theme.globals.borderRadius.small,
  },
  color: {
    loading: theme.palette.neutral.shade4,
    searchWrap: theme.palette.neutral.shade3,
    searchInput: theme.palette.neutral.shade8,
  },
  fontSize: {
    search: theme.typography.fontSize.small_5,
  },
  fill: {
    search: theme.palette.neutral.shade4,
  },
  width: {
    huge: '320px',
    large: '260px',
  },
  countComponent: {
    fontSize: theme.typography.fontSize.small_4,
    color: theme.palette.neutral.shade4,
    background: theme.palette.neutral.shade0,
  },
});

export default getSidebarTheme;
