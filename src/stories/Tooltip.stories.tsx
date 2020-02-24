import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import { Tooltip } from '../components';

const ExamplesWrapper = styled.div`
  margin: 50px 200px;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
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
            <Tooltip content="Tooltip!">
              <InlineBlock>Default tooltip (hover me!)</InlineBlock>
            </Tooltip>
          </div>
          <div>
            <Tooltip position="top" content="Position top">
              <InlineBlock>Tooltip position top</InlineBlock>
            </Tooltip>
          </div>
          <div>
            <Tooltip position="left" content="Position left">
              <InlineBlock>Tooltip position left</InlineBlock>
            </Tooltip>
          </div>
          <div>
            <Tooltip position="right" content="Position right">
              <InlineBlock>Tooltip position right</InlineBlock>
            </Tooltip>
          </div>
          <div style={{ position: 'relative' }}>
            <Tooltip positionAbsolute content="Position absolute">
              <InlineBlock>Rendered with position absolute</InlineBlock>
            </Tooltip>
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
