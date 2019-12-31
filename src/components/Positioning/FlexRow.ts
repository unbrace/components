import styled, { css } from 'styled-components';
import { FlexValues } from './types';

const FlexRow = styled.div<{ justifyContent?: FlexValues; alignItems?: FlexValues; small?: boolean }>`
  display: flex;
  ${props => !props.small && `flex-basis: 100%;`};
  max-width: 100%;
  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

export default FlexRow;
