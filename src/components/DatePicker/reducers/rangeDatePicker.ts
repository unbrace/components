import { DateRange } from '../RangeDatePicker';

type InitialState = {
  from: Date | undefined;
  to: Date | undefined;
  enteredTo: Date | undefined;
};

export const initialState = {
  from: undefined,
  to: undefined,
  enteredTo: undefined,
};

export const createInitialState = (date: DateRange | undefined) => ({
  from: date?.from,
  to: date?.to,
  enteredTo: undefined,
});

export const reducer = (state: InitialState, action: any): InitialState => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'FIRST_DAY_SET':
      return {
        ...initialState,
        from: action.payload,
      };
    case 'LAST_DAY_SET':
      return {
        ...state,
        to: action.payload,
        enteredTo: action.payload,
      };
    case 'DAY_ENTERED_SET':
      return {
        ...state,
        enteredTo: action.payload,
      };
    default:
      return state;
  }
};
