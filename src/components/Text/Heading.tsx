import * as React from 'react';
import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { CommonTextProps } from './types';

type HeadingAsTagProps = {
  asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type HeadingProps = {
  weight?: 'thin';
} & CommonTextProps &
  HTMLAttributes<HTMLHeadingElement>;

const StyledHeading = styled.h1<HeadingProps>`
  font-weight: ${props => (props.weight === 'thin' ? 400 : 600)};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.text.fontSize.heading[props.size || 'm']};
  color: ${props => props.theme.text.color.heading[props.color || 'neutral'][props.colorLevel || 'normal']};
  line-height: 1.7;
  margin: 0;

  ${props =>
    props.transform &&
    css`
      text-transform: ${props.transform};
    `}
`;

export const Heading: React.FC<HeadingAsTagProps & HeadingProps> = ({
  asTag,
  ...rest
}: HeadingAsTagProps & HeadingProps) => <StyledHeading as={asTag} {...rest} />;
