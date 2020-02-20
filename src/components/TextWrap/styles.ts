import styled, { css } from 'styled-components';
import { TextWrapProps } from '.';

export const TextWrap = styled.span<TextWrapProps & { listCount?: number }>`
  display: block;
  margin-right: ${props => (props.listCount ? '40px;' : 0)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props =>
    props.isCapitalized &&
    css`
      text-transform: capitalize;
    `}

  ${props =>
    props.listCount &&
    css`
    &:before {
      background: ${props.theme.textWrap.background.pill};
      border-radius: 16px;
      content: '${props.listCount}';
      padding: 0px 8px;
      position: absolute;
      right: 8px;
    }
  `}
`;
