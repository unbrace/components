import { DefaultTheme } from '..';

const getSelectTheme = (theme: DefaultTheme) => ({
  background: {
    main: theme.palette.neutral.shade0,
    active: theme.palette.primary.shade1,
    focus: theme.palette.neutral.shade1,
  },
  border: {
    main: `1px solid ${theme.palette.neutral.shade3}`,
    error: `1px solid ${theme.palette.danger.shade3}`,
    focus: `1px solid ${theme.palette.primary.shade3}`,
  },
  borderColor: {
    main: 'none',
  },
  borderRadius: {
    main: '5px',
  },
  color: {
    main: theme.palette.neutral.shade8,
    active: theme.palette.primary.shade7,
    disabled: theme.palette.neutral.shade4,
  },
  cursor: {
    main: 'pointer',
    disabled: 'not-allowed',
  },
  boxShadow: {
    main: `inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    focus: `0px 1px 7px -1px ${theme.palette.primary.shade3}, inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    focusError: `0px 1px 7px -1px ${theme.palette.danger.shade3}, inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
  },
  height: {
    main: '40px',
  },
  padding: {
    main: '12px',
  },
  transition: {
    main: theme.globals.transition,
  },
});

export default getSelectTheme;
