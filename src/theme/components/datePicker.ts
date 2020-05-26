import { DefaultTheme } from '..';

const getDatePickerTheme = (theme: DefaultTheme) => ({
  background: {
    overlay: theme.palette.neutral.shade0,
    range: {
      selectedDay: theme.palette.primary.shade1,
      startDay: theme.palette.primary.shade4,
    },
    day: {
      selectedDay: theme.palette.primary.shade4,
      hover: theme.palette.primary.shade1,
    },
  },
  border: {
    overlay: `1px solid ${theme.palette.neutral.shade3}`,
  },
  borderRadius: {
    range: {
      selectedDay: 0,
      startDay: '50% 0 0 50%',
      endDay: '0 50% 50% 0',
    },
    overlay: '5px',
  },
  borderSpacing: {
    main: '1px 3px',
  },
  boxShadow: {
    overlay: '5px 6px 10px rgba(0,0,0,0.04), 0px 1px 3px rgba(0,0,0,0.04)',
  },
  color: {
    range: {
      selectedDay: theme.palette.primary.shade7,
      selectedToday: theme.palette.primary.shade4,
      startDay: theme.palette.primary.shade1,
      disabled: theme.palette.neutral.shade3,
      outside: theme.palette.neutral.shade4,
    },
    day: {
      main: theme.palette.neutral.shade8,
      selectedDay: theme.palette.neutral.shade0,
      selectedToday: theme.palette.neutral.shade0,
      today: theme.palette.primary.shade4,
    },
    weekDay: theme.palette.neutral.shade4,
  },
  fontFamily: {
    main: theme.typography.fontFamily,
  },
});

export default getDatePickerTheme;
