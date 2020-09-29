import { storiesOf } from '@storybook/react';
import * as React from 'react';
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
          <Tooltip position="bottom" content="Position bottom">
            <InlineBlock>Tooltip position bottom</InlineBlock>
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
        <div>
          <Tooltip position="top-left" content="Position top-left">
            <InlineBlock>Tooltip position top-left</InlineBlock>
          </Tooltip>
        </div>
        <div>
          <Tooltip position="top-right" content="Position top-right">
            <InlineBlock>Tooltip position top-right</InlineBlock>
          </Tooltip>
        </div>
        <div>
          <Tooltip position="bottom-right" content="Position bottom-right">
            <InlineBlock>Tooltip position bottom-right</InlineBlock>
          </Tooltip>
        </div>
        <div>
          <Tooltip position="bottom-left" content="Position bottom-left">
            <InlineBlock>Tooltip position bottom-left</InlineBlock>
          </Tooltip>
        </div>
        <div style={{ position: 'relative' }}>
          <Tooltip positionAbsolute content="Position absolute">
            <InlineBlock>Rendered with position absolute</InlineBlock>
          </Tooltip>
        </div>
      </ExamplesWrapper>
    );
  },
  {
    props: {
      propTablesExclude: [ExamplesWrapper, InlineBlock],
    },
  },
);
