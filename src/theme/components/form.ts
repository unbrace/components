import { DefaultTheme } from '..';

const getFormTheme = (theme: DefaultTheme) => ({
  border: {
    checkbox: `2px solid ${theme.palette.neutral.shade2}`,
    input: {
      main: `1px solid ${theme.palette.neutral.shade3}`,
      error: `1px solid ${theme.palette.danger.shade3}`,
      focus: `1px solid ${theme.palette.primary.shade3}`,
    },
    toggle: {
      off: `2px solid ${theme.palette.neutral.shade2}`,
      on: `2px solid ${theme.palette.primary.shade4}`,
    },
  },
  borderRadius: {
    checkbox: '3px',
    input: '5px',
    toggle: {
      inner: '50%',
      outer: '17px',
    },
  },
  boxShadow: {
    main: `inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    focus: `1px solid ${theme.palette.primary.shade3}`,
    focusError: `0px 1px 7px -1px ${theme.palette.danger.shade3}, inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
  },
  color: {
    checkbox: {
      checked: theme.palette.primary.shade4,
    },
    input: {
      main: theme.palette.neutral.shade8,
      placeholder: theme.palette.neutral.shade4,
      error: theme.palette.danger.shade4,
      labelInline: theme.palette.neutral.shade5,
    },
  },
  animation: {
    input: {
      entered: 'opacity: 1; transition: all 100ms 0ms ease-in; transform: none',
      entering: 'opacity: 0.01; transform: translateY(-3px)',
    },
  },
  background: {
    main: theme.palette.neutral.shade0,
    disabled: theme.palette.neutral.shade1,
    toggle: {
      off: theme.palette.neutral.shade3,
      on: theme.palette.primary.shade4,
    },
  },
  height: {
    input: '40px',
    toggle: {
      inner: '20px',
      outer: '32px',
    },
  },
  width: {
    toggle: '64px',
  },
  margin: {
    main: '8px 0 25px',
  },
  padding: {
    main: '10px 15px',
  },
  left: {
    label: {
      absolute: '15px',
    },
  },
  top: {
    label: {
      absolute: '17px',
    },
  },
  transition: {
    main: theme.globals.transition.main,
  },
});

export default getFormTheme;
