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
    button: {
      large: '50px',
      main: '42px',
      small: '34px',
    },
    icon: {
      large: '32px',
      main: '26px',
      small: '20px',
    },
  },
});

export default getIconButtonTheme;
