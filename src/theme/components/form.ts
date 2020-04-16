import { DefaultTheme } from '..';

const getFormTheme = (theme: DefaultTheme) => ({
  checkbox: {
    border: `2px solid ${theme.palette.neutral.shade2}`,
    borderRadius: '3px',
    checkedColor: theme.palette.primary.shade4,
  },
  inlineLabel: {
    color: {
      close: theme.palette.neutral.shade5,
      closeActive: theme.palette.primary.shade4,
      labelText: theme.palette.neutral.shade4,
    },
    fontWeight: {
      labelText: '400',
    },
  },
  input: {
    animation: {
      entered: 'opacity: 1; transition: all 100ms 0ms ease-in; transform: none',
      entering: 'opacity: 0.01; transform: translateY(-3px)',
    },
    background: theme.palette.neutral.shade0,
    backgroundDisabled: theme.palette.neutral.shade1,
    border: `1px solid ${theme.palette.neutral.shade3}`,
    borderError: `1px solid ${theme.palette.danger.shade3}`,
    borderFocus: `1px solid ${theme.palette.primary.shade3}`,
    borderRadius: '5px',
    boxShadow: `inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    boxShadowFocus: `0px 1px 7px -1px ${theme.palette.primary.shade3}, inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    boxShadowFocusError: `0px 1px 7px -1px ${theme.palette.danger.shade3}, inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    color: theme.palette.neutral.shade8,
    colorPlaceholder: theme.palette.neutral.shade4,
    errorColor: theme.palette.danger.shade4,
    margin: '8px 0 25px',
    padding: '10px 15px',
    transition: theme.globals.transition.main,
  },
});

export default getFormTheme;
