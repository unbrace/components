import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { SubmitButton } from '../components/Button';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';

storiesOf('Button', module).add('colors', () => {
  return (
    <UnbraceThemeProvider>
      <div>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="danger">danger</Button>
        <Button color="tertiary">tertiary</Button>
      </div>
    </UnbraceThemeProvider>
  );
});

storiesOf('Button', module).add('submit Buttons', () => {
  const [loading, setloading] = React.useState(false);
  const handleFakeLoading = () => {
    setloading(true);
    setTimeout(() => setloading(false), 2000);
  };

  return (
    <UnbraceThemeProvider>
      <SubmitButton isLoading={loading} onClick={handleFakeLoading} color="primary">
        primary
      </SubmitButton>
    </UnbraceThemeProvider>
  );
});
