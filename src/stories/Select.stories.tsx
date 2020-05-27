import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Select } from '../components/Select';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
`;

storiesOf('Select', module).add(
  'default',
  () => {
    return (
      <Wrapper>
        <Select
          options={[
            { label: 'option 1', value: '1' },
            { label: 'option 2', value: '2' },
            { label: 'option 3', value: '3' },
          ]}
        />
      </Wrapper>
    );
  },
  {
    props: {
      propTablesExclude: [Wrapper],
    },
  },
);
