import * as React from 'react';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';

type HeadingAsTagProps = {
  asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type TextProps = {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
} & HTMLAttributes<HTMLHeadingElement>;

const StyledHeading = styled.h1<TextProps>`
  font-weight: 600;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.text.fontSize.heading[props.size || 'm']};
  line-height: 1.7;
  margin: 0;
`;

export const Heading: React.FC<HeadingAsTagProps & TextProps> = ({ asTag, ...rest }: HeadingAsTagProps & TextProps) => (
  <StyledHeading as={asTag} {...rest} />
);

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

const StyledText = styled.p<TextAsTagProps & TextProps>`
  font-weight: 400;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.text.fontSize.text[props.size || 'm']};
  line-height: 1.6;
  margin: ${props => (props.asTag === 'p' ? '0 0 16px 0' : '0')};
`;

export const Text: React.FC<TextAsTagProps & TextProps> = ({ asTag, ...rest }: TextAsTagProps & TextProps) => (
  <StyledText as={asTag} {...rest} />
);
