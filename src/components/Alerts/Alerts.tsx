import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Alert from './Alert';
import { media } from '../../theme';

export type AlertWithIdentifier = {
  message: string;
  id: string;
  type: AlertType;
  noAutoClose?: boolean;
};

export enum AlertType {
  Warning,
  Danger,
  Success,
  Default,
}

type Props = {
  alerts: AlertWithIdentifier[];
  removeAlert: (id: string) => void;
};

const AlertContainer = styled(TransitionGroup)`
  position: fixed;
  ${props => props.theme.alerts.positioning.main.left && `left: ${props.theme.alerts.positioning.main.left};`};
  ${props => props.theme.alerts.positioning.main.top && `top: ${props.theme.alerts.positioning.main.top};`};
  ${props => props.theme.alerts.positioning.main.right && `right: ${props.theme.alerts.positioning.main.right};`};
  z-index: 99999;

  ${props => media.mobile`
    ${props.theme.alerts.positioning.mobile.left && `left: ${props.theme.alerts.positioning.mobile.left};`};
    ${props.theme.alerts.positioning.mobile.top && `top: ${props.theme.alerts.positioning.mobile.top};`};
    ${props.theme.alerts.positioning.mobile.right && `right: ${props.theme.alerts.positioning.mobile.right};`};;
  `};
`;

const Alerts: React.FunctionComponent<Props> = ({ alerts, removeAlert }: Props) => {
  return (
    <AlertContainer className="alert-list">
      {alerts.map((alert, index) => (
        <CSSTransition timeout={200} classNames="alert" key={alert.id} appear>
          <Alert key={alert.id} alert={alert} index={index} removeAlert={removeAlert} noAutoClose={alert.noAutoClose} />
        </CSSTransition>
      ))}
    </AlertContainer>
  );
};

export default Alerts;
