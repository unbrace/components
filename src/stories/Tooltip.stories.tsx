import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import { Tooltip2 } from '../components';

const ExamplesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 10px;
  }
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

storiesOf('Tooltip', module).add(
  'default',
  () => {
    return (
      <UnbraceThemeProvider>
        <ExamplesWrapper>
          <div>
            <Tooltip2 text="Tooltip!">
              <InlineBlock>Default tooltip (hover me!)</InlineBlock>
            </Tooltip2>
          </div>
          <div>
            <Tooltip2 position="top" text="Position top">
              <InlineBlock>Tooltip position top</InlineBlock>
            </Tooltip2>
          </div>
          <div style={{ position: 'relative' }}>
            <Tooltip2 positionAbsolute text="Position absolute">
              <InlineBlock>Rendered with position absolute</InlineBlock>
            </Tooltip2>
          </div>
        </ExamplesWrapper>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [ExamplesWrapper, InlineBlock, UnbraceThemeProvider],
    },
  },
);
