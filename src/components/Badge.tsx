import styled, { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';
import merge from 'lodash.merge';
import { componentTheme, ComponentTheme } from '../theme';

type Props = {
  isCapitalized?: boolean;
  onlyText?: boolean;
  color?: 'danger' | 'success' | 'warning' | 'primary' | 'secondary';
  size?: 'xsmall' | 'small' | 'large';
};

const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const providedTheme = useContext(ThemeContext);
  const theme: ComponentTheme = providedTheme ? merge(componentTheme, providedTheme) : componentTheme;

  return <StyledBadge {...props} theme={theme} />;
};

const StyledBadge = styled('div')<Props>`
  align-self: center;
  display: inline-block;
  border-radius: ${props => props.theme.badge.borderRadius.main};
  font-size: ${props =>
    props.size === 'xsmall' ? props.theme.badge.fontSize.xsmall : props.theme.badge.fontSize.main};
  font-weight: ${props => props.theme.badge.fontWeight.main};
  letter-spacing: ${props => (props.isCapitalized ? 'normal' : '2px')};
  max-height: 100%;
  padding: ${props =>
    props.onlyText
      ? '0px'
      : props.size === 'large'
      ? props.theme.badge.padding.large
      : props.size === 'small' || props.size === 'xsmall'
      ? props.theme.badge.padding.small
      : props.theme.badge.padding.main};
  text-align: center;
  text-transform: ${props => (props.isCapitalized ? 'lowercase' : 'uppercase')};

  &:first-letter {
    text-transform: ${props => props.isCapitalized && 'uppercase'};
  }

  ${props => props.color === 'primary' && props.theme.badge.color.primary};
  ${props => props.color === 'primary' && !props.onlyText && props.theme.badge.background.primary};

  ${props => props.color === 'secondary' && props.theme.badge.color.secondary}
  ${props => props.color === 'secondary' && !props.onlyText && props.theme.badge.background.secondary};

  ${props => props.color === 'success' && props.theme.badge.color.success}
  ${props => props.color === 'success' && !props.onlyText && props.theme.badge.background.success};

  ${props => props.color === 'warning' && props.theme.badge.color.warning}
  ${props => props.color === 'warning' && !props.onlyText && props.theme.badge.background.warning};

  ${props => props.color === 'danger' && props.theme.badge.color.danger}
  ${props => props.color === 'danger' && !props.onlyText && props.theme.badge.background.danger};
`;

export default Badge;
