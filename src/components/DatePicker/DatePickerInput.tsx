import * as React from 'react';
import DayPickerInputComponent from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps, DayModifiers, DateUtils } from 'react-day-picker';
import Input from '../Form/Input';
import DatePickerWrapper from './DatePickerWrapper';
import DatePickerInputWrapper from './DatePickerInputWrapper';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { debounce } from 'ts-debounce';
import styled from 'styled-components';
import { Close } from '../icons';

const InputWithRightPadding = styled(Input)`
  padding: 10px 30px 10px 15px;
`;

type Props = {
  onChange?: (day: Date | undefined) => void;
  passableRef?: React.MutableRefObject<DayPickerInputComponent>;
  ref?: React.MutableRefObject<DayPickerInputComponent>;
  inputDebounceTimeOut?: number;
  onClear?: () => void;
} & Omit<DayPickerInputProps, 'onChange'>;

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

const DatePickerInput: React.FC<Props> = ({ onChange, ref, passableRef, inputDebounceTimeOut, ...props }: Props) => {
  const [rect, setRect] = React.useState({ top: 0, left: 0, isOffScreen: false });
  const [value, setValue] = React.useState<Date | string>('');
  const wrapRef = React.useRef<HTMLDivElement>(null);
  let triggeredBySelect = false;
  const handleDaySelect = (day: Date, { selected }: DayModifiers) => {
    onChange?.(selected ? undefined : day);
    // This will make sure the onChange isn't called twice when selecting a day,
    // since that will also trigger the onDayChange event
    triggeredBySelect = true;
    setTimeout(() => (triggeredBySelect = false), 100);
  };

  const debouncedOnChange = debounce((day: Date | undefined) => {
    onChange?.(day);
  }, inputDebounceTimeOut || 800);

  const handleDayChange = React.useCallback(
    (day: Date | undefined, _modifiers: DayModifiers, dayPickerInput: DayPickerInputComponent) => {
      const input = dayPickerInput.getInput();
      const isEmpty = !input.value.trim();
      setValue(day || '');
      if ((typeof day !== 'undefined' || isEmpty) && !triggeredBySelect) {
        debouncedOnChange(day);
      }
      console.log(day, dayPickerInput);
    },
    [debouncedOnChange, triggeredBySelect],
  );

  const clear = () => {
    setValue('');
    debouncedOnChange(undefined);
  };

  const setPosition = () => {
    if (wrapRef.current) {
      const clientRect = wrapRef.current.querySelector('input')?.getBoundingClientRect();
      if (clientRect) {
        const HEIGHT = 416;
        const WIDTH = 358;
        const GUTTER = 8;
        const isOffScreenPlacedBelow = clientRect.bottom + HEIGHT > document.body.clientHeight;
        const isOffScreenPlacedOnTop = clientRect.top - HEIGHT - GUTTER < 0;
        const isOffScreenPlacedRight = clientRect.right + WIDTH + GUTTER > document.body.clientWidth;

        setRect({
          top: isOffScreenPlacedBelow
            ? isOffScreenPlacedOnTop
              ? GUTTER
              : clientRect.top - HEIGHT - GUTTER
            : clientRect.bottom + GUTTER,
          left:
            isOffScreenPlacedBelow && isOffScreenPlacedOnTop
              ? isOffScreenPlacedRight
                ? clientRect.left - WIDTH - GUTTER
                : clientRect.right + GUTTER
              : clientRect.left,
          isOffScreen: isOffScreenPlacedBelow,
        });
      }
    }
  };

  React.useEffect(() => {
    setPosition();
  }, []);

  const withValueStateProps = props.onClear ? undefined : { value };

  return (
    <DatePickerInputWrapper ref={wrapRef} top={rect.top} left={rect.left} isOffScreen={rect.isOffScreen}>
      <RelativeContainer>
        <DayPickerInputComponent
          ref={ref || passableRef}
          formatDate={formatDate}
          format={props.format || FORMAT}
          parseDate={parseDate}
          placeholder={props.placeholder || PLACEHOLDER}
          component={InputWithRightPadding}
          onDayPickerShow={setPosition}
          overlayComponent={DatePickerWrapper}
          onDayChange={handleDayChange}
          {...props}
          dayPickerProps={{
            className: `unbrace_date-picker`,
            onDayClick: handleDaySelect,
            showOutsideDays: true,
            ...props.dayPickerProps,
          }}
          {...withValueStateProps}
        />
        <ClearButton onClick={props.onClear || clear} />
      </RelativeContainer>
    </DatePickerInputWrapper>
  );
};

export default DatePickerInput;

const ClearButton = styled(Close)`
  position: absolute;
  top: 19px;
  right: 10px;
  cursor: pointer;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

const RelativeContainer = styled.div`
  position: relative;
`;
