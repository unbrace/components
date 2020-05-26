import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AlertWithIdentifier, AlertType, Button, Alerts } from '../components';

const AlertsExample: React.FC = () => {
  const [alerts, setAlerts] = React.useState<AlertWithIdentifier[]>([]);

  const testAlert: AlertWithIdentifier = {
    message: 'This is an alert',
    type: AlertType.Default,
    id: Math.random().toString(),
  };

  const handleAddAlert = () => setAlerts(a => [...a, testAlert]);
  const removeAlert = (id: string) => setAlerts(a => a.filter(x => x.id !== id));

  return (
    <div>
      <Alerts alerts={alerts} removeAlert={removeAlert} />
      <Button onClick={handleAddAlert}>Show alert</Button>
    </div>
  );
};

storiesOf('Alerts', module).add(
  'default',
  () => {
    return <AlertsExample />;
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);
