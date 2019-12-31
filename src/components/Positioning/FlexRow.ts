import styled, { css } from 'styled-components';
import { FlexValues } from './types';

type Props = {
  alignItems?: FlexValues;
  isSmall?: boolean;
  justifyContent?: FlexValues;
};

const FlexRow = styled.div<Props>`
  display: flex;
  max-width: 100%;
  ${props => !props.isSmall && `flex-basis: 100%;`};

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
