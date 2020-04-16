import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Badge } from '../components';

const Spacer = styled.div`
  > div {
    margin: 10px;
  }
`;

storiesOf('Badge', module).add('colors', () => {
  return (
    <Spacer>
      <Badge color="success">success</Badge>
      <Badge color="danger">danger</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="primary">primary</Badge>
      <Badge color="secondary">secondary</Badge>
    </Spacer>
  );
});

storiesOf('Badge', module).add('variants', () => {
  return (
    <Spacer>
      <Badge color="primary" size="xsmall">
        xsmall
      </Badge>
      <Badge color="primary" size="small">
        small
      </Badge>
      <Badge color="primary">regular</Badge>
      <Badge color="primary" size="large">
        large
      </Badge>
      <Badge color="primary" isCapitalized>
        capitalized
      </Badge>
      <Badge color="primary" onlyText>
        only text
      </Badge>
      <Badge color="primary" onDelete={() => alert('delete!')}>
        Deletable
      </Badge>
      <Badge color="primary" size="small" onDelete={() => alert('delete!')}>
        Deletable
      </Badge>
      <Badge color="primary" size="large" onDelete={() => alert('delete!')}>
        Deletable
      </Badge>
    </Spacer>
  );
});
