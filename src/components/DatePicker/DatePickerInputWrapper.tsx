import styled, { css } from 'styled-components';

type Props = {
  top: number;
  left: number;
  isOffScreen: boolean;
};

export default styled.div<Props>`
  ${({ top, left, isOffScreen }) => css`
    .DayPickerInput {
      display: block;
      position: relative;

      .unbrace_date-picker {
        position: fixed;
        z-index: 105;
        height: ${isOffScreen ? '416px' : 'auto'};
        top: ${top}px;
        left: ${left}px;
      }
    }
  `}
`;
