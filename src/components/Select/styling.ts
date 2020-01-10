import { StylesConfig } from 'react-select';
import { ComponentTheme } from '../../theme';

export const getSelectStyling = (theme: ComponentTheme, error?: string, isCapitalized?: boolean): StylesConfig => {
  const selectTheme = theme.select;

  return {
    // eslint-disable-next-line
    control: (provided: any, state: any) => {
      const { ...defaultStyles } = provided;

      return {
        ...defaultStyles,
        background: selectTheme.background.main,
        border: error ? selectTheme.border.error : state.isFocused ? selectTheme.border.focus : selectTheme.border.main,
        borderColor: selectTheme.borderColor.main,
        borderRadius: selectTheme.borderRadius.main,
        boxShadow: state.isFocused
          ? error
            ? selectTheme.boxShadow.focusError
            : selectTheme.boxShadow.focus
          : selectTheme.boxShadow.main,
        color: selectTheme.color.main,
        minHeight: selectTheme.minHeight.main,
        transition: selectTheme.transition.main,
      };
    },
    indicatorSeparator: () => ({
      display: 'none',
    }),
    // eslint-disable-next-line
    option: (provided: any, state: any) => {
      return {
        ...provided,
        background: state.isSelected
          ? selectTheme.background.active
          : state.isFocused
          ? selectTheme.background.focus
          : selectTheme.background.main,
        color: state.isSelected
          ? selectTheme.color.active
          : state.isDisabled
          ? selectTheme.color.disabled
          : selectTheme.color.main,
        cursor: state.isDisabled ? selectTheme.cursor.disabled : selectTheme.cursor.main,
        padding: selectTheme.padding.main,
        textTransform: isCapitalized ? 'capitalize' : 'inherit',
      };
    },
  };
};
