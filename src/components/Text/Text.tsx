import * as React from 'react';
import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { CommonTextProps } from './types';

type TextAsTagProps = {
  asTag?:
    | 'p'
    | 'span'
    | 'small'
    | 'big'
    | 'strong'
    | 'b'
    | 'i'
    | 's'
    | 'u'
    | 'del'
    | 'ins'
    | 'blockquote'
    | 'q'
    | 'code'
    | 'address'
    | 'pre';
};

type TextProps = { weight?: 'bolder' } & CommonTextProps & HTMLAttributes<HTMLElement>;

const StyledText = styled.p<TextAsTagProps & TextProps>`
  font-weight: ${props => (props.weight === 'bolder' ? 500 : 400)};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.text.fontSize.text[props.size || 'm']};
  color: ${props => props.theme.text.color.text[props.color || 'neutral'][props.colorLevel || 'normal']};
  line-height: 1.6;
  margin: ${props => (props.asTag === 'p' ? '0 0 16px 0' : '0')};

  ${props =>
    props.transform &&
    css`
      text-transform: ${props.transform};
    `}
`;

export const Text: React.FC<TextAsTagProps & TextProps> = ({ asTag, ...rest }: TextAsTagProps & TextProps) => (
  <StyledText as={asTag} {...rest} />
);
