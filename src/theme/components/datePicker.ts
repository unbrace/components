import { DefaultTheme } from '..';

const getDatePickerTheme = (theme: DefaultTheme) => ({
  background: {
    range: {
      selectedDay: theme.palette.primary.shade1,
      startDay: theme.palette.primary.shade4,
    },
    day: {
      selectedDay: theme.palette.primary.shade4,
      hover: theme.palette.primary.shade1,
    },
  },
  borderRadius: {
    range: {
      selectedDay: 0,
      startDay: '50% 0 0 50%',
      endDay: '0 50% 50% 0',
    },
  },
  borderSpacing: {
    main: '1px 3px',
  },
  color: {
    range: {
      selectedDay: theme.palette.primary.shade7,
      selectedToday: theme.palette.primary.shade4,
      startDay: theme.palette.primary.shade1,
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
