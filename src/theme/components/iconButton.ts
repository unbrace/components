import { DefaultTheme } from '..';

const getIconButtonTheme = (theme: DefaultTheme) => ({
  background: {
    hover: theme.palette.neutral.shade3,
  },
  color: {
    hover: theme.palette.neutral.shade9,
    isDisabled: theme.palette.neutral.shade4,
    normal: theme.palette.neutral.shade7,
  },
  margin: {
    main: '0 2px',
  },
  padding: { main: '5px 20px' },
  size: {
    button: '42px',
    icon: '26px',
  },
});

export default getIconButtonTheme;
