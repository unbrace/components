import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import { Tooltip } from '../components';

const Wrapper = styled.div`
  margin: 20px 0 0 100px;
`;

storiesOf('Tooltip', module).add(
  'default',
  () => {
    return (
      <UnbraceThemeProvider>
        <Wrapper>
          <Tooltip>This is a tooltip</Tooltip>
        </Wrapper>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [Wrapper, UnbraceThemeProvider],
    },
  },
);
