import { useFocus } from '@unbrace/hooks';
import * as React from 'react';
import SelectComp, { Props as ReactSelectProps, StylesConfig } from 'react-select';
import Async from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import { ThemeContext } from 'styled-components';
import { getSelectStyling } from './styling';
import { Overwrite } from '../../utils/typescript';

type Props<T> = Overwrite<
  ReactSelectProps<T>,
  {
    error?: string;
    name?: string;
    options?: T[];
    isCreatable?: boolean;
    autoFocus?: boolean;
    isCapitalized?: boolean;
  }
>;

const Select = <T extends {}>({ options, async, isCreatable, loadOptions, defaultOptions, ...props }: Props<T>) => {
  const theme = React.useContext(ThemeContext);
  const autoFocusRef = useFocus();
  const customStyles: StylesConfig = getSelectStyling(theme, props.error, props.isCapitalized);

  return async ? (
    <Async
      cacheOptions
      defaultOptions={defaultOptions ?? true}
      loadOptions={loadOptions}
      styles={customStyles}
      ref={props.autoFocus ? autoFocusRef : undefined}
      {...props}
    />
  ) : isCreatable ? (
    <CreatableSelect
      styles={customStyles}
      options={options}
      ref={props.autoFocus ? autoFocusRef : undefined}
      {...props}
    />
  ) : (
    <SelectComp styles={customStyles} options={options} ref={props.autoFocus ? autoFocusRef : undefined} {...props} />
  );
};

export default Select;
