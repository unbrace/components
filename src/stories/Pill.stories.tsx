import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Pill } from '../components';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';

const propsStoryConfig = {
  props: {
    propTablesExclude: [UnbraceThemeProvider],
  },
};

storiesOf('Pill', module).add(
  'colors',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Pill size="m" color="neutral" style={{ marginRight: 8 }}>
            Neutral
          </Pill>
          <Pill size="m" color="primary" style={{ marginRight: 8 }}>
            Primary
          </Pill>
          <Pill size="m" color="danger" style={{ marginRight: 8 }}>
            Danger
          </Pill>
          <Pill size="m" color="success" style={{ marginRight: 8 }}>
            Success
          </Pill>
          <Pill size="m" color="warning" style={{ marginRight: 8 }}>
            Warning
          </Pill>
          <Pill size="m" color="secondary" style={{ marginRight: 8 }}>
            Secondary
          </Pill>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Pill', module).add(
  'sizing',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Pill size="m" color="primary" style={{ marginRight: 8 }}>
            Medium
          </Pill>
          <Pill size="s" color="primary" style={{ marginRight: 8 }}>
            Small
          </Pill>
          <Pill size="xs" color="primary" style={{ marginRight: 8 }}>
            Extra Small
          </Pill>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Pill', module).add(
  'usage',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Pill size="m" color="primary" style={{ marginRight: 8 }}>
            32
          </Pill>
          <Pill size="s" color="primary" style={{ marginRight: 8 }}>
            1
          </Pill>
          <Pill size="xs" color="primary" style={{ marginRight: 8 }}>
            2
          </Pill>
          <Pill size="m" color="danger" style={{ marginRight: 8 }}>
            999
          </Pill>
          <Pill size="s" color="danger" style={{ marginRight: 8 }}>
            02
          </Pill>
          <Pill size="xs" color="danger" style={{ marginRight: 8 }}>
            31
          </Pill>
          <Pill size="m" color="success" style={{ marginRight: 8 }}>
            ...
          </Pill>
          <Pill size="s" color="success" style={{ marginRight: 8 }}>
            11
          </Pill>
          <Pill size="xs" color="success" style={{ marginRight: 8 }}>
            +99
          </Pill>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  { ...{ propsStoryConfig } },
);
