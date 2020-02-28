import styled from 'styled-components';
import { Props } from '.';
import { Close } from '../icons';

export const Badge = styled('div')<Props>`
  align-items: center;
  align-self: center;
  background-color: ${props => !props.onlyText && props.theme.badge.background[`${props.color}`]};
  border-radius: ${props => props.theme.badge.borderRadius.main};
  color: ${props => props.theme.badge.color[`${props.color}`]};
  display: inline-flex;
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
    text-transform: ${props => props.isCapitalized && 'uppercase !important'};
  }
`;

export const CloseIcon = styled(Close)<Props>`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.2s linear;
  border: solid 1px ${props => props.theme.badge.color[`${props.color}`]};
  border-radius: 50%;
  padding: 1px;
  margin-right: ${props =>
    props.size === 'large' ? `-8px` : props.size === 'small' || props.size === 'xsmall' ? `-2px` : `-10px`};

  svg {
    fill: ${props => props.theme.badge.color[`${props.color}`]};
    height: 1.1em;
    width: 1.1em;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const BadgeContent = styled.span<{ isCapitalized?: boolean }>`
  display: inline-block;
  &:first-letter {
    text-transform: ${props => props.isCapitalized && 'uppercase !important'};
  }
`;
