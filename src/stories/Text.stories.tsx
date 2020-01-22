import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Heading, Text } from '../components';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';

const propsStoryConfig = {
  props: {
    propTablesExclude: [UnbraceThemeProvider],
  },
};

storiesOf('Text', module).add(
  'headings',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Heading size="xxl">Heading size xxl @ Unbrace Components</Heading>
          <Heading asTag="h1" size="xl">
            Heading size xl @ Unbrace Components
          </Heading>
          <Heading asTag="h2" size="l">
            Heading size l @ Unbrace Components
          </Heading>
          <Heading asTag="h3" size="m">
            Heading size m @ Unbrace Components
          </Heading>
          <Heading asTag="h4" size="s">
            Heading size s @ Unbrace Components
          </Heading>
          <Heading asTag="h5" size="xs">
            Heading size xs @ Unbrace Components
          </Heading>
          <Heading asTag="h6" size="xxs">
            Heading size xxs @ Unbrace Components
          </Heading>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Text', module).add(
  'text',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Text asTag="p" size="xxl">
            Text size xxl @ Unbrace Components
          </Text>
          <Text asTag="p" size="xl">
            Text size xl @ Unbrace Components
          </Text>
          <Text asTag="p" size="l">
            Text size l @ Unbrace Components
          </Text>
          <Text asTag="p" size="m">
            Text size m @ Unbrace Components
          </Text>
          <Text asTag="p" size="s">
            Text size s @ Unbrace Components
          </Text>
          <Text asTag="p" size="xs">
            Text size xs @ Unbrace Components
          </Text>
          <Text asTag="p" size="xxs">
            Text size xxs @ Unbrace Components
          </Text>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  { ...{ propsStoryConfig } },
);
