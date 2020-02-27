import { DefaultTheme } from '..';

const getTableTheme = (theme: DefaultTheme) => ({
  background: {
    main: theme.palette.neutral.shade0,
    hover: theme.palette.neutral.shade1,
    active: theme.palette.primary.shade1,
  },
  border: { main: `solid 1px ${theme.palette.neutral.shade2};` },
  color: {
    header: theme.palette.neutral.shade4,
    hover: theme.palette.primary.shade5,
    hoverInactive: theme.palette.neutral.shade3,
    cell: theme.palette.neutral.shade8,
  },
  fontSize: { main: theme.typography.fontSize.regular, cell: theme.typography.fontSize.small_5 },
  padding: { main: '10px 0px 10px 15px', end: '15px' },
  height: { row: '60px' },
});

export default getTableTheme;
