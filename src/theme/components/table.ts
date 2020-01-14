import { DefaultTheme } from '..';

const getTableTheme = (theme: DefaultTheme) => ({
  backgroundColor: {
    active: theme.palette.primary.shade1,
    hover: theme.palette.neutral.shade1,
    main: theme.palette.neutral.shade0,
  },
  boxShadow: theme.globals.boxShadow.narrow,
  color: {
    badge: theme.palette.neutral.shade3,
    contact: theme.palette.primary.shade4,
    error: theme.palette.danger.shade4,
    header: theme.palette.neutral.shade4,
    prefix: theme.palette.neutral.shade4,
    primary: theme.palette.neutral.shade9,
    secondary: theme.palette.neutral.shade5,
    tertiary: theme.palette.neutral.shade4,
  },
  fontSizes: {
    main: theme.typography.fontSize.small_5,
    small: theme.typography.fontSize.small_4,
    title: theme.typography.fontSize.medium_6,
  },
  rowHeight: '60px',
  tableBorder: `solid 1px ${theme.palette.neutral.shade2};`,
  tableRowAnimation: {
    entered: 'opacity: 1; transition: all 200ms ease-in',
    entering: 'opacity: 0.4; filter: grayscale(90%)',
  },
  tableSubRowAnimation: {
    entered: 'opacity: 1; transition: all 100ms 0ms ease-in; transform: none',
    entering: 'opacity: 0.01; transform: translateY(-3px)',
  },
});

export default getTableTheme;
