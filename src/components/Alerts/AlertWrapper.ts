import styled, { ThemedStyledProps } from 'styled-components';
import { AlertType } from './Alerts';
import { media, ComponentTheme } from '../../theme';

const typeColors = (
  props: ThemedStyledProps<{ index: number; type: AlertType }, ComponentTheme>,
): { color: string; background: string } => {
  switch (props.type) {
    case AlertType.Danger:
      return {
        background: props.theme.alerts.color.dangerSecondary,
        color: props.theme.alerts.color.danger,
      };
    case AlertType.Success:
      return {
        background: props.theme.alerts.color.successSecondary,
        color: props.theme.alerts.color.success,
      };
    case AlertType.Warning:
      return {
        background: props.theme.alerts.color.warningSecondary,
        color: props.theme.alerts.color.warning,
      };
    case AlertType.Default:
    default:
      return {
        background: props.theme.alerts.color.defaultSecondary,
        color: props.theme.alerts.color.default,
      };
  }
};

export const AlertWrapper = styled.div<{ index: number; type: AlertType }>`
  &.alert-enter {
    opacity: 0;
  }
  &.alert-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.alert-exit {
    opacity: 1;
  }
  &.alert-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in;
  }

  align-items: center;
  background-color: ${props => typeColors(props).background};
  border-radius: ${props => props.theme.alerts.borderRadius.main};
  box-shadow: ${props => props.theme.alerts.boxShadow.main};
  border: 1px solid ${props => typeColors(props).color};
  display: flex;
  max-width: 470px;
  right: 30px;
  margin-top: 16px;
  position: relative;

  ${() => media.mobile`
    max-width: 100%;
    right: 0;
  `};

  .icon {
    align-items: center;
    background-color: ${props => typeColors(props).background};
    border-radius: ${props => props.theme.alerts.borderRadius.main} 0 0 ${props => props.theme.alerts.borderRadius.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 50px;
    width: 50px;

    svg {
      fill: ${props => typeColors(props).color};
      height: 25px;
      width: 25px;
    }
  }

  .message {
    align-items: center;
    background: ${props => props.theme.alerts.background.main};
    border-radius: 0 ${props => props.theme.alerts.borderRadius.main} ${props => props.theme.alerts.borderRadius.main} 0;
    border-left: 1px solid ${props => typeColors(props).color};
    display: flex;
    flex-grow: 1;
    font-size: 14px;
    height: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 40px;
    white-space: pre-wrap;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-50%) scale(1.1);
    }

    svg {
      fill: ${props => typeColors(props).color};
      height: 20px;
      width: 20px;
    }
  }
`;
