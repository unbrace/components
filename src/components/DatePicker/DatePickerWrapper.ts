import styled from 'styled-components';

export default styled.div`
  &&&& {
    .unbrace_date-picker {
      &.Range {
        .DayPicker-Day {
          &.DayPicker-Day--selected {
            color: ${props => props.theme.palette.neutral.shade9};
            border-radius: 0;
            background-color: ${props => props.theme.palette.primary.shade1};
          }
          &.DayPicker-Day--start,
          &.DayPicker-Day--end {
            background-color: ${props => props.theme.palette.primary.shade4};
            color: white;
            border-radius: 50%;

            &:after {
              content: '';
              border-radius: 0;
              width: 50%;
              height: 100%;
              position: absolute;
              z-index: -1;
              left: 0;
              top: 0;
              background-color: ${props => props.theme.palette.primary.shade1};
            }
          }

          &.DayPicker-Day--start::after {
            right: 0;
            left: unset;
          }
        }
      }
      .DayPicker-NavButton {
        &:hover {
          color: ${props => props.theme.palette.primary.shade4};
        }
        &:focus {
          outline: none;
        }
      }
      .DayPicker-Month {
        border-collapse: separate;
        border-spacing: 0 3px;
      }

      .DayPicker-Day {
        font-family: Helvetica, Arial, sans-serif;
        padding: 0.8rem;
        color: ${props => props.theme.palette.neutral.shade8};

        &:focus {
          outline: none;
        }

        &:hover {
          background-color: ${props => props.theme.palette.primary.shade1};
        }

        &.DayPicker-Day--selected {
          color: ${props => props.theme.palette.neutral.shade0};
          background-color: ${props => props.theme.palette.primary.shade4};
          &.DayPicker-Day--today {
            color: ${props => props.theme.palette.neutral.shade0};
          }
        }

        &.DayPicker-Day--today {
          color: ${props => props.theme.palette.primary.shade4};
        }
      }
    }
  }
`;
