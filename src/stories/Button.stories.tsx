import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Button, IconButton, SubmitButton } from '../components/Button';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';

const Spacer = styled.div`
  > div {
    display: flex;
  }
  button {
    margin: 10px;
  }
`;

storiesOf('Button', module).add('colors', () => {
  return (
    <UnbraceThemeProvider>
      <Spacer>
        <div>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="success">success</Button>
          <Button color="danger">danger</Button>
          <Button color="tertiary">tertiary</Button>
          <Button color="neutral">neutral</Button>
        </div>
        <div>
          <Button variant="outline" color="primary">
            outline primary
          </Button>
          <Button variant="outline" color="secondary">
            outline secondary
          </Button>
          <Button variant="outline" color="success">
            outline success
          </Button>
          <Button variant="outline" color="danger">
            outline danger
          </Button>
          <Button variant="outline" color="tertiary">
            outline tertiary
          </Button>
        </div>
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

storiesOf('Button', module).add('icon button', () => {
  return (
    <UnbraceThemeProvider>
      <>
        <IconButton size="small">S</IconButton>
        <IconButton>N</IconButton>
        <IconButton size="large">L</IconButton>
      </>
    </UnbraceThemeProvider>
  );
});
