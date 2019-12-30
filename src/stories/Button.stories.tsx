import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button, { SubmitButton } from '../components/Button';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';

const Spacer = styled.div`
  > button {
    margin: 10px;
  }
`;

storiesOf('Button', module).add('colors', () => {
  return (
    <UnbraceThemeProvider>
      <Spacer>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="danger">danger</Button>
        <Button color="tertiary">tertiary</Button>
      </Spacer>
    </UnbraceThemeProvider>
  );
});

storiesOf('Button', module).add('variants', () => {
  const [loading, setloading] = React.useState(false);
  const handleFakeLoading = () => {
    setloading(true);
    setTimeout(() => setloading(false), 2000);
  };

  return (
    <UnbraceThemeProvider>
      <Spacer>
        <SubmitButton isLoading={loading} onClick={handleFakeLoading} color="primary">
          Submit
        </SubmitButton>
        <Button isDisabled color="primary">
          disabled
        </Button>
        <SubmitButton isLoading color="primary">
          always loading
        </SubmitButton>
      </Spacer>
    </UnbraceThemeProvider>
  );
});
