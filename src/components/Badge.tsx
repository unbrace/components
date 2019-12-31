import styled from 'styled-components';

type Props = {
  color?: 'danger' | 'success' | 'warning' | 'primary' | 'secondary';
  isCapitalized?: boolean;
  onlyText?: boolean;
  size?: 'xsmall' | 'small' | 'large';
};

const Badge = styled('div')<Props>`
  align-self: center;
  background-color: ${props => !props.onlyText && props.theme.badge.background[`${props.color}`]};
  border-radius: ${props => props.theme.badge.borderRadius.main};
  color: ${props => props.theme.badge.color[`${props.color}`]};
  display: inline-block;
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
`;

export default Badge;
