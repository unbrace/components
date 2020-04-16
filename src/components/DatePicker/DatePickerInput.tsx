import * as React from 'react';
import DatePickerInputComponent from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps, DayModifiers, DateUtils } from 'react-day-picker';
import { Input } from '../Form/Input';
import DatePickerWrapper from './DatePickerWrapper';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

type Props = {
  onChange?: (day: Date | undefined) => void;
} & DayPickerInputProps;

const parseDate = (str: string, format: string, locale: string) => {
  const parsed = dateFnsParse(str, format, new Date(), ({ locale } as unknown) as { locale: Locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }

  return undefined;
};

const formatDate = (date: Date, format: string, locale: string) =>
  dateFnsFormat(date, format, ({ locale } as unknown) as { locale: Locale });

const FORMAT = 'dd/MM/yyyy';
const PLACEHOLDER = 'DD/MM/YYYY';

const DatePickerInput: React.FC<Props> = ({ onChange, ...props }: Props) => {
  const handleDaySelect = (day: Date, { selected }: DayModifiers) => {
    onChange?.(selected ? undefined : day);
  };

  return (
    <DatePickerInputComponent
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      placeholder={PLACEHOLDER}
      component={Input}
      overlayComponent={DatePickerWrapper}
      {...props}
      dayPickerProps={{
        className: `unbrace_date-picker`,
        onDayClick: handleDaySelect,
        ...props.dayPickerProps,
      }}
    />
  );
};

export default DatePickerInput;
