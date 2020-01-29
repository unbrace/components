import * as React from 'react';
import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';
import Tooltip from '../Tooltip';

type Props = {
  isDisabled?: boolean;
  size?: 'small' | 'main' | 'large';
  tooltip?: string;
  tooltipPositionUp?: boolean;
  isLoading?: boolean;
  positionAbsolute?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

type State = {
  active: boolean;
  left: number;
  top: number;
};

class EnhancedIconButton extends React.Component<Props, State> {
  static getDerivedStateFromProps = (props: Props) => {
    if (props.isDisabled) {
      return {
        active: false,
      };
    }

    return null;
  };

  state = {
    active: false,
    left: 0,
    top: 0,
  };

  handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!this.props.isDisabled) {
      const position = e.currentTarget.getBoundingClientRect();
      const { left, bottom, top, width } = position;
      this.setState({
        active: true,
        left: this.props.positionAbsolute ? width / 2 : left + width / 2,
        top: this.props.tooltipPositionUp
          ? this.props.positionAbsolute
            ? 10 - width
            : top - width + 10
          : this.props.positionAbsolute
          ? width + 5
          : bottom + 5,
      });
    }
  };

  handleMouseLeave = () => {
    this.setState({
      active: false,
      left: 0,
      top: 0,
    });
  };

  render() {
    const { children, tooltip, positionAbsolute, ...other } = this.props;
    const { active, left, top } = this.state;

    return (
      <IconButton
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        type="button"
        onClick={!this.props.isDisabled ? this.props.onClick : undefined}
      >
        {children}
        {tooltip && active && !this.props.isDisabled && (
          <Tooltip style={{ top, left }} positionAbsolute={positionAbsolute}>
            {tooltip}
          </Tooltip>
        )}
      </IconButton>
    );
  }
}

const IconButton = styled('button')<Props>`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: ${props => props.theme.iconButton.color.normal};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${props => props.theme.iconButton.size.button[props.size ? props.size : 'main']};
  justify-content: space-around;
  margin: ${props => props.theme.iconButton.margin.main};
  padding: 0;
  transition: color, background 0.25s ease-out;
  position: relative;
  width: ${props => props.theme.iconButton.size.button[props.size ? props.size : 'main']};
  ${props => props.isDisabled && 'cursor: not-allowed'};

  &:hover {
    color: ${props => props.theme.iconButton.color.hover};
    background: ${props => (props.isDisabled ? 'transparent' : props.theme.iconButton.background.hover)};
  }

  > span > svg,
  > span > span > svg {
    width: ${props => props.theme.iconButton.size.icon[props.size ? props.size : 'main']};
    height: ${props => props.theme.iconButton.size.icon[props.size ? props.size : 'main']};
    fill: ${props =>
      props.isDisabled ? props.theme.iconButton.color.isDisabled : props.theme.iconButton.color.normal};
  }

  ${props =>
    props.isLoading &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        right: -2px;
        left: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-right: 2px solid ${props.theme.iconButton.color.normal};
        opacity: 0;
        animation: ${animations.rotation} 1.5s ease-in-out infinite, ${animations.fadeIn} 0.3s ease-in forwards;
      }
    `}
`;

export default EnhancedIconButton;
