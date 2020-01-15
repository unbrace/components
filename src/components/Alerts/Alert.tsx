import * as React from 'react';
import { AlertBell, Checkmark, Close, Cross, Warning } from '../icons';
import { AlertWrapper } from './AlertWrapper';
import { AlertWithIdentifier, AlertType } from './Alerts';

type Props = {
  alert: AlertWithIdentifier;
  index: number;
  removeAlert: (id: string) => void;
  className?: string;
  noAutoClose?: boolean;
  duration?: number;
};

const Alert: React.FunctionComponent<Props> = ({
  alert,
  index,
  removeAlert,
  className,
  noAutoClose,
  duration,
}: Props) => {
  const removeSelf = React.useCallback(() => {
    removeAlert(alert.id);
  }, [removeAlert, alert.id]);

  React.useEffect(() => {
    if (!noAutoClose) {
      setTimeout(
        () => {
          removeSelf();
        },
        duration || alert.type !== AlertType.Success ? 5000 : 10000,
      );
    }
  }, [alert, removeSelf, noAutoClose]);

  return (
    <AlertWrapper index={index} type={alert.type} className={className}>
      <div className="icon">
        {alert.type === AlertType.Default && <AlertBell />}
        {alert.type === AlertType.Success && <Checkmark />}
        {alert.type === AlertType.Warning && <Warning />}
        {alert.type === AlertType.Danger && <Cross />}
      </div>
      <div className="message">{alert.message}</div>
      <div className="close">
        <Close onClick={removeSelf} />
      </div>
    </AlertWrapper>
  );
};

export default Alert;
