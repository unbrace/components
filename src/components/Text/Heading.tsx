import * as React from 'react';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';

type HeadingAsTagProps = {
  asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type HeadingProps = {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'neutral' | 'warning';
} & HTMLAttributes<HTMLHeadingElement>;

const StyledHeading = styled.h1<HeadingProps>`
  font-weight: 600;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.text.fontSize.heading[props.size || 'm']};
  color: ${props => props.theme.text.color.heading[props.color || 'neutral']};
  line-height: 1.7;
  margin: 0;
`;

export const Heading: React.FC<HeadingAsTagProps & HeadingProps> = ({
  asTag,
  ...rest
}: HeadingAsTagProps & HeadingProps) => <StyledHeading as={asTag} {...rest} />;
