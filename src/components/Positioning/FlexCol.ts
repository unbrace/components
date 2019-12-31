import styled, { css } from 'styled-components';
import { media } from '../../theme/config';
import { FlexValues } from './types';

type Props = {
  alignItems?: FlexValues;
  isFullWidth?: boolean;
  justifyContent?: FlexValues;
};

const FlexCol = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 100%;
  overflow: auto;

  ${props => media.tablet`
    max-width: ${props.isFullWidth ? '100%' : `calc(100% - ${props.theme.sidebar.width.large})`} ;
    `};

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

export default FlexCol;
