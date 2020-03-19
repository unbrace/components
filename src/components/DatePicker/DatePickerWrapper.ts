import styled from 'styled-components';

export default styled.div`
  .Range {
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
        background-color: ${props => props.theme.palette.primary.shade1}!important;
      }

      &.DayPicker-Day--selected {
        background-color: ${props => props.theme.palette.primary.shade1}!important;
        color: ${props => props.theme.palette.neutral.shade9}!important;
        border-radius: 0;
      }
      &.DayPicker-Day--today {
        color: ${props => props.theme.palette.primary.shade4};
      }
      &.DayPicker-Day--start,
      &.DayPicker-Day--end {
        background-color: ${props => props.theme.palette.primary.shade4}!important;
        color: white !important;
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
          background-color: ${props => props.theme.palette.primary.shade1}!important;
        }
      }
      &.DayPicker-Day--start::after {
        right: 0;
        left: unset;
      }
    }
  }
`;
