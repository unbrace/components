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
    left: '2px 0px 7px rgba(0, 0, 0, 0.03), 40px 0px 30px rgba(0, 0, 0, 0.01)',
    right: '-2px 0px 7px rgba(0, 0, 0, 0.03), -40px 0px 30px rgba(0, 0, 0, 0.01)',
  },
  padding: {
    main: '16px 0',
    header: '0 16px 0 24px',
  },
  transition: {
    left: 'left 0.2s cubic-bezier(0.67, 0.49, 0.15, 0.82)',
    right: 'right 0.2s cubic-bezier(0.67, 0.49, 0.15, 0.82)',
  },
  width: {
    open: '320px',
  },
  zIndex: {
    main: 1000,
  },
});

export default getDrawerTheme;
