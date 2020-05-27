import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { datePicker } }) => css`
    &&&& {
      .unbrace_date-picker {
        background: ${datePicker.background.overlay};
        box-shadow: ${datePicker.boxShadow.overlay};
        border-radius: ${datePicker.borderRadius.overlay};
        border: ${datePicker.border.overlay};

        &.Range {
          .DayPicker-Month {
            border-collapse: separate;
            border-spacing: ${datePicker.borderSpacing.main};
          }

          .DayPicker-Day {
            &.DayPicker-Day--selected {
              color: ${datePicker.color.range.selectedDay};
              border-radius: ${datePicker.borderRadius.range.selectedDay};
              background-color: ${datePicker.background.range.selectedDay};

              &.DayPicker-Day--today {
                color: ${datePicker.color.range.selectedToday};

                &.DayPicker-Day--start,
                &.DayPicker-Day--end {
                  color: ${datePicker.color.range.startDay};
                }
              }
            }

            &.DayPicker-Day--start,
            &.DayPicker-Day--end {
              background-color: ${datePicker.background.range.startDay};
              color: ${datePicker.color.range.startDay};
              border-radius: ${datePicker.borderRadius.range.startDay};

              &:after {
                content: '';
                border-radius: 0;
                width: 50%;
                height: 100%;
                position: absolute;
                z-index: -1;
                left: 0;
                top: 0;
                background-color: ${datePicker.background.range.selectedDay};
              }
            }

            &.DayPicker-Day--end {
              border-radius: ${datePicker.borderRadius.range.endDay};
            }

            &.DayPicker-Day--start::after {
              right: 0;
              left: unset;
            }
          }
        }

        .DayPicker-Weekday {
          color: ${datePicker.color.weekDay};
        }

        .DayPicker-NavButton {
          &:focus {
            outline: none;
          }
        }

        .DayPicker-Month {
          border-collapse: separate;
          border-spacing: ${datePicker.borderSpacing.main};
        }

        .DayPicker-Day {
          font-family: ${datePicker.fontFamily.main};
          padding: 0.8rem;
          color: ${datePicker.color.day.main};

          &:focus {
            outline: none;
          }

          &:hover {
            background-color: ${datePicker.background.day.hover};
          }

          &.DayPicker-Day--selected {
            color: ${datePicker.color.day.selectedDay};
            background-color: ${datePicker.background.day.selectedDay};

            &.DayPicker-Day--today {
              color: ${datePicker.color.day.selectedToday};
            }
          }

          &.DayPicker-Day--disabled {
            color: ${datePicker.color.range.disabled};
            cursor: not-allowed;
          }

          &.DayPicker-Day--outside {
            color: ${datePicker.color.range.outside};
          }

          &.DayPicker-Day--today {
            color: ${datePicker.color.day.today};
          }
        }
      }
    }
  `}
`;
