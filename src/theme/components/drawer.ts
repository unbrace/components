import { DefaultTheme } from '..';

const getDrawerTheme = (theme: DefaultTheme) => ({
  background: {
    main: theme.palette.neutral.shade0,
  },
  border: {
    main: `2px solid ${theme.palette.neutral.shade2}`,
    header: `1px solid ${theme.palette.neutral.shade2}`,
  },
  color: {
    header: theme.palette.neutral.shade8,
  },
  boxShadow: {
    main: `inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
  },
  padding: {
    main: '16px 0',
    header: '0 16px',
  },
  transition: {
    main: 'left 0.2s cubic-bezier(0.67, 0.49, 0.15, 0.82)',
  },
  width: {
    open: '320px',
  },
  zIndex: {
    main: 1000,
  },
});

export default getDrawerTheme;
